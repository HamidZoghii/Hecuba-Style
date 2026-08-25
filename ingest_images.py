#!/usr/bin/env python3
"""
Hecuba Style — image ingest pipeline.

Drop new photos into `_incoming/` and run this. It will:
  1. crop to the exact aspect ratio each slot needs (centre crop, no squashing)
  2. resize to the target render size
  3. save as WebP quality 85 at the exact path the code expects
  4. update every width/height attribute in the HTML to match
  5. verify that nothing is broken afterwards

Usage
-----
    python3 ingest_images.py --check          # what's missing / what's stale
    python3 ingest_images.py                  # process _incoming/
    python3 ingest_images.py --sync-dims      # only refresh width/height in HTML

Naming
------
Name the file in `_incoming/` after the slot it fills — the basename is enough:

    _incoming/bra-sage-lace.jpg   ->  images/AX/bra-sage-lace.webp
    _incoming/hero-full.png       ->  images/AX/hero-full.webp
    _incoming/blog-care.jpeg      ->  images/blog-care.webp

Extension and subfolder don't matter; the basename is matched against the slot
list below. Anything unmatched is reported, not silently dropped.
"""

import argparse
import glob
import os
import re
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow required:  pip install Pillow")

ROOT = os.path.dirname(os.path.abspath(__file__))
INCOMING = os.path.join(ROOT, '_incoming')
QUALITY = 85

# slot -> (target_width, target_height).  Derived from the CSS box each slot renders into.
SPEC = {
    # hero + backgrounds
    'images/AX/hero-full.webp':                 (2400, 900),
    'images/AX/bundle-bg.webp':                 (1600, 400),
    # category cards + product shots: 3:4 portrait
    'images/AX/bra-sage-lace.webp':             (900, 1200),
    'images/AX/bra-sage-smooth.webp':           (900, 1200),
    'images/AX/bra-mocha-smooth.webp':          (900, 1200),
    'images/AX/panty-sage-lace.webp':           (900, 1200),
    'images/AX/panty-sage-smooth.webp':         (900, 1200),
    'images/AX/panty-sage-lace-scallop.webp':   (900, 1200),
    'images/AX/panty-mocha-smooth.webp':        (900, 1200),
    'images/AX/flatlay-sage-set-flowers.webp':  (900, 1200),
    'images/AX/set-sage-with-robe.webp':        (900, 1200),
    'images/AX/set-sage-light-with-robe.webp':  (900, 1200),
    'images/AX/bodysuit-black-sheer.webp':      (900, 1200),
    'images/AX/bodysuit-sage-lace.webp':        (900, 1200),
    'images/AX/slip-sage-lace.webp':            (900, 1200),
    'images/AX/robe-sage-lace.webp':            (900, 1200),
    'images/AX/texture-sage-lace.webp':         (900, 1200),
    'images/bodysuit-main.webp':                (900, 1200),
    'images/bralette-main.webp':                (900, 1200),
    'images/bralette-alt.webp':                 (900, 1200),
    'images/fantasy-main.webp':                 (900, 1200),
    'images/sleepwear-main.webp':               (900, 1200),
    'images/swim-main.webp':                    (900, 1200),
    'images/swim-alt.webp':                     (900, 1200),
    'images/loungewear-main.webp':              (900, 1200),
    'images/loungewear-alt.webp':               (900, 1200),
    'images/loungewear-alt2.webp':              (900, 1200),
    'images/lifestyle-coffee.webp':             (1000, 1000),
    # editorial / blog: 3:2 landscape
    'images/about-editorial.webp':              (1200, 800),
    'images/blog-bra-size.webp':                (1200, 800),
    'images/blog-bra-types.webp':               (1200, 800),
    'images/blog-brief-guide.webp':             (1200, 800),
    'images/blog-care.webp':                    (1200, 800),
    'images/blog-replace.webp':                 (1200, 800),
    'images/blog-everyday.webp':                (1200, 800),
}

BY_BASENAME = {os.path.splitext(os.path.basename(k))[0]: k for k in SPEC}


def referenced_slots():
    """Every images/... path the code actually asks for."""
    found = set()
    files = glob.glob(os.path.join(ROOT, '*.html'))
    files += [os.path.join(ROOT, 'js/main.js'), os.path.join(ROOT, 'css/style.css')]
    pat = re.compile(r'images/[A-Za-z0-9_./-]+\.(?:webp|png|jpe?g|svg|avif)')
    for f in files:
        if not os.path.exists(f):
            continue
        found |= set(pat.findall(open(f, 'rb').read().decode('utf-8')))
    return found


def cover_resize(im, tw, th):
    """Centre-crop to the target aspect ratio, then resize. Never distorts."""
    im = im.convert('RGB')
    sw, sh = im.size
    target, source = tw / th, sw / sh
    if source > target:                       # too wide -> trim sides
        new_w = round(sh * target)
        left = (sw - new_w) // 2
        im = im.crop((left, 0, left + new_w, sh))
    elif source < target:                     # too tall -> trim top/bottom,
        new_h = round(sw / target)            # biased upward to keep faces in frame
        top = (sh - new_h) // 3
        im = im.crop((0, top, sw, top + new_h))
    return im.resize((tw, th), Image.LANCZOS)


def sync_dims():
    """Rewrite width/height in every static <img> to the file's real size."""
    dims = {}
    for p in glob.glob(os.path.join(ROOT, 'images/**/*.webp'), recursive=True):
        rel = os.path.relpath(p, ROOT).replace('\\', '/')
        with Image.open(p) as im:
            dims[rel] = im.size

    touched = 0
    for f in sorted(glob.glob(os.path.join(ROOT, '*.html'))):
        s = open(f, 'rb').read().decode('utf-8')
        orig = s

        def fix(mm):
            tag = mm.group(0)
            src = re.search(r'src="([^"]+)"', tag)
            if not src or src.group(1) not in dims:
                return tag
            w, h = dims[src.group(1)]
            tag = re.sub(r'\s+width="[^"]*"', '', tag)
            tag = re.sub(r'\s+height="[^"]*"', '', tag)
            return tag[:-1].rstrip() + f' width="{w}" height="{h}">'

        s = re.sub(r'<img\b[^>]*>', fix, s)
        if s != orig:
            open(f, 'wb').write(s.encode('utf-8'))
            print(f'  dims synced: {os.path.basename(f)}')
            touched += 1
    return touched


def check():
    refs = referenced_slots()
    missing = sorted(r for r in refs if not os.path.exists(os.path.join(ROOT, r)))
    unspecced = sorted(r for r in refs if r not in SPEC and not r.endswith('.svg'))

    print(f'{len(refs)} slots referenced by the code')
    print(f'{len(refs) - len(missing)} present, {len(missing)} missing\n')
    if missing:
        print('MISSING (site will show a broken image here):')
        for m in missing:
            tw, th = SPEC.get(m, ('?', '?'))
            print(f'  {m:46s} needs {tw} x {th}')
    if unspecced:
        print('\nreferenced but not in SPEC (add a size if you want it managed):')
        for u in unspecced:
            print(f'  {u}')

    stale = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'images/**/*.webp'), recursive=True)):
        rel = os.path.relpath(p, ROOT).replace('\\', '/')
        if rel not in SPEC:
            continue
        with Image.open(p) as im:
            if im.size != SPEC[rel]:
                stale.append((rel, im.size, SPEC[rel]))
    if stale:
        print('\nwrong size (re-run ingest to fix):')
        for rel, got, want in stale:
            print(f'  {rel:46s} {got[0]}x{got[1]} -> should be {want[0]}x{want[1]}')
    return len(missing)


def ingest():
    if not os.path.isdir(INCOMING):
        os.makedirs(INCOMING)
        print(f'created {INCOMING}/ — drop your photos in there and re-run')
        return

    files = [f for f in glob.glob(os.path.join(INCOMING, '**/*'), recursive=True)
             if os.path.isfile(f) and not f.lower().endswith(('.md', '.txt'))]
    if not files:
        print(f'nothing in {INCOMING}/')
        return

    done, skipped = 0, []
    for f in sorted(files):
        base = os.path.splitext(os.path.basename(f))[0]
        slot = BY_BASENAME.get(base)
        if not slot:
            skipped.append(os.path.basename(f))
            continue
        tw, th = SPEC[slot]
        dest = os.path.join(ROOT, slot)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        try:
            with Image.open(f) as im:
                sw, sh = im.size
                if sw < tw or sh < th:
                    print(f'  WARN {base}: source {sw}x{sh} is smaller than target '
                          f'{tw}x{th} — it will be upscaled and look soft')
                cover_resize(im, tw, th).save(dest, 'WEBP', quality=QUALITY, method=6)
            kb = os.path.getsize(dest) / 1024
            print(f'  {base:34s} {sw}x{sh} -> {slot}  ({kb:.0f} KB)')
            done += 1
        except Exception as e:
            print(f'  ERROR {base}: {e}')

    print(f'\n{done} images written')
    if skipped:
        print(f'{len(skipped)} unmatched (basename not in the slot list): '
              f'{", ".join(skipped[:8])}{" ..." if len(skipped) > 8 else ""}')
    if done:
        print('\nsyncing width/height in HTML...')
        sync_dims()
    print()
    check()


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true', help='report status only')
    ap.add_argument('--sync-dims', action='store_true', help='refresh width/height only')
    a = ap.parse_args()
    if a.check:
        sys.exit(1 if check() else 0)
    elif a.sync_dims:
        n = sync_dims()
        print(f'{n} files updated')
    else:
        ingest()

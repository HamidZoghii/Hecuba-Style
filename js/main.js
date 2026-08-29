/* ==========================================================================
   HECUBA STYLE — Shared JavaScript
   Sample Product Data + Component Interactions
   Used across all pages (Home, Shop, Category, Product, About/Contact)
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     01. SAMPLE PRODUCT DATA
     A small, realistic dataset that demonstrates the full data structure.
     Easily extendable to 120+ products — this shape maps 1:1 to a future
     WooCommerce product (name → post_title, category → product_cat,
     colors/sizes → product attributes/variations, images → gallery).
     ------------------------------------------------------------------------ */
  const BRAND = 'هکوبا استایل';

  const PRODUCTS = [
    {
      id: 'hb-101', sku: 'HEC-SWIM-1101', image: 'images/products/1957160.webp',
      name: 'بیکینی هالتر تای‌دای غروب', category: 'مایو زنانه', categorySlug: 'swim',
      price: 1290000, comparePrice: 1590000,
      colors: ['#D2691E', '#8B2500'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'پارچه‌ی مایو ضدکلر با خاصیت خشک‌شوندگی سریع', model: 'هالتر بندی', usage: 'ساحل و استخر', brand: BRAND,
      description: 'طرح تای‌دای نارنجی و قرمز که رنگ‌هاش دقیقاً یادآور غروب کنار دریاست؛ بند هالتر قابل تنظیم برای فیت دقیق‌تر.',
      rating: 4.7, reviews: 41, tags: ['new'], inStock: true
    },
    {
      id: 'hb-102', sku: 'HEC-SWIM-1102', image: 'images/products/2033940.webp',
      name: 'بیکینی هالتر آبی اقیانوسی', category: 'مایو زنانه', categorySlug: 'swim',
      price: 1190000, comparePrice: 1450000,
      colors: ['#1E3A8A', '#FFFFFF'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'پارچه‌ی مایو ضدکلر با خاصیت خشک‌شوندگی سریع', model: 'هالتر بندی با نوار کناری', usage: 'ساحل و استخر', brand: BRAND,
      description: 'آبی سرمه‌ای با نوار سفید کناری؛ برش کلاسیک بیکینی که برای هر اندامی راحت میفته.',
      rating: 4.8, reviews: 53, tags: ['bestseller'], inStock: true
    },
    {
      id: 'hb-103', sku: 'HEC-SWIM-1103', image: 'images/products/2052698.webp',
      name: 'مایو یک‌تکه راه‌راه رنگین‌کمانی', category: 'مایو زنانه', categorySlug: 'swim',
      price: 1390000, comparePrice: 1690000,
      colors: ['#E07850', '#6090C0', '#F0E8A0'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'پارچه‌ی مایو ضدکلر با خاصیت خشک‌شوندگی سریع', model: 'یک‌تکه بدون پد', usage: 'ساحل و استخر', brand: BRAND,
      description: 'ترکیب رنگ‌های راه‌راه که یک‌تکه‌ی ساده رو به یه انتخاب پرانرژی تبدیل کرده؛ پوشش کامل و راحت.',
      rating: 4.6, reviews: 22, tags: ['new'], inStock: true
    },
    {
      id: 'hb-104', sku: 'HEC-SWIM-1104', image: 'images/products/2119455.webp',
      name: 'مایو یک‌تکه زرد کات‌اوت', category: 'مایو زنانه', categorySlug: 'swim',
      price: 1290000, comparePrice: 1550000,
      colors: ['#F0B000'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'پارچه‌ی مایو ضدکلر با خاصیت خشک‌شوندگی سریع', model: 'یک‌تکه کات‌اوت', usage: 'ساحل و استخر', brand: BRAND,
      description: 'برش کات‌اوت روی کمر که فرم بدن رو قشنگ نشون می‌ده، در رنگ زرد پرانرژی برای تابستون.',
      rating: 4.7, reviews: 34, tags: [], inStock: true
    },
    {
      id: 'hb-105', sku: 'HEC-SWIM-1105', image: 'images/products/2135713.webp',
      name: 'بیکینی گلدار آفتابگردان', category: 'مایو زنانه', categorySlug: 'swim',
      price: 990000, comparePrice: 1250000,
      colors: ['#A0522D', '#E8D840'],
      sizes: ['S', 'M', 'L'],
      material: 'پارچه‌ی مایو ضدکلر با خاصیت خشک‌شوندگی سریع', model: 'مثلثی بندی', usage: 'ساحل و استخر', brand: BRAND,
      description: 'بالاتنه‌ی مثلثی رنگ خاکی و شلوارک با پرینت آفتابگردان؛ ترکیبی متفاوت برای کسی که از یک‌رنگی خسته شده.',
      rating: 4.5, reviews: 18, tags: ['sale'], inStock: true
    },
    {
      id: 'hb-106', sku: 'HEC-SWIM-1106', image: 'images/products/2139453.webp',
      name: 'بیکینی مشکی بندی مدل هارلی', category: 'مایو زنانه', categorySlug: 'swim',
      price: 890000, comparePrice: 1090000,
      colors: ['#1A1A1A'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'پارچه‌ی مایو ضدکلر با خاصیت خشک‌شوندگی سریع', model: 'بندی با گره رو به بالا', usage: 'ساحل و استخر', brand: BRAND,
      description: 'مشکی کلاسیک، بندهای قابل تنظیم دور گردن و کمر؛ یک بیکینی پایه که تو هر کمد جا داره.',
      rating: 4.8, reviews: 61, tags: ['bestseller'], inStock: true
    },
    {
      id: 'hb-201', sku: 'HEC-SET-1201', image: 'images/products/1929064.webp',
      name: 'ست سوتین و شورت خاکستری مه‌آلود', category: 'ست لباس زیر', categorySlug: 'set',
      price: 890000, comparePrice: 1090000,
      colors: ['#A8A8B4'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'میکروفایبر نرم با پوشش مخملی', model: 'سوتین بدون سیم و شورت هم‌رنگ', usage: 'روزمره', brand: BRAND,
      description: 'ست دوتکه‌ی خاکستری با پارچه‌ای به‌شدت نرم؛ گزینه‌ای بی‌ادعا برای هر روز که هم راحته هم شیک.',
      rating: 4.7, reviews: 29, tags: ['new'], inStock: true
    },
    {
      id: 'hb-202', sku: 'HEC-SET-1202', image: 'images/products/2025470.webp',
      name: 'ست کنتراست مشکی و سبز زیتونی', category: 'ست لباس زیر', categorySlug: 'set',
      price: 950000, comparePrice: 1190000,
      colors: ['#1A1A1A', '#8A9A78'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'کاتن نرم با یقه‌ی توری', model: 'سوتین و شورت کنتراست‌رنگ', usage: 'روزمره', brand: BRAND,
      description: 'سوتین مشکی و شورت سبز زیتونی، ترکیبی جسورانه به‌جای ست تک‌رنگ همیشگی.',
      rating: 4.6, reviews: 24, tags: [], inStock: true
    },
    {
      id: 'hb-203', sku: 'HEC-SET-1203', image: 'images/products/2043512.webp',
      name: 'ست سوتین و شورت آبی پودری', category: 'ست لباس زیر', categorySlug: 'set',
      price: 890000, comparePrice: 1090000,
      colors: ['#A8C8E8'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'میکروفایبر نرم با پوشش مخملی', model: 'سوتین بدون سیم و شورت هم‌رنگ', usage: 'روزمره', brand: BRAND,
      description: 'آبی پودری آرام‌بخش؛ جنس نرم و بدون درز که زیر لباس هم اصلاً حس نمی‌شه.',
      rating: 4.8, reviews: 37, tags: ['bestseller'], inStock: true
    },
    {
      id: 'hb-204', sku: 'HEC-SET-1204', image: 'images/products/2303297.webp',
      name: 'ست توری مشکی مدل شب', category: 'ست لباس زیر', categorySlug: 'set',
      price: 1090000, comparePrice: 1350000,
      colors: ['#1A1A1A'],
      sizes: ['S', 'M', 'L'],
      material: 'توری الاستیک ظریف', model: 'سوتین سیم‌دار و شورت توری', usage: 'مخصوص مهمانی', brand: BRAND,
      description: 'توری ظریف مشکی با جزئیات دوخت‌شده؛ برای شب‌هایی که می‌خوای یه‌کم خاص‌تر باشی.',
      rating: 4.7, reviews: 19, tags: ['new'], inStock: true
    },
    {
      id: 'hb-205', sku: 'HEC-SET-1205', image: 'images/products/3156808.webp',
      name: 'ست توری مشکی و طرح پلنگی', category: 'ست لباس زیر', categorySlug: 'set',
      price: 1150000, comparePrice: 1420000,
      colors: ['#1A1A1A', '#6B4A2A'],
      sizes: ['S', 'M', 'L'],
      material: 'توری الاستیک ظریف', model: 'سوتین توری و شورت پلنگی', usage: 'مخصوص مهمانی', brand: BRAND,
      description: 'سوتین توری مشکی همراه با شورت طرح پلنگی؛ ترکیبی جسور برای کسی که از طرح‌های ساده خسته شده.',
      rating: 4.6, reviews: 15, tags: ['sale'], inStock: true
    },
    {
      id: 'hb-301', sku: 'HEC-BRA-1301', image: 'images/products/1905514.webp',
      name: 'سوتین ساتن مدل دوقلو', category: 'سوتین زنانه', categorySlug: 'bra',
      price: 690000, comparePrice: 850000,
      colors: ['#0B3D2E', '#4B0B33'],
      sizes: ['75B', '80B', '85B', '90B'],
      material: 'ساتن نرم با یقه‌ی گسترده', model: 'بدون سیم، بند پهن', usage: 'روزمره', brand: BRAND,
      description: 'سوتین ساتن با یقه‌ی گسترده و بند پهن راحت؛ در دو رنگ سبز جنگلی و بنفش تیره.',
      rating: 4.7, reviews: 33, tags: ['new'], inStock: true
    },
    {
      id: 'hb-302', sku: 'HEC-BRA-1302', image: 'images/products/2436579.webp',
      name: 'سوتین بدون سیم لاوندری', category: 'سوتین زنانه', categorySlug: 'bra',
      price: 590000, comparePrice: 750000,
      colors: ['#E8E0F0'],
      sizes: ['75B', '80B', '85B', '90B'],
      material: 'کاتن پنبه‌ای نرم', model: 'بدون سیم', usage: 'روزمره', brand: BRAND,
      description: 'رنگ لاوندر روشن و ملایم؛ یک سوتین بدون سیم که تمام روز حسش نمی‌کنی.',
      rating: 4.8, reviews: 58, tags: ['bestseller'], inStock: true
    },
    {
      id: 'hb-303', sku: 'HEC-BRA-1303', image: 'images/products/3118717.webp',
      name: 'سوتین دوردوزی مشکی و صورتی', category: 'سوتین زنانه', categorySlug: 'bra',
      price: 650000, comparePrice: 820000,
      colors: ['#1A1A1A', '#E8B8C8'],
      sizes: ['75B', '80B', '85B', '90B'],
      material: 'کاتن دوردوزی با تور حاشیه', model: 'بدون سیم با تور', usage: 'روزمره', brand: BRAND,
      description: 'حاشیه‌ی توری ظریف روی بدنه‌ی دوردوزی؛ در مشکی کلاسیک و صورتی ملایم.',
      rating: 4.6, reviews: 21, tags: [], inStock: true
    },
    {
      id: 'hb-304', sku: 'HEC-BRA-1304', image: 'images/products/3153454.webp',
      name: 'سوتین ساده مدل رزا', category: 'سوتین زنانه', categorySlug: 'bra',
      price: 590000, comparePrice: 750000,
      colors: ['#C08090'],
      sizes: ['75B', '80B', '85B', '90B'],
      material: 'کاتن پنبه‌ای نرم', model: 'بدون سیم', usage: 'روزمره', brand: BRAND,
      description: 'صورتی رز آرام؛ ساده و بی‌حاشیه برای پوشیدن روزانه بدون فکر کردن بهش.',
      rating: 4.7, reviews: 27, tags: [], inStock: true
    },
    {
      id: 'hb-401', sku: 'HEC-BRALETTE-1401', image: 'images/products/2956831.webp',
      name: 'برالت نخی سه‌رنگ', category: 'نیم‌تنه (برالت)', categorySlug: 'bralette',
      price: 450000, comparePrice: 590000,
      colors: ['#A8C8E8', '#E8A8B8', '#F5F0E8'],
      sizes: ['S', 'M', 'L'],
      material: 'نخی کشی نرم', model: 'برالت تک‌بند', usage: 'راحتی خانگی', brand: BRAND,
      description: 'برالت نخی ساده با بند نازک؛ در سه رنگ آبی، صورتی و کرم برای ست کردن با هر چیزی.',
      rating: 4.6, reviews: 31, tags: ['bestseller'], inStock: true
    },
    {
      id: 'hb-402', sku: 'HEC-BRALETTE-1402', image: 'images/products/3101718.webp',
      name: 'برالت دکمه‌دار کالکشن رنگی', category: 'نیم‌تنه (برالت)', categorySlug: 'bralette',
      price: 490000, comparePrice: 620000,
      colors: ['#A8C8E8', '#1A1A1A', '#F0E8D8'],
      sizes: ['S', 'M', 'L'],
      material: 'نخی کشی با دکمه‌ی جلو', model: 'برالت دکمه‌دار', usage: 'راحتی خانگی', brand: BRAND,
      description: 'مدل دکمه‌دار جلو که پوشیدن و درآوردنش خیلی راحت‌تره؛ در چند رنگ و طرح مختلف.',
      rating: 4.5, reviews: 16, tags: ['new'], inStock: true
    },
    {
      id: 'hb-501', sku: 'HEC-BRIEF-1501', image: 'images/products/2047644.webp',
      name: 'شورت کالکشن طرح‌دار', category: 'شورت زنانه', categorySlug: 'brief',
      price: 290000, comparePrice: 380000,
      colors: ['#E8A0B8', '#C8C8D8'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'کاتن نرم با کش راحت', model: 'شورت کلاسیک کمر متوسط', usage: 'روزمره', brand: BRAND,
      description: 'مجموعه‌ای از طرح‌ها و رنگ‌های مختلف؛ برای کسی که میخواد کشو لباس زیرش رنگی باشه.',
      rating: 4.6, reviews: 44, tags: ['bestseller'], inStock: true
    },
    {
      id: 'hb-502', sku: 'HEC-BRIEF-1502', image: 'images/products/3043995.webp',
      name: 'شورت گلدار رز قرمز', category: 'شورت زنانه', categorySlug: 'brief',
      price: 250000, comparePrice: 320000,
      colors: ['#F0EDE5', '#C02020'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'کاتن نرم با کش راحت', model: 'شورت کلاسیک کمر متوسط', usage: 'روزمره', brand: BRAND,
      description: 'زمینه‌ی سفید با پرینت گل رز قرمز؛ فمینین و راحت برای پوشش روزانه.',
      rating: 4.7, reviews: 25, tags: [], inStock: true
    },
    {
      id: 'hb-601', sku: 'HEC-LOUNGE-1601', image: 'images/products/2037820.webp',
      name: 'ربدوشامبر راه‌راه آبی', category: 'لباس راحتی', categorySlug: 'loungewear',
      price: 890000, comparePrice: 1090000,
      colors: ['#6080B0', '#F0F0F0'],
      sizes: ['Free Size'],
      material: 'پارچه‌ی حوله‌ای نرم', model: 'ربدوشامبر بلند با کمربند', usage: 'راحتی خانگی', brand: BRAND,
      description: 'ربدوشامبر راه‌راه آبی و سفید با کمربند؛ برای صبح‌های آروم و شب‌های سرد.',
      rating: 4.8, reviews: 22, tags: ['new'], inStock: true
    },
    {
      id: 'hb-602', sku: 'HEC-LOUNGE-1602', image: 'images/products/3051139.webp',
      name: 'ست لباس راحتی سفید و آبی', category: 'لباس راحتی', categorySlug: 'loungewear',
      price: 690000, comparePrice: 890000,
      colors: ['#F5F5F0', '#A8C8E0'],
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'کاتن نرم دولایه', model: 'تاپ و شلوارک ست', usage: 'راحتی خانگی', brand: BRAND,
      description: 'تاپ سفید ساده با شلوارک راه‌راه آبی؛ ست راحتی برای خونه که شیک هم هست.',
      rating: 4.7, reviews: 30, tags: [], inStock: true
    },
    {
      id: 'hb-701', sku: 'HEC-FANTASY-1701', image: 'images/products/3133289.webp',
      name: 'لباس فانتزی استرپی مشکی', category: 'فانتزی', categorySlug: 'fantasy',
      price: 990000, comparePrice: 1290000,
      colors: ['#1A1A1A'],
      sizes: ['S', 'M', 'L'],
      material: 'الاستیک با تسمه‌های تنظیم‌شونده', model: 'هارنس استرپی چندتکه', usage: 'مخصوص شب', brand: BRAND,
      description: 'طراحی هارنسی با تسمه‌های متقاطع؛ برای شب‌هایی که دنبال چیزی فراتر از معمولی هستی.',
      rating: 4.5, reviews: 12, tags: ['new'], inStock: true
    }
  ];

  const COLOR_MAP = {
    '#202020': 'مشکی', '#737C54': 'زیتونی', '#9CA286': 'سبز سیج',
    '#E8DFD2': 'بژ', '#C9A992': 'نودی', '#B96777': 'زرشکی روشن',
    '#8E3045': 'زرشکی تیره', '#6D2436': 'زرشکی تیره', '#FFFFFF': 'سفید'
  };
  window.HECUBA = window.HECUBA || {};
  window.HECUBA.COLOR_MAP = COLOR_MAP;

  const CATEGORIES = [
    { name: 'سوتین', slug: 'bra' },
    { name: 'شورت', slug: 'brief' },
    { name: 'ست', slug: 'set' },
    { name: 'نیم‌تنه', slug: 'bralette' },
    { name: 'فانتزی', slug: 'fantasy' },
    { name: 'بادی', slug: 'bodysuit' },
    { name: 'لباس خواب', slug: 'sleepwear' },
    { name: 'مایو', slug: 'swim' },
    { name: 'راحتی', slug: 'loungewear' }
  ];

  /* "New Arrivals" is a teaser — its "see all" link does the rest of the job.
     "Best Sellers" is the highest-converting section on the homepage and gets
     more real estate. This split encodes a real hierarchy between the two. */
  const NEW_ARRIVALS_COUNT = 4;
  const BESTSELLERS_COUNT = 8;

  /* Product Card Quick Add: categories with single-part sizing (S/M/L...) can add
     straight to cart from the card. bra/set/fantasy are deliberately excluded —
     bra sizing is two-part (band + cup) and per brief §21/§26 must go through the
     Size Finder; letting Quick Add skip that raises the return-rate risk. */
  const SIMPLE_SIZING_CATEGORIES = ['brief', 'sleepwear', 'loungewear', 'bodysuit', 'bralette', 'swim'];

  window.HECUBA = window.HECUBA || {};
  window.HECUBA.PRODUCTS = PRODUCTS;
  window.HECUBA.CATEGORIES = CATEGORIES;
  window.HECUBA.NEW_ARRIVALS_COUNT = NEW_ARRIVALS_COUNT;
  window.HECUBA.BESTSELLERS_COUNT = BESTSELLERS_COUNT;
  window.HECUBA.SIMPLE_SIZING_CATEGORIES = SIMPLE_SIZING_CATEGORIES;

  /* Category landing-page copy (→ WooCommerce term name/description) */
  const CATEGORY_INFO = {
    bra: { name: 'سوتین زنانه', desc: 'از بدون‌سیم روزمره تا پوش‌آپ مجلسی — سوتینی که هم فرم می‌ده، هم راحته.' },
    brief: { name: 'شورت زنانه', desc: 'شورت‌های روزمره تا فانتزی، با پارچه‌های نرم و سایزبندی کامل.' },
    set: { name: 'ست لباس زیر', desc: 'ست‌های هماهنگ سوتین و شورت، برای روزهای معمولی و لحظه‌های خاص.' },
    bralette: { name: 'نیم‌تنه', desc: 'سبک، بدون قالب و راحت — برای روزهایی که فقط راحتی می‌خوای.' },
    fantasy: { name: 'لباس زیر فانتزی', desc: 'دانتل و توری ظریف برای لحظه‌های خاص — شیک، نه اغراق‌شده.' },
    bodysuit: { name: 'بادی زنانه', desc: 'فرم‌دهنده و شیک، زیر هر نوع لباسی می‌شینه.' },
    sleepwear: { name: 'لباس خواب', desc: 'از ساتن شب تا پنبه‌ای روزمره — خواب راحت با ظاهر زیبا.' },
    swim: { name: 'مایو و بیکینی', desc: 'مدل‌های کلاسیک و فرم‌دهنده برای استخر و ساحل.' },
    loungewear: { name: 'لباس راحتی', desc: 'ست‌های نخی گرم و نرم برای خانه — راحتی که شیک هم هست.' }
  };
  window.HECUBA.CATEGORY_INFO = CATEGORY_INFO;

  /* ------------------------------------------------------------------------
     02. HELPERS
     ------------------------------------------------------------------------ */
  function formatToman(n) {
    const grouped = Math.round(n).toLocaleString('en-US');
    const persian = grouped.replace(/[0-9]/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; });
    return persian + ' تومان';
  }
  window.HECUBA.formatToman = formatToman;

  function starsSVG(rating) {
    const full = Math.round(rating);
    let out = '';
    for (let i = 0; i < 5; i++) {
      out += i < full
        ? '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.5 7.6l5.9-.8z"/></svg>'
        : '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.5 7.6l5.9-.8z"/></svg>';
    }
    return out;
  }
  window.HECUBA.starsSVG = starsSVG;

  function loadJSON(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return Array.isArray(v) ? v : fallback;
    } catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ }
  }

  /* ------------------------------------------------------------------------
     03. CART + WISHLIST STATE (localStorage-backed, persists across pages)
     ------------------------------------------------------------------------ */
  const DISCOUNT_CODES = {
    'HECUBA10': { type: 'percent', value: 10, label: '۱۰٪ تخفیف' },
    'WELCOME50': { type: 'fixed', value: 50000, label: '۵۰,۰۰۰ تومان تخفیف' }
  };
  const FREE_SHIPPING_THRESHOLD = 1500000;
  const SHIPPING_METHODS = {
    post: { label: 'پست پیشتاز', cost: 45000, eta: '۲ تا ۵ روز کاری' },
    tipax: { label: 'تیپاکس', cost: 40000, eta: '۲ تا ۴ روز کاری' },
    courier: { label: 'پیک تهران', cost: 35000, eta: 'همان روز یا فردا (فقط تهران)' }
  };
  window.HECUBA.DISCOUNT_CODES = DISCOUNT_CODES;
  window.HECUBA.FREE_SHIPPING_THRESHOLD = FREE_SHIPPING_THRESHOLD;
  window.HECUBA.SHIPPING_METHODS = SHIPPING_METHODS;

  const Store = {
    cart: loadJSON('hecuba_cart', []),
    wishlist: loadJSON('hecuba_wishlist', []),
    recentlyViewed: loadJSON('hecuba_recently_viewed', []),
    discountCode: (function () { try { return localStorage.getItem('hecuba_discount') || null; } catch (e) { return null; } })(),

    addToCart(productId, qty, variant) {
      qty = qty || 1;
      const color = variant && variant.color ? variant.color : null;
      const size = variant && variant.size ? variant.size : null;
      const existing = this.cart.find(i => i.id === productId && i.color === color && i.size === size);
      if (existing) { existing.qty += qty; } else { this.cart.push({ id: productId, color: color, size: size, qty: qty }); }
      saveJSON('hecuba_cart', this.cart);
      this.updateBadges();
    },
    cartCount() {
      return this.cart.reduce((sum, i) => sum + i.qty, 0);
    },
    cartLines() {
      const PRODUCTS = window.HECUBA.PRODUCTS;
      return this.cart.map((item, index) => {
        const product = PRODUCTS.find(p => p.id === item.id);
        return product ? { index: index, product: product, color: item.color, size: item.size, qty: item.qty } : null;
      }).filter(Boolean);
    },
    cartSubtotal() {
      return this.cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);
    },
    updateCartQty(index, qty) {
      if (!this.cart[index]) return;
      if (qty < 1) { this.cart.splice(index, 1); }
      else { this.cart[index].qty = qty; }
      saveJSON('hecuba_cart', this.cart);
      this.updateBadges();
    },
    removeFromCart(index) {
      if (!this.cart[index]) return;
      this.cart.splice(index, 1);
      saveJSON('hecuba_cart', this.cart);
      this.updateBadges();
    },
    clearCart() {
      this.cart = [];
      saveJSON('hecuba_cart', this.cart);
      this.removeDiscountCode();
      this.updateBadges();
    },
    applyDiscountCode(code) {
      code = (code || '').trim().toUpperCase();
      if (!code) return { ok: false, message: 'یک کد تخفیف وارد کن.' };
      if (!DISCOUNT_CODES[code]) return { ok: false, message: 'این کد تخفیف معتبر نیست.' };
      this.discountCode = code;
      try { localStorage.setItem('hecuba_discount', code); } catch (e) { /* storage unavailable */ }
      return { ok: true, message: DISCOUNT_CODES[code].label + ' اعمال شد.' };
    },
    removeDiscountCode() {
      this.discountCode = null;
      try { localStorage.removeItem('hecuba_discount'); } catch (e) { /* storage unavailable */ }
    },
    discountAmount(subtotal) {
      if (!this.discountCode || !DISCOUNT_CODES[this.discountCode]) return 0;
      const d = DISCOUNT_CODES[this.discountCode];
      const amount = d.type === 'percent' ? Math.round(subtotal * d.value / 100) : d.value;
      return Math.min(amount, subtotal);
    },
    toggleWishlist(productId) {
      const idx = this.wishlist.indexOf(productId);
      let added;
      if (idx > -1) { this.wishlist.splice(idx, 1); added = false; }
      else { this.wishlist.push(productId); added = true; }
      saveJSON('hecuba_wishlist', this.wishlist);
      this.updateBadges();
      return added;
    },
    addRecentlyViewed(productId) {
      this.recentlyViewed = this.recentlyViewed.filter(id => id !== productId);
      this.recentlyViewed.unshift(productId);
      this.recentlyViewed = this.recentlyViewed.slice(0, 8);
      saveJSON('hecuba_recently_viewed', this.recentlyViewed);
    },
    isWishlisted(productId) {
      return this.wishlist.indexOf(productId) > -1;
    },
    updateBadges() {
      document.querySelectorAll('[data-cart-count]').forEach(el => {
        const n = this.cartCount();
        el.textContent = n;
        el.style.display = n > 0 ? 'flex' : 'none';
      });
      document.querySelectorAll('[data-wishlist-count]').forEach(el => {
        const n = this.wishlist.length;
        el.textContent = n;
        el.style.display = n > 0 ? 'flex' : 'none';
      });
      document.querySelectorAll('.wishlist-btn[data-product-id]').forEach(btn => {
        const active = this.isWishlisted(btn.getAttribute('data-product-id'));
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      if (typeof renderCartDrawer === 'function') renderCartDrawer();
      document.dispatchEvent(new CustomEvent('hecuba:store-updated'));
    }
  };
  window.HECUBA.Store = Store;

  /* ------------------------------------------------------------------------
     04. TOAST
     ------------------------------------------------------------------------ */
  function ensureToastRegion() {
    let region = document.querySelector('.toast-region');
    if (!region) {
      region = document.createElement('div');
      region.className = 'toast-region';
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
    }
    return region;
  }
  function showToast(message) {
    const region = ensureToastRegion();
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    region.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 250);
    }, 2200);
  }
  window.HECUBA.showToast = showToast;

  /* ------------------------------------------------------------------------
     05. PRODUCT CARD TEMPLATE (shared by Home / Shop / Category / Related)
     ------------------------------------------------------------------------ */
  function quickAddPanelHTML(p) {
    if (!p.inStock) return '';
    const isSimpleSizing = SIMPLE_SIZING_CATEGORIES.indexOf(p.categorySlug) > -1;
    if (isSimpleSizing) {
      const sizeBtns = p.sizes.map(function (s) {
        const available = p.colors.some(function (c) { return stockForVariant(p, c, s); });
        const label = 'افزودن سایز ' + s + ' به سبد خرید' + (available ? '' : ' (ناموجود)');
        return '<button type="button" class="size-btn" data-qa-add="' + p.id + '" data-qa-size="' + s + '"' +
          (available ? '' : ' disabled') + ' aria-label="' + label + '">' + s + '</button>';
      }).join('');
      return '<div class="quick-add-panel"><div class="qa-sizes" role="group" aria-label="افزودن سریع - انتخاب سایز">' + sizeBtns + '</div></div>';
    }
    /* bra/set/fantasy: two-part bra sizing (band + cup) needs the Size Finder
       (brief §21/§26) before checkout — Quick Add here would just raise returns. */
    return '<div class="quick-add-panel"><a href="product.html?id=' + p.id + '" class="btn btn-primary btn-sm btn-block">انتخاب سایز</a></div>';
  }

  function productCardHTML(p) {
    const discount = p.comparePrice ? Math.round((1 - p.price / p.comparePrice) * 100) : 0;
    const badges = [];
    if (p.inStock) {
      if (discount > 0) badges.push('<span class="badge badge-sale">%' + discount.toLocaleString('fa-IR') + ' تخفیف</span>');
      else if (p.tags.includes('new')) badges.push('<span class="badge badge-new">جدید</span>');
      else if (p.tags.includes('bestseller')) badges.push('<span class="badge badge-bestseller">پرفروش</span>');
    }

    const swatches = p.colors.slice(0, 4).map((c, i) =>
      '<button type="button" class="swatch" style="background:' + c + '" data-attribute="color" data-value="' + c + '" aria-label="رنگ ' + (window.HECUBA.COLOR_MAP[c] || (i + 1)) + '" title="' + (window.HECUBA.COLOR_MAP[c] || '') + '" aria-pressed="false"></button>'
    ).join('');
    const moreSwatches = p.colors.length > 4 ? '<span class="swatch-more">+' + (p.colors.length - 4) + '</span>' : '';

    return (
      '<article class="product-card" data-product-id="' + p.id + '">' +
        '<div class="media">' +
          '<a href="product.html?id=' + p.id + '" aria-label="' + p.name + '">' +
            '<div class="ph-image ratio-3-4">' + (p.image ? '<img class="ph-photo" decoding="async" src="' + p.image + '" alt="' + p.name + '" loading="lazy">' : '<span>' + p.category + '</span>') + '</div>' +
            (p.image2 ? '<div class="ph-image ratio-3-4 img-secondary"><img class="ph-photo" decoding="async" src="' + p.image2 + '" alt="" loading="lazy"></div>' : '') +
          '</a>' +
          '<div class="card-badges">' + badges.join('') + '</div>' +
          (p.inStock ? '' : '<div class="oos-overlay"><span>ناموجود</span></div>') +
          '<button type="button" class="wishlist-btn" data-product-id="' + p.id + '" aria-pressed="false" aria-label="افزودن به علاقه‌مندی">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 20.5s-7.5-4.6-10-9.3C.4 7.7 2 4 5.6 4c2 0 3.6 1.2 4.4 2.7C10.8 5.2 12.4 4 14.4 4 18 4 19.6 7.7 18 11.2c-2.5 4.7-10 9.3-10 9.3z"/></svg>' +
          '</button>' +
          quickAddPanelHTML(p) +
        '</div>' +
        '<div class="info">' +
          '<span class="cat-label">' + p.category + '</span>' +
          '<h3 class="name">' + p.name + '</h3>' +
          '<div class="price-row">' +
            '<span class="price num">' + formatToman(p.price) + '</span>' +
            (p.comparePrice ? '<span class="price-compare num">' + formatToman(p.comparePrice) + '</span>' : '') +
          '</div>' +
          '<div class="swatches">' + swatches + moreSwatches + '</div>' +
        '</div>' +
      '</article>'
    );
  }
  window.HECUBA.productCardHTML = productCardHTML;

  function renderProductList(selector, products) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = products.map(productCardHTML).join('');
  }
  window.HECUBA.renderProductList = renderProductList;

  /* ------------------------------------------------------------------------
     05b. CART DRAWER (dynamic mini-cart, rendered into every page's header)
     ------------------------------------------------------------------------ */
  function cartLineHTML(line, compact) {
    const variantParts = [];
    if (line.color) variantParts.push('رنگ: ' + (COLOR_MAP[line.color] || line.color));
    if (line.size) variantParts.push('سایز: ' + line.size);
    const variantText = variantParts.join(' | ');
    return (
      '<div class="cart-line" data-cart-index="' + line.index + '">' +
        '<a href="product.html?id=' + line.product.id + '" class="cart-line-thumb"><div class="ph-image ratio-3-4">' + (line.product.image ? '<img class="ph-photo" decoding="async" loading="lazy" src="' + line.product.image + '" alt="">' : '') + '</div></a>' +
        '<div class="cart-line-body">' +
          '<a href="product.html?id=' + line.product.id + '" class="cart-line-name">' + line.product.name + '</a>' +
          (variantText ? '<span class="cart-line-variant">' + variantText + '</span>' : '') +
          '<div class="cart-line-bottom">' +
            '<div class="qty-stepper sm" data-qty-control="' + line.index + '">' +
              '<button type="button" data-qty-plus aria-label="افزایش تعداد">+</button>' +
              '<span class="num">' + line.qty.toLocaleString('fa-IR') + '</span>' +
              '<button type="button" data-qty-minus aria-label="کاهش تعداد">−</button>' +
            '</div>' +
            '<span class="cart-line-price num">' + formatToman(line.product.price * line.qty) + '</span>' +
          '</div>' +
        '</div>' +
        '<button type="button" class="cart-line-remove" data-cart-remove="' + line.index + '" aria-label="حذف از سبد">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m2 0l-1 13a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7"/></svg>' +
        '</button>' +
      '</div>'
    );
  }
  window.HECUBA.cartLineHTML = cartLineHTML;

  function shippingProgressHTML(subtotal) {
    const remain = FREE_SHIPPING_THRESHOLD - subtotal;
    const pct = Math.min(100, Math.round(subtotal / FREE_SHIPPING_THRESHOLD * 100));
    if (remain <= 0) {
      return (
        '<div class="shipping-progress"><div class="shipping-progress-msg done">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>' +
          'سفارش شما شامل ارسال رایگان می‌شود' +
        '</div></div>'
      );
    }
    return (
      '<div class="shipping-progress">' +
        '<div class="shipping-progress-msg"><span class="num">' + formatToman(remain) + '</span>&nbsp;تا ارسال رایگان فاصله داری</div>' +
        '<div class="shipping-progress-track"><div class="shipping-progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>'
    );
  }
  window.HECUBA.shippingProgressHTML = shippingProgressHTML;

  function renderCartDrawer() {
    const bodyEl = document.getElementById('cart-drawer-body');
    const footEl = document.getElementById('cart-drawer-foot');
    if (!bodyEl || !footEl) return;
    const lines = Store.cartLines();
    if (!lines.length) {
      bodyEl.innerHTML =
        '<div class="empty-drawer-state">' +
          '<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--color-border)" stroke-width="1.4"><path d="M6 8V6a4 4 0 118 0v2M3 8h14l-1 12H4L3 8z"/></svg>' +
          '<p class="text-muted">سبد خرید شما خالی است.<br>محصولات مورد علاقه‌ات را اضافه کن.</p>' +
          '<a href="shop.html" class="btn btn-secondary" data-close-drawer>مشاهده فروشگاه</a>' +
        '</div>';
      footEl.innerHTML = '';
      return;
    }
    bodyEl.innerHTML = lines.map(l => cartLineHTML(l, true)).join('');
    const subtotal = Store.cartSubtotal();
    footEl.innerHTML =
      shippingProgressHTML(subtotal) +
      '<div class="cart-summary-row"><span>جمع سبد خرید</span><span class="val num">' + formatToman(subtotal) + '</span></div>' +
      '<a href="cart.html" class="btn btn-outline btn-block" data-close-drawer style="margin-top:10px;">مشاهده سبد خرید</a>' +
      '<a href="checkout.html" class="btn btn-primary btn-block" data-close-drawer style="margin-top:8px;">تسویه‌حساب</a>';
  }
  window.HECUBA.renderCartDrawer = renderCartDrawer;

  document.addEventListener('click', function (e) {
    const removeBtn = e.target.closest('[data-cart-remove]');
    if (removeBtn) {
      Store.removeFromCart(Number(removeBtn.getAttribute('data-cart-remove')));
      showToast('محصول از سبد خرید حذف شد');
      return;
    }
    const qtyCtrl = e.target.closest('[data-qty-control]');
    if (qtyCtrl) {
      const index = Number(qtyCtrl.getAttribute('data-qty-control'));
      const line = Store.cart[index];
      if (!line) return;
      if (e.target.closest('[data-qty-plus]')) Store.updateCartQty(index, line.qty + 1);
      else if (e.target.closest('[data-qty-minus]')) Store.updateCartQty(index, line.qty - 1);
    }
  });

  /* ------------------------------------------------------------------------
     06. GLOBAL EVENT DELEGATION (wishlist + quick add, works on injected cards)
     ------------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    const wishBtn = e.target.closest('.wishlist-btn[data-product-id]');
    if (wishBtn) {
      const added = Store.toggleWishlist(wishBtn.getAttribute('data-product-id'));
      showToast(added ? 'به علاقه‌مندی‌ها اضافه شد' : 'از علاقه‌مندی‌ها حذف شد');
      return;
    }
    const qaBtn = e.target.closest('[data-qa-add]');
    if (qaBtn) {
      e.stopPropagation();
      if (qaBtn.disabled) return;
      Store.addToCart(qaBtn.getAttribute('data-qa-add'), 1, { size: qaBtn.getAttribute('data-qa-size') });
      showToast('به سبد خرید اضافه شد');
      return;
    }
  });

  /* ------------------------------------------------------------------------
     07. DRAWERS (Mobile Menu / Cart / Search) — generic open/close by data attrs
     ------------------------------------------------------------------------ */
  function getFocusableEls(container) {
    return Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (el) { return el.offsetParent !== null; });
  }

  function openDrawer(id) {
    const drawer = document.getElementById(id);
    const overlay = document.querySelector('.overlay[data-for="' + id + '"]') || document.getElementById('global-overlay');
    if (!drawer) return;
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    drawer._lastFocused = document.activeElement;
    const focusable = drawer.querySelector('button, a, input');
    if (focusable) focusable.focus({ preventScroll: true });

    drawer._trapHandler = function (e) {
      if (e.key !== 'Tab') return;
      const els = getFocusableEls(drawer);
      if (!els.length) return;
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    drawer.addEventListener('keydown', drawer._trapHandler);
  }
  function closeDrawer(id) {
    const drawer = document.getElementById(id);
    const overlay = document.querySelector('.overlay[data-for="' + id + '"]') || document.getElementById('global-overlay');
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (drawer._trapHandler) { drawer.removeEventListener('keydown', drawer._trapHandler); drawer._trapHandler = null; }
    if (drawer._lastFocused && typeof drawer._lastFocused.focus === 'function') drawer._lastFocused.focus({ preventScroll: true });
    drawer._lastFocused = null;
  }
  window.HECUBA.openDrawer = openDrawer;
  window.HECUBA.closeDrawer = closeDrawer;

  document.addEventListener('click', function (e) {
    const opener = e.target.closest('[data-open-drawer]');
    if (opener) { openDrawer(opener.getAttribute('data-open-drawer')); return; }
    const closer = e.target.closest('[data-close-drawer]');
    if (closer) {
      const drawer = closer.closest('.drawer, .modal, .filter-panel');
      if (drawer) closeDrawer(drawer.id);
      return;
    }
    if (e.target.classList.contains('overlay')) {
      document.querySelectorAll('.drawer.is-open, .modal.is-open, .filter-panel.is-open').forEach(d => closeDrawer(d.id));
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.drawer.is-open, .modal.is-open, .filter-panel.is-open').forEach(d => closeDrawer(d.id));
    }
  });

  /* ------------------------------------------------------------------------
     08. ACCORDION (FAQ, Product Info Tabs in later phases)
     ------------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;
    const item = trigger.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    if (item.closest('[data-accordion-single]')) {
      item.parentElement.querySelectorAll('.accordion-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });
    }
    item.classList.toggle('open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });

  /* ------------------------------------------------------------------------
     09. HEADER SEARCH OVERLAY — simple live-filter demo against PRODUCTS
     ------------------------------------------------------------------------ */
  function initSearch() {
    const inputs = document.querySelectorAll('[data-search-input]');
    inputs.forEach(input => {
      input.addEventListener('input', function () {
        const q = input.value.trim();
        const resultsEl = document.querySelector(input.getAttribute('data-search-results-target') || '#search-results');
        if (!resultsEl) return;
        if (q.length < 1) { resultsEl.innerHTML = ''; resultsEl.classList.remove('has-results'); return; }
        const matches = PRODUCTS.filter(p => (p.name + ' ' + p.category).indexOf(q) > -1).slice(0, 5);
        resultsEl.classList.add('has-results');
        resultsEl.innerHTML = matches.length
          ? matches.map(p =>
              '<a href="product.html?id=' + p.id + '" class="search-result-row">' +
                '<div class="ph-image ratio-1-1" style="width:44px;height:44px;flex-shrink:0">' + (p.image ? '<img class="ph-photo" decoding="async" loading="lazy" src="' + p.image + '" alt="">' : '') + '</div>' +
                '<span>' + p.name + '</span>' +
                '<span class="text-muted text-sm num" style="margin-inline-start:auto">' + formatToman(p.price) + '</span>' +
              '</a>'
            ).join('')
          : '<p class="text-muted text-sm" style="padding:12px 4px">نتیجه‌ای برای «' + q + '» پیدا نشد.</p>';
      });
    });
  }

  /* ------------------------------------------------------------------------
     10. CATALOG ENGINE — shared Filter + Sort logic for Shop & Category pages
     Real-time, client-side, no page reload. The generated markup mirrors what
     "Filter Everything" (checkbox groups) will produce once wired to real
     WooCommerce product attributes.
     ------------------------------------------------------------------------ */
  const SIZE_LIST = ['S', 'M', 'L', 'XL', '2XL', 'Free Size', '70B', '75B', '80B', '85B', '90B'];

  function uniqueBy(arr, keyFn) {
    const seen = new Map();
    arr.forEach(item => {
      const k = keyFn(item);
      seen.set(k, (seen.get(k) || 0) + 1);
    });
    return seen;
  }

  function initCatalogPage(config) {
    const grid = document.querySelector(config.gridSel);
    if (!grid) return;
    const form = document.querySelector(config.formSel);
    const countEl = document.querySelector(config.countSel);
    const sortEl = document.querySelector(config.sortSel);
    const chipsEl = document.querySelector(config.chipsSel);
    const emptyEl = config.emptySel ? document.querySelector(config.emptySel) : null;
    const scope = config.lockCategory
      ? PRODUCTS.filter(p => p.categorySlug === config.lockCategory)
      : PRODUCTS;

    const params = new URLSearchParams(location.search);
    const state = {
      categories: new Set(config.lockCategory ? [config.lockCategory] : (params.get('cat') ? [params.get('cat')] : [])),
      sizes: new Set(),
      colors: new Set(),
      materials: new Set(),
      models: new Set(),
      usages: new Set(),
      onlyDiscount: params.get('filter') === 'sale',
      onlyInStock: false,
      maxPrice: 2000000,
      tag: params.get('filter') === 'new' ? 'new' : (params.get('filter') === 'bestseller' ? 'bestseller' : null)
    };

    /* ---- Build filter group markup from live catalog data ---- */
    function buildCheckboxGroup(containerSel, items, groupName, checkedSet) {
      const el = document.querySelector(containerSel);
      if (!el) return;
      el.innerHTML = items.map(function (it) {
        const checked = checkedSet.has(it.value) ? ' checked' : '';
        return (
          '<label class="filter-check">' +
            '<input type="checkbox" name="' + groupName + '" value="' + it.value + '"' + checked + '>' +
            '<span>' + it.label + '</span>' +
            '<span class="filter-check-count">' + it.count.toLocaleString('fa-IR') + '</span>' +
          '</label>'
        );
      }).join('');
    }

    function buildColorGroup(containerSel, items, checkedSet) {
      const el = document.querySelector(containerSel);
      if (!el) return;
      el.innerHTML = items.map(function (it) {
        const active = checkedSet.has(it.value) ? ' aria-pressed="true"' : ' aria-pressed="false"';
        return (
          '<button type="button" class="filter-swatch" data-color-filter="' + it.value + '" style="background:' + it.value + '" title="' + it.label + ' (' + it.count.toLocaleString('fa-IR') + ')"' + active + '></button>'
        );
      }).join('');
    }

    if (!config.lockCategory) {
      const catCounts = uniqueBy(scope, p => p.categorySlug);
      const catItems = CATEGORIES.filter(c => catCounts.has(c.slug)).map(c => ({ value: c.slug, label: c.name, count: catCounts.get(c.slug) }));
      buildCheckboxGroup(config.groups.category, catItems, 'category', state.categories);
    } else {
      const catGroupEl = document.querySelector(config.groups.category);
      const catGroupWrap = catGroupEl && catGroupEl.closest('.filter-group');
      if (catGroupWrap) catGroupWrap.style.display = 'none';
    }

    const sizeCounts = uniqueBy(scope.flatMap(p => p.sizes), s => s);
    const sizeItems = SIZE_LIST.filter(s => sizeCounts.has(s)).map(s => ({ value: s, label: s, count: sizeCounts.get(s) }));
    buildCheckboxGroup(config.groups.size, sizeItems, 'size', state.sizes);

    const colorCounts = uniqueBy(scope.flatMap(p => p.colors), c => c);
    const colorItems = Array.from(colorCounts.keys()).map(hex => ({ value: hex, label: COLOR_MAP[hex] || hex, count: colorCounts.get(hex) }));
    buildColorGroup(config.groups.color, colorItems, state.colors);

    const materialCounts = uniqueBy(scope, p => p.material);
    buildCheckboxGroup(config.groups.material, Array.from(materialCounts.keys()).map(m => ({ value: m, label: m, count: materialCounts.get(m) })), 'material', state.materials);

    const modelCounts = uniqueBy(scope, p => p.model);
    buildCheckboxGroup(config.groups.model, Array.from(modelCounts.keys()).map(m => ({ value: m, label: m, count: modelCounts.get(m) })), 'model', state.models);

    const usageCounts = uniqueBy(scope, p => p.usage);
    buildCheckboxGroup(config.groups.usage, Array.from(usageCounts.keys()).map(u => ({ value: u, label: u, count: usageCounts.get(u) })), 'usage', state.usages);

    if (config.groups.brand) {
      const brandEl = document.querySelector(config.groups.brand);
      const brandCounts = uniqueBy(scope, p => p.brand);
      if (brandEl) {
        brandEl.innerHTML = Array.from(brandCounts.keys()).map(function (b) {
          return (
            '<label class="filter-check" style="opacity:.7;">' +
              '<input type="checkbox" checked disabled>' +
              '<span>' + b + '</span>' +
              '<span class="filter-check-count">' + brandCounts.get(b).toLocaleString('fa-IR') + '</span>' +
            '</label>'
          );
        }).join('');
      }
    }

    /* ---- Filtering + sorting ---- */
    function applyFilters() {
      let list = scope.filter(function (p) {
        if (state.categories.size && !state.categories.has(p.categorySlug)) return false;
        if (state.sizes.size && !p.sizes.some(s => state.sizes.has(s))) return false;
        if (state.colors.size && !p.colors.some(c => state.colors.has(c))) return false;
        if (state.materials.size && !state.materials.has(p.material)) return false;
        if (state.models.size && !state.models.has(p.model)) return false;
        if (state.usages.size && !state.usages.has(p.usage)) return false;
        if (state.onlyDiscount && !p.comparePrice) return false;
        if (state.onlyInStock && !p.inStock) return false;
        if (state.tag && !p.tags.includes(state.tag)) return false;
        if (p.price > state.maxPrice) return false;
        return true;
      });

      const sortVal = sortEl ? sortEl.value : 'default';
      if (sortVal === 'price-asc') list = list.slice().sort((a, b) => a.price - b.price);
      else if (sortVal === 'price-desc') list = list.slice().sort((a, b) => b.price - a.price);
      else if (sortVal === 'bestseller') list = list.slice().sort((a, b) => (b.tags.includes('bestseller') ? 1 : 0) - (a.tags.includes('bestseller') ? 1 : 0));
      else if (sortVal === 'discount') list = list.slice().sort((a, b) => {
        const da = a.comparePrice ? 1 - a.price / a.comparePrice : 0;
        const db = b.comparePrice ? 1 - b.price / b.comparePrice : 0;
        return db - da;
      });
      else if (sortVal === 'new') list = list.slice().sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));

      grid.innerHTML = list.map(productCardHTML).join('');
      if (countEl) countEl.textContent = list.length.toLocaleString('fa-IR');
      if (emptyEl) emptyEl.style.display = list.length ? 'none' : 'block';
      renderChips();
    }

    function renderChips() {
      if (!chipsEl) return;
      const chips = [];
      state.categories.forEach(v => { if (!config.lockCategory) chips.push({ group: 'categories', val: v, label: (CATEGORIES.find(c => c.slug === v) || {}).name || v }); });
      state.sizes.forEach(v => chips.push({ group: 'sizes', val: v, label: 'سایز ' + v }));
      state.colors.forEach(v => chips.push({ group: 'colors', val: v, label: COLOR_MAP[v] || v }));
      state.materials.forEach(v => chips.push({ group: 'materials', val: v, label: v }));
      state.models.forEach(v => chips.push({ group: 'models', val: v, label: v }));
      state.usages.forEach(v => chips.push({ group: 'usages', val: v, label: v }));
      if (state.onlyDiscount) chips.push({ group: 'onlyDiscount', val: '1', label: 'دارای تخفیف' });
      if (state.onlyInStock) chips.push({ group: 'onlyInStock', val: '1', label: 'فقط موجود' });

      chipsEl.style.display = chips.length ? 'flex' : 'none';
      chipsEl.innerHTML = chips.map(c =>
        '<button type="button" class="filter-chip" data-chip-group="' + c.group + '" data-chip-val="' + c.val + '">' + c.label +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>'
      ).join('') + (chips.length ? '<button type="button" class="filter-chip filter-chip-clear" data-chip-clear>پاک کردن همه</button>' : '');
    }

    function removeChip(group, val) {
      if (group === 'onlyDiscount') { state.onlyDiscount = false; syncCheckbox('onlyDiscount', false); }
      else if (group === 'onlyInStock') { state.onlyInStock = false; syncCheckbox('onlyInStock', false); }
      else if (state[group]) {
        state[group].delete(val);
        const input = form && form.querySelector('input[value="' + CSS.escape(val) + '"]');
        if (input) input.checked = false;
        const swatch = form && form.querySelector('[data-color-filter="' + CSS.escape(val) + '"]');
        if (swatch) swatch.setAttribute('aria-pressed', 'false');
      }
      applyFilters();
    }
    function syncCheckbox(name, val) {
      if (!form) return;
      const input = form.querySelector('[data-toggle="' + name + '"]');
      if (input) input.checked = val;
    }

    if (form) {
      form.addEventListener('change', function (e) {
        const t = e.target;
        if (t.name === 'category') { t.checked ? state.categories.add(t.value) : state.categories.delete(t.value); }
        else if (t.name === 'size') { t.checked ? state.sizes.add(t.value) : state.sizes.delete(t.value); }
        else if (t.name === 'material') { t.checked ? state.materials.add(t.value) : state.materials.delete(t.value); }
        else if (t.name === 'model') { t.checked ? state.models.add(t.value) : state.models.delete(t.value); }
        else if (t.name === 'usage') { t.checked ? state.usages.add(t.value) : state.usages.delete(t.value); }
        else if (t.getAttribute('data-toggle') === 'onlyDiscount') { state.onlyDiscount = t.checked; }
        else if (t.getAttribute('data-toggle') === 'onlyInStock') { state.onlyInStock = t.checked; }
        applyFilters();
      });
      form.addEventListener('click', function (e) {
        const swatch = e.target.closest('[data-color-filter]');
        if (swatch) {
          const hex = swatch.getAttribute('data-color-filter');
          const active = swatch.getAttribute('aria-pressed') === 'true';
          swatch.setAttribute('aria-pressed', String(!active));
          active ? state.colors.delete(hex) : state.colors.add(hex);
          applyFilters();
        }
      });
      const priceRange = form.querySelector('[data-price-range]');
      const priceOut = form.querySelector('[data-price-output]');
      if (priceRange) {
        priceRange.addEventListener('input', function () {
          state.maxPrice = Number(priceRange.value);
          if (priceOut) priceOut.textContent = window.HECUBA.formatToman(state.maxPrice);
          applyFilters();
        });
      }
      const resetBtn = form.querySelector('[data-reset-filters]');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          form.querySelectorAll('input[type="checkbox"]').forEach(cb => { if (!config.lockCategory || cb.name !== 'category') cb.checked = false; });
          form.querySelectorAll('[data-color-filter]').forEach(sw => sw.setAttribute('aria-pressed', 'false'));
          if (priceRange) { priceRange.value = priceRange.max; state.maxPrice = Number(priceRange.max); if (priceOut) priceOut.textContent = window.HECUBA.formatToman(state.maxPrice); }
          state.sizes.clear(); state.colors.clear(); state.materials.clear(); state.models.clear(); state.usages.clear();
          if (!config.lockCategory) state.categories.clear();
          state.onlyDiscount = false; state.onlyInStock = false; state.tag = null;
          applyFilters();
        });
      }
    }
    if (chipsEl) {
      chipsEl.addEventListener('click', function (e) {
        if (e.target.closest('[data-chip-clear]')) { if (form) form.querySelector('[data-reset-filters]').click(); return; }
        const chip = e.target.closest('.filter-chip');
        if (chip) removeChip(chip.getAttribute('data-chip-group'), chip.getAttribute('data-chip-val'));
      });
    }
    if (sortEl) sortEl.addEventListener('change', applyFilters);

    if (state.onlyDiscount) syncCheckbox('onlyDiscount', true);
    applyFilters();
  }
  window.HECUBA.initCatalogPage = initCatalogPage;

  /* ------------------------------------------------------------------------
     10c. PRODUCT PAGE ENGINE
     ------------------------------------------------------------------------ */
  const REVIEW_POOL = [
    { name: 'مریم.ک', text: 'کیفیت پارچه واقعاً خوبه، دقیقاً مثل عکس بود و سایزش هم درست اومد.' },
    { name: 'نگار ر.', text: 'راحتیش فوق‌العاده‌ست، برای استفاده روزمره عالیه. حتماً باز سفارش می‌دم.' },
    { name: 'سارا م.', text: 'بسته‌بندی خیلی شیک بود و ارسال هم سریع‌تر از چیزی بود که فکر می‌کردم.' },
    { name: 'الهام ت.', text: 'رنگش حتی از عکس هم قشنگ‌تره. فقط کاش سایزبندیش یکم دقیق‌تر توضیح داده می‌شد.' },
    { name: 'پریسا ا.', text: 'برای هدیه گرفتم، خودم هم عاشقش شدم و یکی برای خودم سفارش دادم.' },
    { name: 'یگانه س.', text: 'جنسش نرمه و اصلاً پوستم رو اذیت نکرد. راضی‌ام از خریدم.' },
    { name: 'رها ن.', text: 'دقیقاً همونی بود که دنبالش بودم؛ هم راحت، هم شیک.' },
    { name: 'شیدا ح.', text: 'قیمتش نسبت به کیفیتش خیلی خوبه. پیشنهادش می‌کنم.' }
  ];

  function hashStr(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = ((h << 5) - h + str.charCodeAt(i)) | 0; }
    return Math.abs(h);
  }

  /* Deterministic per-variant stock: ~90% in-stock, but the first size listed
     for a given color is always guaranteed available so a product with
     inStock:true is never accidentally shown as fully sold out. */
  function stockForVariant(product, color, size) {
    if (!product.inStock) return false;
    if (!color || !size) return null; // unknown until both are selected
    if (product.sizes[0] === size) return true;
    return hashStr(product.id + color + size) % 10 !== 0;
  }
  window.HECUBA.stockForVariant = stockForVariant;

  function pickReviews(productId, count) {
    const start = hashStr(productId) % REVIEW_POOL.length;
    const out = [];
    for (let i = 0; i < count; i++) out.push(REVIEW_POOL[(start + i) % REVIEW_POOL.length]);
    return out;
  }

  function nearestOf(value, options) {
    return options.reduce((best, o) => Math.abs(o - value) < Math.abs(best - value) ? o : best, options[0]);
  }

  function buildWhyList(p) {
    return [
      'جنس ' + p.material,
      'مدل ' + p.model + '، مناسب برای ' + p.usage,
      'دوخت تمیز و راحت روی پوست',
      'ارسال سریع و امکان تعویض سایز'
    ];
  }

  function initProductPage() {
    const grid = document.querySelector('#pd-root');
    if (!grid) return;
    const PRODUCTS = window.HECUBA.PRODUCTS;
    const COLOR_MAP = window.HECUBA.COLOR_MAP;
    const params = new URLSearchParams(location.search);
    const product = PRODUCTS.find(p => p.id === params.get('id')) || PRODUCTS[0];

    const state = { colorIndex: 0, size: null, qty: 1, mainIndex: 0 };

    /* ---- Head / meta ---- */
    document.title = product.name + ' | هکوبا استایل';
    const metaDesc = document.getElementById('page-description');
    if (metaDesc) metaDesc.setAttribute('content', product.description);
    const crumbCat = document.getElementById('crumb-cat');
    if (crumbCat) { crumbCat.textContent = product.category; crumbCat.href = 'category.html?cat=' + product.categorySlug; }
    const crumbName = document.getElementById('crumb-name');
    if (crumbName) crumbName.textContent = product.name;

    /* ---- Gallery ---- */
    const galleryLabels = ['تصویر اصلی', 'نمای دوم', 'جزئیات پارچه', 'روی مدل'];
    const thumbsEl = document.getElementById('gallery-thumbs');
    const mainEl = document.getElementById('gallery-main-image');

    function renderMain() {
      const isVideo = product.hasVideo && state.mainIndex === galleryLabels.length;
      mainEl.className = 'ph-image ratio-3-4' + (!product.image && state.mainIndex % 2 === 1 ? ' tone-dark' : '');
      if (product.image && !isVideo) {
        mainEl.innerHTML = '<img class="ph-photo" decoding="async" fetchpriority="high" src="' + product.image + '" alt="' + product.name + ' — ' + galleryLabels[state.mainIndex] + '">';
      } else {
        mainEl.innerHTML = '<span>' + (isVideo ? 'پیش‌نمایش ویدئو محصول' : galleryLabels[state.mainIndex] + ' — ' + (COLOR_MAP[product.colors[state.colorIndex]] || '')) + '</span>';
      }
    }
    function renderThumbs() {
      let html = galleryLabels.map((label, i) =>
        '<button type="button" class="thumb' + (i === state.mainIndex ? ' active' : '') + '" data-thumb="' + i + '" aria-label="' + label + '"><div class="ph-image' + (!product.image && i % 2 === 1 ? ' tone-dark' : '') + '">' + (product.image ? '<img class="ph-photo" decoding="async" loading="lazy" src="' + product.image + '" alt="">' : '') + '</div></button>'
      ).join('');
      if (product.hasVideo) {
        const vi = galleryLabels.length;
        html += '<button type="button" class="thumb video-thumb' + (vi === state.mainIndex ? ' active' : '') + '" data-thumb="' + vi + '" aria-label="ویدئو محصول"><div class="ph-image tone-dark"></div><svg class="play-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l12 7-12 7z"/></svg></button>';
      }
      thumbsEl.innerHTML = html;
    }
    thumbsEl.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-thumb]');
      if (!btn) return;
      state.mainIndex = Number(btn.getAttribute('data-thumb'));
      renderMain(); renderThumbs();
    });
    document.getElementById('gallery-main').addEventListener('click', function () {
      document.getElementById('zoom-main-image').className = mainEl.className;
      document.getElementById('zoom-main-image').innerHTML = mainEl.innerHTML;
      openDrawer('zoom-modal');
    });
    renderMain(); renderThumbs();

    /* ---- Info: category / title / rating / price / description ---- */
    document.getElementById('pd-category').textContent = product.category;
    document.getElementById('pd-category').href = 'category.html?cat=' + product.categorySlug;
    document.getElementById('pd-title').textContent = product.name;
    document.getElementById('pd-stars').innerHTML = starsSVG(product.rating);
    document.getElementById('pd-rating-num').textContent = product.rating.toLocaleString('fa-IR');
    document.getElementById('pd-review-count').textContent = 'مشاهده ' + product.reviews.toLocaleString('fa-IR') + ' دیدگاه';
    document.getElementById('pd-desc').textContent = product.description;

    const discount = product.comparePrice ? Math.round((1 - product.price / product.comparePrice) * 100) : 0;
    document.getElementById('pd-price').textContent = formatToman(product.price);
    if (product.comparePrice) {
      document.getElementById('pd-price-compare').textContent = formatToman(product.comparePrice);
      document.getElementById('pd-price-compare').style.display = '';
      document.getElementById('pd-discount-badge').textContent = '%' + discount.toLocaleString('fa-IR') + ' تخفیف';
      document.getElementById('pd-discount-badge').style.display = '';
    }

    /* ---- Colors ---- */
    const colorEl = document.getElementById('pd-colors');
    function renderColors() {
      colorEl.innerHTML = product.colors.map((c, i) =>
        '<button type="button" style="background:' + c + '" data-attribute="color" data-value="' + c + '" aria-pressed="' + (i === state.colorIndex ? 'true' : 'false') + '" aria-label="رنگ ' + (COLOR_MAP[c] || i + 1) + '" title="' + (COLOR_MAP[c] || '') + '"></button>'
      ).join('');
    }
    colorEl.addEventListener('click', function (e) {
      const btn = e.target.closest('button');
      if (!btn) return;
      state.colorIndex = Array.from(colorEl.children).indexOf(btn);
      renderColors(); renderMain();
      updateStockMessage(); renderSizes();
    });

    /* ---- Sizes ---- */
    const sizeEl = document.getElementById('pd-sizes');
    function renderSizes() {
      const color = product.colors[state.colorIndex];
      sizeEl.innerHTML = product.sizes.map(s => {
        const inStock = stockForVariant(product, color, s);
        const pressed = state.size === s ? 'true' : 'false';
        return '<button type="button" class="size-btn" data-size="' + s + '" aria-pressed="' + pressed + '"' + (inStock ? '' : ' disabled title="این ترکیب رنگ و سایز موجود نیست"') + '>' + s + '</button>';
      }).join('');
    }
    sizeEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.size-btn');
      if (!btn || btn.disabled) return;
      state.size = btn.getAttribute('data-size');
      renderSizes();
      updateStockMessage();
    });

    /* ---- Stock message ---- */
    const stockMsgEl = document.getElementById('pd-stock-msg');
    const addBtn = document.getElementById('pd-add-btn');
    const buyBtn = document.getElementById('pd-buy-btn');
    const buyBar = document.getElementById('buy-bar');
    const barAddBtn = document.getElementById('buy-bar-add');
    function updateStockMessage() {
      const color = product.colors[state.colorIndex];
      const status = stockForVariant(product, color, state.size);
      let html, cls, disable;
      if (status === null) {
        html = 'سایز خود را انتخاب کنید'; cls = 'no-selection'; disable = true;
      } else if (status === true) {
        html = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> موجود در انبار'; cls = 'in-stock'; disable = false;
      } else {
        html = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg> این محصول یا ترکیب رنگ/سایز انتخابی ناموجود است'; cls = 'out-stock'; disable = true;
      }
      stockMsgEl.className = 'stock-msg ' + cls;
      stockMsgEl.innerHTML = html;
      addBtn.disabled = disable; buyBtn.disabled = disable;
      addBtn.style.opacity = disable ? 0.55 : 1;
      buyBtn.style.opacity = disable ? 0.55 : 1;
      if (barAddBtn) { barAddBtn.disabled = disable; barAddBtn.style.opacity = disable ? 0.55 : 1; }
    }

    /* ---- Quantity ---- */
    const qtyOut = document.getElementById('pd-qty');
    document.getElementById('pd-qty-minus').addEventListener('click', function () { if (state.qty > 1) { state.qty--; qtyOut.textContent = state.qty.toLocaleString('fa-IR'); } });
    document.getElementById('pd-qty-plus').addEventListener('click', function () { if (state.qty < 5) { state.qty++; qtyOut.textContent = state.qty.toLocaleString('fa-IR'); } });

    /* ---- SKU ---- */
    document.getElementById('pd-sku').textContent = 'کد محصول: ' + product.sku;

    /* ---- CTAs ---- */
    addBtn.addEventListener('click', function () {
      Store.addToCart(product.id, state.qty, { color: product.colors[state.colorIndex], size: state.size });
      showToast('به سبد خرید اضافه شد');
    });

    /* ---- Sticky buy bar (mobile) ----
       The product page runs ~5800px tall at 375px, so #pd-add-btn leaves the
       viewport after about one screen. This mirrors it: same handler, same
       disabled state, revealed only once the real button has scrolled fully
       out of view above the fold.
       A plain rAF-throttled scroll listener is used instead of
       IntersectionObserver: this is a single fixed target, not a list, so the
       perf case for IO doesn't apply, and a direct getBoundingClientRect check
       has no dependency on how a given browser schedules IO callbacks (some
       in-app webviews -- Instagram/Telegram, relevant for this store's social
       referral traffic -- are known to throttle IO more aggressively than
       plain scroll events). CSS carries !important on the visible transform
       per the specificity trap documented in CLAUDE.md. */
    if (buyBar && barAddBtn) {
      const barPrice = document.getElementById('buy-bar-price');
      const barCompare = document.getElementById('buy-bar-compare');
      if (barPrice) barPrice.textContent = formatToman(product.price);
      if (barCompare) {
        if (product.comparePrice) barCompare.textContent = formatToman(product.comparePrice);
        else barCompare.style.display = 'none';
      }
      barAddBtn.addEventListener('click', function () { addBtn.click(); });
      let ticking = false;
      function syncBuyBar() {
        ticking = false;
        const showing = addBtn.getBoundingClientRect().bottom < 0;
        buyBar.classList.toggle('is-visible', showing);
        buyBar.setAttribute('aria-hidden', showing ? 'false' : 'true');
      }
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(syncBuyBar); }
      }, { passive: true });
      window.addEventListener('resize', syncBuyBar);
      // Safety net: an instant/programmatic jump (e.g. a future "jump to reviews"
      // link) fires far fewer 'scroll' events than a real touch gesture and can
      // leave the bar stale. Verified live against this exact page: a real touch
      // gesture (simulated as many small incremental scrolls) fires 'scroll'
      // reliably in both directions and needs nothing extra. 'scrollend' was tried
      // as a second safety net but did not fire at all in live testing for either
      // instant or smooth scrollTo, so it is not depended on. 'touchend' is used
      // instead: every real touch-scroll gesture on the mobile devices this bar
      // targets ends with one, independent of scroll/scrollend event nuances.
      window.addEventListener('touchend', syncBuyBar, { passive: true });
      syncBuyBar();
    }
    buyBtn.addEventListener('click', function () {
      Store.addToCart(product.id, state.qty, { color: product.colors[state.colorIndex], size: state.size });
      showToast('به سبد خرید اضافه شد');
      openDrawer('cart-drawer');
    });
    const stickyAdd = document.getElementById('sticky-add-btn');
    if (stickyAdd) {
      stickyAdd.addEventListener('click', function () { addBtn.click(); });
      document.getElementById('sticky-price').textContent = formatToman(product.price);
    }

    /* ---- Wishlist (large button) ---- */
    const wishBtn = document.getElementById('pd-wishlist-btn');
    function syncWish() { wishBtn.classList.toggle('active', Store.isWishlisted(product.id)); wishBtn.setAttribute('aria-pressed', Store.isWishlisted(product.id) ? 'true' : 'false'); }
    wishBtn.addEventListener('click', function () {
      const added = Store.toggleWishlist(product.id);
      showToast(added ? 'به علاقه‌مندی‌ها اضافه شد' : 'از علاقه‌مندی‌ها حذف شد');
      syncWish();
    });

    /* ---- Why this product ---- */
    document.getElementById('pd-why-list').innerHTML = buildWhyList(product).map(t =>
      '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>' + t + '</span></li>'
    ).join('');

    /* ---- Info accordion: description / material / size table (static) / care / exchange / shipping ---- */
    document.getElementById('acc-description').textContent = product.description + ' این محصول با دقت و توجه به کیفیت پارچه و دوخت تولید شده تا در استفاده روزمره همراه مطمئنی برایت باشد.';
    document.getElementById('acc-material').textContent = 'جنس: ' + product.material + ' — مدل: ' + product.model + ' — کاربرد پیشنهادی: ' + product.usage + '.';

    /* ---- Reviews ---- */
    document.getElementById('rs-num').textContent = product.rating.toLocaleString('fa-IR');
    document.getElementById('rs-stars').innerHTML = starsSVG(product.rating);
    document.getElementById('rs-count').textContent = product.reviews.toLocaleString('fa-IR') + ' دیدگاه';
    const reviews = pickReviews(product.id, 4);
    document.getElementById('review-grid').innerHTML = reviews.map((r, i) =>
      '<div class="review-card">' +
        '<div class="review-card-head"><span class="review-name">' + r.name + '</span><span class="review-date">' + (i + 1) + ' هفته پیش</span></div>' +
        '<div class="stars">' + starsSVG(4.5 + (i % 2 === 0 ? 0.5 : 0)) + '</div>' +
        '<p class="review-text">' + r.text + '</p>' +
        '<span class="review-verified"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg> خرید تایید‌شده</span>' +
      '</div>'
    ).join('');

    /* ---- Related products ---- */
    const related = PRODUCTS.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
    if (related.length) {
      renderProductList('#related-grid', related);
    } else {
      const sec = document.getElementById('related-section');
      if (sec) sec.style.display = 'none';
    }

    /* ---- Recently viewed ---- */
    Store.addRecentlyViewed(product.id);
    const recent = Store.recentlyViewed.filter(id => id !== product.id).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 4);
    const recentSection = document.getElementById('recently-viewed-section');
    if (recent.length) { renderProductList('#recently-viewed-grid', recent); } else if (recentSection) { recentSection.style.display = 'none'; }

    /* ---- Size guide modal (static content, no wiring needed beyond drawer open) ---- */

    /* ---- Size finder (only relevant for bra sizing) ---- */
    const finderBtn = document.getElementById('open-size-finder');
    if (product.categorySlug !== 'bra') {
      if (finderBtn) finderBtn.style.display = 'none';
    } else if (finderBtn) {
      let bandVal = 75, bustVal = 85;
      const bandRange = document.getElementById('finder-band-range');
      const bustRange = document.getElementById('finder-bust-range');
      const bandOut = document.getElementById('finder-band-out');
      const bustOut = document.getElementById('finder-bust-out');
      bandRange.addEventListener('input', function () { bandVal = Number(bandRange.value); bandOut.textContent = bandVal.toLocaleString('fa-IR') + ' سانتی‌متر'; });
      bustRange.addEventListener('input', function () { bustVal = Number(bustRange.value); bustOut.textContent = bustVal.toLocaleString('fa-IR') + ' سانتی‌متر'; });
      bandOut.textContent = bandVal.toLocaleString('fa-IR') + ' سانتی‌متر';
      bustOut.textContent = bustVal.toLocaleString('fa-IR') + ' سانتی‌متر';

      const steps = document.querySelectorAll('#size-finder-modal .finder-step');
      function goStep(n) {
        steps.forEach(s => s.classList.toggle('active', Number(s.getAttribute('data-step')) === n));
      }
      document.getElementById('finder-next-1').addEventListener('click', function () { goStep(2); });
      document.getElementById('finder-back-2').addEventListener('click', function () { goStep(1); });
      document.getElementById('finder-next-2').addEventListener('click', function () {
        const bandOptions = [70, 75, 80, 85, 90];
        const suggested = nearestOf(bandVal, bandOptions) + 'B';
        document.getElementById('finder-result-size').textContent = suggested;
        goStep(3);
      });
      document.getElementById('finder-restart').addEventListener('click', function () { goStep(1); });
      document.getElementById('finder-select-size').addEventListener('click', function () {
        const suggested = document.getElementById('finder-result-size').textContent;
        if (product.sizes.includes(suggested)) {
          state.size = suggested;
          renderSizes();
          updateStockMessage();
          showToast('سایز ' + suggested + ' انتخاب شد');
        }
        closeDrawer('size-finder-modal');
        goStep(1);
      });
    }

    renderColors(); renderSizes(); updateStockMessage(); syncWish();
  }
  window.HECUBA.initProductPage = initProductPage;

  /* ------------------------------------------------------------------------
     10d. CART PAGE ENGINE
     ------------------------------------------------------------------------ */
  function initCartPage() {
    const root = document.getElementById('cart-page-root');
    if (!root) return;
    const linesEl = document.getElementById('cart-page-lines');
    const emptyEl = document.getElementById('cart-empty-state');
    const layoutEl = document.getElementById('cart-layout');
    const summaryEl = document.getElementById('cart-summary');
    const stickyBar = document.getElementById('cart-sticky-bar');

    let lastDiscountMsg = '';

    function render() {
      const lines = Store.cartLines();
      if (!lines.length) {
        layoutEl.style.display = 'none';
        emptyEl.style.display = 'flex';
        if (stickyBar) stickyBar.style.display = 'none';
        return;
      }
      layoutEl.style.display = '';
      emptyEl.style.display = 'none';

      linesEl.innerHTML = lines.map(l => cartLineHTML(l)).join('');

      const subtotal = Store.cartSubtotal();
      const discount = Store.discountAmount(subtotal);
      const freeShip = subtotal >= FREE_SHIPPING_THRESHOLD;
      const total = subtotal - discount;

      let html = shippingProgressHTML(subtotal);
      html += '<div class="discount-row">' +
        '<input type="text" class="input" id="discount-input" placeholder="کد تخفیف" value="' + (Store.discountCode || '') + '">' +
        '<button type="button" class="btn btn-outline" id="discount-apply-btn">اعمال</button>' +
      '</div>';
      html += '<div id="discount-msg-area">' + lastDiscountMsg + '</div>';
      html += '<div class="cart-summary-row"><span>جمع سبد خرید</span><span class="val num">' + formatToman(subtotal) + '</span></div>';
      if (discount > 0) html += '<div class="cart-summary-row discount"><span>تخفیف</span><span class="val num">−' + formatToman(discount) + '</span></div>';
      html += '<div class="cart-summary-row"><span>هزینه ارسال</span><span class="val">' + (freeShip ? 'رایگان' : 'محاسبه در تسویه‌حساب') + '</span></div>';
      html += '<div class="cart-summary-row total"><span>جمع کل</span><span class="val num">' + formatToman(total) + '</span></div>';
      html += '<a href="checkout.html" class="btn btn-primary btn-block" style="margin-top:var(--space-4);">ادامه به تسویه‌حساب</a>';
      html += '<div class="trust-badge-inline" style="margin-top:var(--space-4); justify-content:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-4.5 7-11V5l-7-2-7 2v5c0 6.5 7 11 7 11z"/></svg>پرداخت امن و ضمانت تعویض سایز</div>';
      summaryEl.innerHTML = html;

      if (stickyBar) {
        stickyBar.style.display = '';
        document.getElementById('cart-sticky-total').textContent = formatToman(total);
      }

      document.getElementById('discount-apply-btn').addEventListener('click', function () {
        const val = document.getElementById('discount-input').value;
        const result = Store.applyDiscountCode(val);
        lastDiscountMsg = '<div class="discount-msg ' + (result.ok ? 'ok' : 'err') + '">' + result.message + '</div>';
        render();
      });
    }

    document.addEventListener('hecuba:store-updated', render);
    render();
  }
  window.HECUBA.initCartPage = initCartPage;

  /* ------------------------------------------------------------------------
     10e. CHECKOUT PAGE ENGINE
     ------------------------------------------------------------------------ */
  function initCheckoutPage() {
    const root = document.getElementById('checkout-root');
    if (!root) return;
    const emptyEl = document.getElementById('checkout-empty-state');
    const layoutEl = document.getElementById('checkout-layout');

    const lines = Store.cartLines();
    if (!lines.length) {
      layoutEl.style.display = 'none';
      emptyEl.style.display = 'flex';
      return;
    }
    layoutEl.style.display = '';
    emptyEl.style.display = 'none';

    let selectedShipping = 'post';
    const citySelect = document.getElementById('checkout-city');
    const shippingCards = document.querySelectorAll('[data-shipping-method]');

    shippingCards.forEach(function (card) {
      const method = SHIPPING_METHODS[card.getAttribute('data-shipping-method')];
      const priceEl = card.querySelector('.rc-price');
      if (method && priceEl) priceEl.textContent = formatToman(method.cost);
    });

    function updateShippingAvailability() {
      const isTehran = citySelect.value === 'تهران';
      shippingCards.forEach(card => {
        const method = card.getAttribute('data-shipping-method');
        if (method === 'courier') {
          card.classList.toggle('disabled', !isTehran);
          card.querySelector('input').disabled = !isTehran;
          if (!isTehran && selectedShipping === 'courier') {
            selectedShipping = 'post';
            card.querySelector('input').checked = false;
            document.querySelector('[data-shipping-method="post"] input').checked = true;
          }
        }
      });
      syncShippingCardStyles();
      renderSummary();
    }
    function syncShippingCardStyles() {
      shippingCards.forEach(card => {
        card.classList.toggle('selected', card.getAttribute('data-shipping-method') === selectedShipping);
      });
    }
    shippingCards.forEach(card => {
      card.addEventListener('click', function () {
        const input = card.querySelector('input');
        if (input.disabled) return;
        selectedShipping = card.getAttribute('data-shipping-method');
        shippingCards.forEach(c => c.querySelector('input').checked = false);
        input.checked = true;
        syncShippingCardStyles();
        renderSummary();
      });
    });
    citySelect.addEventListener('change', updateShippingAvailability);

    function renderSummary() {
      const summaryLinesEl = document.getElementById('checkout-summary-lines');
      summaryLinesEl.innerHTML = Store.cartLines().map(l => {
        const variant = [l.color ? (COLOR_MAP[l.color] || '') : '', l.size || ''].filter(Boolean).join(' / ');
        return '<div class="summary-mini-line"><div class="ph-image ratio-3-4">' + (l.product.image ? '<img class="ph-photo" decoding="async" loading="lazy" src="' + l.product.image + '" alt="">' : '') + '</div><span class="name">' + l.product.name + (variant ? ' <span class="text-muted">(' + variant + ')</span>' : '') + '</span><span class="qty num">×' + l.qty + '</span></div>';
      }).join('');

      const subtotal = Store.cartSubtotal();
      const discount = Store.discountAmount(subtotal);
      const freeShip = (subtotal - discount) >= FREE_SHIPPING_THRESHOLD || subtotal >= FREE_SHIPPING_THRESHOLD;
      const shippingCost = freeShip ? 0 : SHIPPING_METHODS[selectedShipping].cost;
      const total = subtotal - discount + shippingCost;

      let html = '<div class="cart-summary-row"><span>جمع سبد خرید</span><span class="val num">' + formatToman(subtotal) + '</span></div>';
      if (discount > 0) html += '<div class="cart-summary-row discount"><span>تخفیف</span><span class="val num">−' + formatToman(discount) + '</span></div>';
      html += '<div class="cart-summary-row"><span>هزینه ارسال (' + SHIPPING_METHODS[selectedShipping].label + ')</span><span class="val num">' + (shippingCost === 0 ? 'رایگان' : formatToman(shippingCost)) + '</span></div>';
      html += '<div class="cart-summary-row total"><span>مبلغ قابل پرداخت</span><span class="val num">' + formatToman(total) + '</span></div>';
      document.getElementById('checkout-summary-totals').innerHTML = html;
      root.dataset.total = total;
    }

    document.getElementById('discount-apply-btn-checkout').addEventListener('click', function () {
      const val = document.getElementById('discount-input-checkout').value;
      const result = Store.applyDiscountCode(val);
      document.getElementById('discount-msg-area-checkout').innerHTML = '<div class="discount-msg ' + (result.ok ? 'ok' : 'err') + '">' + result.message + '</div>';
      renderSummary();
    });

    /* OTP placeholder */
    document.getElementById('send-otp-btn').addEventListener('click', function () {
      const phone = document.getElementById('checkout-phone').value.trim();
      if (!/^09\d{9}$/.test(phone)) { showToast('شماره موبایل را درست وارد کن'); return; }
      document.getElementById('otp-note').classList.add('show');
      showToast('کد تایید به شماره شما پیامک شد (نمونه)');
    });

    /* Submit / fake payment */
    function markInvalid(el) { el.style.borderColor = 'var(--color-error)'; }
    function clearInvalid(el) { el.style.borderColor = ''; }

    document.getElementById('checkout-submit-btn').addEventListener('click', function () {
      const name = document.getElementById('checkout-name');
      const phone = document.getElementById('checkout-phone');
      const province = document.getElementById('checkout-province');
      const city = document.getElementById('checkout-city');
      const address = document.getElementById('checkout-address');
      const postal = document.getElementById('checkout-postal');
      const fields = [name, phone, province, city, address, postal];
      fields.forEach(clearInvalid);

      let firstInvalid = null;
      if (!name.value.trim()) { markInvalid(name); firstInvalid = firstInvalid || name; }
      if (!/^09\d{9}$/.test(phone.value.trim())) { markInvalid(phone); firstInvalid = firstInvalid || phone; }
      if (!province.value) { markInvalid(province); firstInvalid = firstInvalid || province; }
      if (!city.value) { markInvalid(city); firstInvalid = firstInvalid || city; }
      if (address.value.trim().length < 10) { markInvalid(address); firstInvalid = firstInvalid || address; }
      if (!/^\d{10}$/.test(postal.value.trim())) { markInvalid(postal); firstInvalid = firstInvalid || postal; }

      if (firstInvalid) {
        showToast('لطفاً اطلاعات ضروری را کامل و درست وارد کن');
        if (typeof firstInvalid.scrollIntoView === 'function') firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
        return;
      }

      const btn = this;
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.innerHTML = '<span class="pay-loading"><span class="spinner"></span> در حال انتقال به درگاه پرداخت...</span>';

      setTimeout(function () {
        const orderNumber = 'HEC-' + Math.floor(100000 + Math.random() * 900000);
        const total = Number(root.dataset.total) || Store.cartSubtotal();
        const orderData = {
          orderNumber: orderNumber,
          itemCount: Store.cartCount(),
          total: total,
          eta: SHIPPING_METHODS[selectedShipping].eta,
          shippingLabel: SHIPPING_METHODS[selectedShipping].label
        };
        try { sessionStorage.setItem('hecuba_last_order', JSON.stringify(orderData)); } catch (e) { /* unavailable */ }
        Store.clearCart();
        location.href = 'order-success.html';
      }, 900);
    });

    syncShippingCardStyles();
    updateShippingAvailability();
  }
  window.HECUBA.initCheckoutPage = initCheckoutPage;

  /* ------------------------------------------------------------------------
     10f. WISHLIST PAGE ENGINE
     ------------------------------------------------------------------------ */
  function initWishlistPage() {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    const emptyEl = document.getElementById('wishlist-empty-state');

    function render() {
      const PRODUCTS = window.HECUBA.PRODUCTS;
      const items = Store.wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
      if (!items.length) {
        grid.style.display = 'none';
        emptyEl.style.display = 'flex';
        return;
      }
      grid.style.display = '';
      emptyEl.style.display = 'none';
      grid.innerHTML = items.map(productCardHTML).join('');
    }
    document.addEventListener('hecuba:store-updated', render);
    render();
  }
  window.HECUBA.initWishlistPage = initWishlistPage;

  /* ------------------------------------------------------------------------
     10g. ORDER SUCCESS PAGE ENGINE
     ------------------------------------------------------------------------ */
  function initOrderSuccessPage() {
    const root = document.getElementById('order-success-root');
    if (!root) return;
    let order = null;
    try { order = JSON.parse(sessionStorage.getItem('hecuba_last_order')); } catch (e) { /* none */ }
    if (!order) {
      order = { orderNumber: 'HEC-' + Math.floor(100000 + Math.random() * 900000), itemCount: 0, total: 0, eta: '۲ تا ۵ روز کاری', shippingLabel: 'پست پیشتاز' };
    }
    document.getElementById('order-number').textContent = order.orderNumber;
    document.getElementById('order-total').textContent = formatToman(order.total);
    document.getElementById('order-eta').textContent = order.eta;
    document.getElementById('order-shipping-label').textContent = order.shippingLabel;
  }
  window.HECUBA.initOrderSuccessPage = initOrderSuccessPage;

  /* ------------------------------------------------------------------------
     10h. CONTACT PAGE (UI-only in prototype — rebuilt with WPForms in WP phase)
     ------------------------------------------------------------------------ */
  function initContactPage() {
    const btn = document.getElementById('contact-submit-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const name = document.getElementById('contact-name');
      const phone = document.getElementById('contact-phone');
      const message = document.getElementById('contact-message');
      [name, phone, message].forEach(el => el.style.borderColor = '');
      let invalid = null;
      if (!name.value.trim()) invalid = name;
      if (!/^09\d{9}$/.test(phone.value.trim())) invalid = invalid || phone;
      if (!message.value.trim()) invalid = invalid || message;
      if (invalid) {
        invalid.style.borderColor = 'var(--color-error)';
        showToast('لطفاً فیلدهای ضروری را کامل کن');
        invalid.focus();
        return;
      }
      showToast('پیام شما ارسال شد — به‌زودی باهات تماس می‌گیریم');
      document.getElementById('contact-form').reset();
    });
  }
  window.HECUBA.initContactPage = initContactPage;

  /* ------------------------------------------------------------------------
     10i. TRACK ORDER PAGE (UI-only front-end demo)
     ------------------------------------------------------------------------ */
  function initTrackOrderPage() {
    const root = document.getElementById('track-order-root');
    if (!root) return;
    const btn = document.getElementById('track-order-submit-btn');
    const orderNumberInput = document.getElementById('track-order-number');
    const phoneInput = document.getElementById('track-order-phone');
    const result = document.getElementById('track-order-result');
    btn.addEventListener('click', function () {
      [orderNumberInput, phoneInput].forEach(el => el.style.borderColor = '');
      let invalid = null;
      if (!orderNumberInput.value.trim()) invalid = orderNumberInput;
      if (!/^09\d{9}$/.test(phoneInput.value.trim())) invalid = invalid || phoneInput;
      if (invalid) {
        invalid.style.borderColor = 'var(--color-error)';
        showToast('شماره سفارش و شماره موبایل را درست وارد کن');
        invalid.focus();
        return;
      }
      result.hidden = false;
      document.getElementById('track-order-number-result').textContent = orderNumberInput.value.trim();
      showToast('سفارش شما پیدا شد (نمونه)');
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  window.HECUBA.initTrackOrderPage = initTrackOrderPage;

  /* ------------------------------------------------------------------------
     10j. ACCOUNT PAGE (Login / Sign up — UI-only, OTP placeholder per brief §66)
     ------------------------------------------------------------------------ */
  function initAccountPage() {
    const root = document.getElementById('account-page-root');
    if (!root) return;

    /* Tabs */
    const tabs = Array.from(root.querySelectorAll('.account-tab'));
    const panels = { login: document.getElementById('account-panel-login'), signup: document.getElementById('account-panel-signup') };
    function selectTab(name) {
      tabs.forEach(tab => {
        const isActive = tab.getAttribute('data-tab') === name;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });
      Object.keys(panels).forEach(key => { panels[key].hidden = key !== name; });
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function () { selectTab(tab.getAttribute('data-tab')); tab.focus(); });
      tab.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        const nextIndex = e.key === 'ArrowLeft' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        selectTab(nextTab.getAttribute('data-tab'));
        nextTab.focus();
      });
    });

    /* Login — phone -> OTP (mirrors checkout.html's OTP placeholder) */
    const loginPhoneStep = document.getElementById('account-login-step-phone');
    const loginOtpStep = document.getElementById('account-login-step-otp');
    const loginPhoneInput = document.getElementById('account-login-phone');
    const sendOtpBtn = document.getElementById('account-send-otp-btn');
    const otpNote = document.getElementById('account-otp-note');
    const otpInput = document.getElementById('account-otp-input');
    const loginSubmitBtn = document.getElementById('account-login-submit-btn');
    if (sendOtpBtn) {
      sendOtpBtn.addEventListener('click', function () {
        const phone = loginPhoneInput.value.trim();
        if (!/^09\d{9}$/.test(phone)) {
          loginPhoneInput.style.borderColor = 'var(--color-error)';
          showToast('شماره موبایل را درست وارد کن');
          return;
        }
        loginPhoneInput.style.borderColor = '';
        loginPhoneStep.classList.remove('active');
        loginOtpStep.classList.add('active');
        otpNote.classList.add('show');
        showToast('کد تایید به شماره شما پیامک شد (نمونه)');
        otpInput.focus();
      });
    }
    if (loginSubmitBtn) {
      loginSubmitBtn.addEventListener('click', function () {
        if (!/^\d{4,6}$/.test(otpInput.value.trim())) {
          otpInput.style.borderColor = 'var(--color-error)';
          showToast('کد تایید را درست وارد کن');
          return;
        }
        showToast('با موفقیت وارد شدید (نمونه)');
      });
    }

    /* Sign up */
    const signupBtn = document.getElementById('account-signup-submit-btn');
    if (signupBtn) {
      signupBtn.addEventListener('click', function () {
        const name = document.getElementById('account-signup-name');
        const phone = document.getElementById('account-signup-phone');
        [name, phone].forEach(el => el.style.borderColor = '');
        let invalid = null;
        if (!name.value.trim()) invalid = name;
        if (!/^09\d{9}$/.test(phone.value.trim())) invalid = invalid || phone;
        if (invalid) {
          invalid.style.borderColor = 'var(--color-error)';
          showToast('لطفاً فیلدهای ضروری را کامل کن');
          invalid.focus();
          return;
        }
        showToast('ثبت‌نام شما با موفقیت انجام شد (نمونه)');
        document.getElementById('account-signup-form').reset();
      });
    }
  }
  window.HECUBA.initAccountPage = initAccountPage;

  /* ------------------------------------------------------------------------
     10b. STICKY HEADER SHADOW ON SCROLL
     ------------------------------------------------------------------------ */
  function initHeaderScrollState() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let ticking = false;
    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 80);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     10l. ANNOUNCEMENT BAR — free-shipping threshold, rendered via formatToman
     (single source of price formatting, per project rule)
     ------------------------------------------------------------------------ */
  function initAnnouncementBar() {
    const el = document.querySelector('[data-announcement-price]');
    if (el) el.textContent = formatToman(FREE_SHIPPING_THRESHOLD);
  }

  /* ------------------------------------------------------------------------
     10k. NAV DROPDOWNS — keep aria-expanded in sync with the CSS hover/focus
     open state (display is driven entirely by CSS; this only mirrors state)
     ------------------------------------------------------------------------ */
  function initNavDropdowns() {
    document.querySelectorAll('.main-nav .has-mega').forEach(function (li) {
      const trigger = li.querySelector(':scope > a, :scope > button');
      if (!trigger) return;
      const open = function () { trigger.setAttribute('aria-expanded', 'true'); };
      const close = function () { trigger.setAttribute('aria-expanded', 'false'); };
      li.addEventListener('mouseenter', open);
      li.addEventListener('mouseleave', close);
      li.addEventListener('focusin', open);
      li.addEventListener('focusout', function (e) {
        if (!li.contains(e.relatedTarget)) close();
      });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { close(); trigger.blur(); }
      });
    });
  }

  /* ------------------------------------------------------------------------
     11. INIT
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    Store.updateBadges();
    initSearch();
    initHeaderScrollState();
    initNavDropdowns();
    initAnnouncementBar();
  });

})();

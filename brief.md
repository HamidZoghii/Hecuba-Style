# دستور جامع طراحی و ساخت وب‌سایت فروشگاهی Hecuba Style
### نسخه نهایی — آماده برای اجرا

می‌خواهم برای برند **Hecuba Style | هکوبا استایل** یک وب‌سایت فروشگاهی حرفه‌ای، مدرن، زنانه و Conversion-Focused طراحی و پیاده‌سازی کنی.

این پروژه صرفاً یک طراحی UI نیست. خروجی این مرحله یک **Prototype / Front-end واقعی و قابل تعامل** است که در مرحله بعد به **WordPress + WooCommerce + Elementor** منتقل می‌شود. بنابراین از همان ابتدا باید طراحی، ساختار HTML، کامپوننت‌ها، Layout، Responsive Behavior و Component Architecture به شکلی باشد که بعداً بتوان آن را به Elementor و WooCommerce منتقل کرد.

---

## 1. اطلاعات اصلی برند

**نام برند:** Hecuba Style | هکوبا استایل
**شعار:** زیبایی، راحتی، انتخاب تو
**حوزه فعالیت:** فروش آنلاین لباس زیر و پوشاک زنانه

**Positioning:**
هکوبا جایی برای پیدا کردن لباس زیری است که هم زیباست، هم راحت، هم انتخابش ساده است.

---

## 2. داستان برند

هکوبا استایل یک فروشگاه آنلاین تخصصی پوشاک و لباس زیر زنانه است که با تمرکز بر تنوع مدل، زیبایی، راحتی، قیمت مناسب، انتخاب ساده و تجربه خرید مطمئن شکل گرفته است. هدف برند این است که خرید لباس زیر را از یک خرید صرفاً کاربردی، به تجربه‌ای ساده، مطمئن، زیبا و لذت‌بخش تبدیل کند.

---

## 3. شخصیت برند

هکوبا باید این 5 ویژگی را منتقل کند: زنانه، جذاب، متنوع، صمیمی، مدرن.

**بسیار مهم:** سایت نباید حس Adult / Explicit / Sexual Store داشته باشد. هویت بصری باید بیشتر در فضای **Fashion + Beauty + Confidence + Comfort** باشد. از تصاویر، ترکیب‌بندی‌ها و متن‌هایی که سایت را به فروشگاه محصولات بزرگسال نزدیک می‌کنند خودداری کن.

---

## 4. مخاطب هدف

- **سن:** زنان 18 تا 40 سال
- **وضعیت اقتصادی:** متوسط تا متوسط رو به بالا
- **تأهل:** مجرد و متأهل
- **نوع خرید:** عمدتاً برای خود فرد، با امکان خرید هدیه
- **سبک مورد علاقه:** Minimal/Everyday، Fantasy، Sport، Attractive، Classic

---

## 5. مهم‌ترین اصل طراحی: MOBILE FIRST

بخش قابل توجهی از کاربران از Instagram وارد سایت می‌شوند. سناریوی اصلی:

**Instagram / Google → Landing / Product → انتخاب سایز → انتخاب رنگ → Add to Cart → Checkout → Purchase**

طراحی را ابتدا برای موبایل در نظر بگیر و سپس برای Tablet و Desktop گسترش بده. Responsive کردن یک Desktop Design کافی نیست؛ Mobile UX باید از ابتدا طراحی شده باشد.

---

## 6. هدف اصلی سایت: تبدیل ترافیک به خرید

اهداف ثانویه: افزایش فروش آنلاین، تبدیل مخاطبان Instagram به مشتری، جذب مشتری از Google، افزایش اعتبار برند، کاهش وابستگی به Direct Instagram، ایجاد تجربه خرید حرفه‌ای.

هدف فاز اول: حدود 30٪ فروش آنلاین از سایت | هدف بلندمدت: 50٪+

در تمام تصمیم‌های UI/UX، معیار اصلی **Conversion** باشد، نه صرفاً زیبایی.

---

## 7. محصولات

دسته‌بندی‌های اصلی: شورت زنانه، سوتین زنانه، ست لباس زیر، نیم‌تنه، لباس زیر فانتزی، بادی، لباس خواب، مایو و بیکینی، لباس راحتی، محصولات مکمل.

حدود 100 تا 150 محصول در نسخه نهایی. در Prototype یک **Product Data Structure قابل توسعه** ایجاد کن و حداقل **24 محصول نمونه واقعی و متنوع** برای نمایش رابط کاربری بساز. ساختار باید به‌راحتی قابلیت افزایش به 120+ محصول را داشته باشد.

---

## 8. Product Data

هر محصول شامل: نام، دسته‌بندی، قیمت، قیمت قبل از تخفیف، درصد تخفیف، تصاویر، تصویر دوم، ویدئو (در صورت وجود)، رنگ‌ها، سایزها، جنس، توضیحات، ویژگی‌ها، موجودی، SKU، امتیاز، تعداد Reviews، برچسب‌هایی مانند New/Bestseller/Sale.

---

## 9. سایزبندی

**سوتین:** 70B, 75B, 80B, 85B, 90B و مشابه
**سایر محصولات:** S, M, L, XL, 2XL, Free Size

برخی محصولات 2 تا 3 رنگ و برخی 6 تا 8 رنگ دارند.

---

## 10. موجودی

موجودی وابسته به **Color + Size** است. مثلاً: Black/75B → Available، Black/80B → Available، Black/85B → Out of Stock. در Product Page، وضعیت موجودی Variant انتخاب‌شده را واضح نمایش بده.

---

## 11. قیمت‌گذاری

بازه: **250,000 تا 2,000,000+ تومان**
- اقتصادی: 250K–500K
- متوسط: 500K–1M
- خاص/ست/فانتزی: 1M–2M+

از تومان در UI استفاده کن، مثلاً: **۷۹۰,۰۰۰ تومان**

---

## 12. تخفیف و Promotion

سیستم بصری برای: Sale، تخفیف درصدی، قیمت قبلی/فعلی، پیشنهاد ویژه، First Purchase، Bundle، Featured Product.

بخش ویژه **«ست پیشنهادی هکوبا»**: مثلاً سوتین + شورت + جوراب با قیمت Bundle کمتر از خرید جداگانه.

---

## 13. Shipping

**پوشش:** سراسر ایران
**روش‌ها:** پست پیشتاز، تیپاکس، پیک تهران
**زمان تحویل:** تهران 1-2 روز کاری | سایر شهرها 2-5 روز کاری
**ارسال رایگان:** سفارش‌های بالای 1,500,000 تومان — به‌عنوان Trust/Shipping Message نمایش داده شود.

---

## 14. پرداخت

پرداخت آنلاین دارد؛ پرداخت در محل ندارد؛ کارت‌به‌کارت فقط در شرایط خاص؛ اقساط در فاز اول نیست.

در Prototype نیازی به Payment Gateway واقعی نیست، اما UX مسیر خرید باید واقعی و کامل به نظر برسد.

---

## 15. Guest Checkout

کاربر نباید مجبور به ساخت حساب باشد. **Guest Checkout الزامی است.** مسیر خرید: Product → Cart → Checkout → Payment

---

## 16. امکانات اصلی فروشگاه

Search، Advanced Filter، Cart، Wishlist، User Account، Discount Code، Sale Products، Related Products، Recently Viewed، Reviews، Back in Stock، Size Selection، Size Guide، Size Finder، Order Tracking، WhatsApp، Instagram، Product Recommendation، Quick Add.

Compare در اولویت پایین است و نباید UI را شلوغ کند.

---

## 17. Search

اهمیت بسیار بالا دارد؛ در Header باید به‌وضوح در دسترس باشد (Desktop: Search Bar/Icon | Mobile: جزو عناصر اصلی Navigation). یک Search Interaction واقعی پیاده‌سازی کن (مثلاً جستجوی «سوتین مشکی» و نمایش محصولات مرتبط).

---

## 18. Filter

فیلترهای اصلی: دسته‌بندی، سایز، رنگ، قیمت، جنس، مدل، کاربرد، برند، تخفیف، موجودی.
Desktop: Filter Sidebar | Mobile: Filter Drawer/Bottom Sheet — کاملاً تعاملی.

---

## 19. Product Card

هر Card شامل: تصویر، نام، قیمت، قیمت قبلی (در صورت تخفیف)، درصد تخفیف، Wishlist، رنگ‌های موجود، Badge، Quick Add.

**Hover در Desktop:** نمایش تصویر دوم | **Mobile:** بدون Hover، از Interaction مناسب Touch استفاده شود.

اولویت بصری: **Image → Product Name → Price → Variant / Quick Action**

---

## 20. Product Page

**Product Gallery:** تصویر بزرگ، Thumbnail، Zoom، تصویر دوم، Video (در صورت وجود)
**Product Information:** نام، Rating، قیمت، قیمت قبلی، Discount، رنگ، Color Swatches، سایز، Size Selector، موجودی، SKU
**Primary CTA:** افزودن به سبد خرید | **CTA ثانویه:** خرید مستقیم

---

## 21. Size Guide

CTA واضح «راهنمای انتخاب سایز» که با کلیک Modal/Drawer باز می‌شود، شامل Band, Cup, S–2XL.

---

## 22. Size Finder

مثال: مرحله ۱ (دور زیر سینه؟) → مرحله ۲ (دور سینه؟) → «سایز پیشنهادی شما: 75B». در Prototype به‌صورت Front-end Demo پیاده‌سازی می‌شود.

---

## 23. Trust در Product Page

کنار یا زیر CTA: ارسال سراسر کشور، ضمانت تعویض سایز، پرداخت امن، بسته‌بندی مناسب، پشتیبانی. نباید شلوغ باشد.

---

## 24. Product Information Sections

بعد از بخش اصلی: توضیحات، ویژگی‌ها، جنس، جدول سایز، نحوه شست‌وشو، قوانین تعویض، ارسال — به‌صورت Accordion/Tabs.

---

## 25. Why This Product?

بخش «چرا این محصول؟» با چک‌لیست کوتاه و قابل Scan سریع (مثلاً: پارچه نرم، مناسب روزمره، کاپ فرم‌دهنده، طراحی سبک، ارسال سراسری).

---

## 26. Reviews

امتیاز کلی، تعداد Reviews، Review Card، Rating Stars، متن نظر، عکس مشتری (در صورت وجود).

---

## 27. Related Products

محصولات مرتبط، مشابه، ست پیشنهادی، Recently Viewed.

---

## 28. Wishlist

در Product Card و Product Page قابل دسترسی. در Prototype وضعیت با JavaScript/Local Storage حفظ می‌شود.

---

## 29. Cart

هر Item: تصویر، نام، Variant (رنگ/سایز)، قیمت، Quantity، Remove. همچنین: Subtotal، Shipping Message، Discount، Total، Checkout CTA.

---

## 30. Free Shipping Progress

Progress Message جذاب در Cart، مثلاً: «فقط ۳۰۰,۰۰۰ تومان تا ارسال رایگان فاصله دارید.» — طراحی بصری.

---

## 31. Homepage

فروش‌محور، نه صرفاً معرفی برند. ترتیب پیشنهادی:

**01 — Header**
**02 — Hero:** بسیار تصویری و Editorial. Headline: «زیبایی، راحتی، انتخاب تو» | Subheadline: «لباس زیر و پوشاک زنانه برای هر روز، هر سلیقه و هر حال خوب.» | CTA: «مشاهده محصولات» | CTA ثانویه: «کالکشن جدید». Hero نباید شبیه Banner فروشگاهی سنتی باشد.

---

## 32. Trust Strip

بلافاصله بعد از Hero: ارسال سراسر ایران، تعویض سایز، پرداخت امن، پشتیبانی، ارسال رایگان بالای 1.5M — تمیز و ساده.

---

## 33. Category Navigation

بخش تصویری برای دسته‌بندی‌های اصلی (سوتین، شورت، ست، نیم‌تنه، فانتزی، بادی، لباس خواب، مایو، راحتی) با Category Cards و تصاویر Editorial.

---

## 34. New Arrivals

«تازه‌های هکوبا» با Product Grid/Carousel و CTA «مشاهده همه».

---

## 35. Best Sellers

«پرفروش‌ترین‌ها» با محصولات محبوب.

---

## 36. Promotional Section

کمپین «تا ۳۰٪ تخفیف روی انتخاب‌های ویژه» — بدون تبدیل سایت به فروشگاه تخفیفاتی شلوغ. رنگ Burgundy به‌صورت کنترل‌شده.

---

## 37. Curated Collection

بخش Editorial «انتخاب‌های هکوبا» با متن کوتاه و چند محصول منتخب — هدف: حس Curated Selection.

---

## 38. Bundle

«ست پیشنهادی هکوبا» (مثلاً Bra+Brief+Socks) با نمایش قیمت جداگانه، قیمت Bundle، میزان صرفه‌جویی. CTA: «مشاهده ست».

---

## 39. Instagram Section

بخش Editorial (نه Feed شلوغ): «هکوبا را در اینستاگرام ببینید» با @hecubastyle و چند محتوای منتخب. CTA «مشاهده اینستاگرام» نباید از CTAهای خرید مهم‌تر باشد.

---

## 40. Social Proof

مثلاً: «بیش از 58 هزار نفر در اینستاگرام هکوبا همراه ما هستند.» — به‌صورت ظریف و حرفه‌ای.

---

## 41. FAQ

نمونه سؤالات: انتخاب سایز، زمان ارسال، امکان تعویض سایز، هزینه ارسال، خرید بدون ثبت‌نام، مرجوعی محصولات استفاده‌شده.

---

## 42. Final CTA

انتهای Homepage: «مدل مورد علاقه‌ات را پیدا کن» / دکمه «مشاهده فروشگاه».

---

## 43. صفحات اصلی (حداقل)

1. Home
2. Shop (Search + Filter + Sort + Product Grid)
3. Category (مثلاً «سوتین زنانه» با Category Header + Product Grid)
4. Product Detail (کامل و واقعی)
5. About / Contact

---

## 44. صفحات / Flowهای ضروری E-commerce

Cart، Checkout، Account، Wishlist، Size Guide، Order Tracking، FAQ، Shipping، Returns & Exchanges، Blog، Sale، **حریم خصوصی**، **قوانین و مقررات**.

این‌ها می‌توانند به‌صورت Route/View/Modal/Drawer پیاده‌سازی شوند؛ لازم نیست همه Page مستقل باشند.

---

## 45. About Page

داستان برند، فلسفه، انتخاب محصولات، تمرکز روی راحتی، تنوع، مشاوره سایز، تجربه خرید، Social Proof. CTA: «مشاهده محصولات»

---

## 46. Contact

- تلفن: 021-91000000
- WhatsApp: 09120000000
- Email: hello@hecubastyle.ir
- Location: تهران
- ساعات کاری: شنبه تا پنجشنبه، 10 تا 19
- Instagram: @hecubastyle

فرم تماس: نام، شماره تماس، ایمیل، پیام (طراحی UI فرم؛ در وردپرس با **WPForms** ساخته می‌شود).

---

## 47. Returns & Exchanges

تعویض سایز مجاز است اگر: استفاده نشده، شسته نشده، تگ سالم، بسته‌بندی سالم، بدون اثر استفاده.

در صورت اشتباه فروشگاه: هزینه بازگشت با فروشگاه. در صورت انتخاب اشتباه/تغییر نظر مشتری: هزینه با مشتری. محصولات استفاده‌شده یا بازشده از بسته‌بندی بهداشتی قابل مرجوعی نیستند.

---

## 48. Visual Identity — Hecuba Brand DNA Color System

پالت رنگی سایت مستقیماً از DNA بصری لوگوی Hecuba Style الهام گرفته شده است. رنگ Sage/Olive موجود در لوگو، رنگ هویتی اصلی برند است و سایر رنگ‌ها در هماهنگی با آن انتخاب شده‌اند.

| نقش | نام رنگ | کد HEX |
|---|---|---|
| Brand Core | Logo Sage | `#9CA286` |
| Primary | Deep Sage Olive | `#737C54` |
| Primary Dark | Dark Olive | `#555D3D` |
| Secondary | Warm Beige | `#E8DFD2` |
| Background | Warm Off-White | `#F8F6F2` |
| Surface | Pure White | `#FFFFFF` |
| Text | Charcoal | `#202020` |
| Muted Text | Soft Charcoal | `#6F6F6A` |
| Border | Warm Gray | `#DDD8CF` |
| CTA / Accent | Deep Burgundy | `#8E3045` |
| CTA Dark / Hover | Dark Burgundy | `#6D2436` |
| CTA Light | Soft Burgundy | `#B96777` |

### Color Usage Rules

- `#9CA286` — رنگ مستخرج مستقیم از DNA لوگو؛ برای عناصر برند، بخش‌های هویتی، Backgroundهای Sage و برخی Visual Highlights استفاده شود.
- `#737C54` — Primary اصلی رابط کاربری؛ برای Primary Buttons ثانویه، لینک‌های مهم، عناصر Navigation و UI Accentهای برند.
- `#555D3D` — Hover، Active State و نسخه تیره Primary.
- `#E8DFD2` — Sectionهای ثانویه، کارت‌های Editorial و Backgroundهای گرم.
- `#F8F6F2` — Background اصلی سایت و فضای غالب UI.
- `#FFFFFF` — Surface، Card و عناصر نیازمند تفکیک از Background.
- `#202020` — رنگ اصلی Typography و متن‌های مهم.
- `#6F6F6A` — متن‌های Secondary، توضیحات و Metadata.
- `#DDD8CF` — Border، Divider و Inputها.
- `#8E3045` — Conversion Accent؛ برای CTAهای اصلی، Sale، Discount، Important Actions و بعضی Micro-interactions.
- `#6D2436` — Hover/Active state مربوط به Burgundy.
- `#B96777` — Accentهای نرم، Highlight و برخی عناصر Promotional.

### Brand Color Hierarchy

رنگ غالب برند باید خانواده Sage/Olive باشد. Burgundy نباید به رنگ غالب سایت تبدیل شود — Burgundy فقط یک Conversion Accent است و باید با کنترل و در نقاط مهم استفاده شود.

از استفاده همزمان تعداد زیادی رنگ در یک Section خودداری شود.

**هدف بصری:** Sophisticated Simplicity + Modern Feminine + Minimal Fashion

پالت نباید باعث شود سایت حس Adult/Explicit/Cheap Fashion Store یا Discount Marketplace پیدا کند.

### Approximate Visual Distribution

- Warm Off-White `#F8F6F2` → حدود 55–65٪
- White `#FFFFFF` → حدود 10–15٪
- Warm Beige `#E8DFD2` → حدود 10–15٪
- Sage/Olive Family → حدود 10–15٪
- Charcoal/Text Colors → حدود 5٪
- Burgundy Accent → حداکثر 3–5٪

از رنگ‌های دلخواه خارج از این سیستم خودداری شود، مگر برای دسترسی‌پذیری (Accessibility) یا حالت‌های عملکردی (Error, Success, Out of Stock) که ضرورت فنی داشته باشد.

---

## 49. Typography

**فونت فارسی: Peyda** (فایل فونت توسط کارفرما تأمین شده، فرمت WOFF2 آماده — 9 وزن موجود، اما طبق اصل سادگی فقط از 3 وزن اصلی در UI استفاده می‌شود: **Regular** برای متن، **Medium** برای زیرعنوان/قیمت، **SemiBold/Bold** برای عناوین اصلی)

**فونت انگلیسی/اعداد:** Manrope

Typography باید خوانا، مدرن، Fashion-oriented، مینیمال باشد. از تعداد زیاد Font Weight استفاده نشود.

---

## 50. Visual Direction

سبک: **Modern Feminine + Minimal Fashion** — ترکیبی از Minimal، Feminine، Fashion، Editorial، Accessible Luxury، Lifestyle، Confidence.

طراحی نباید شبیه فروشگاه تخفیفی، سایت‌های Commodity، فروشگاه Adult، یا Marketplace شلوغ باشد.

---

## 51. Benchmark Direction

**SKIMS:** Minimalism، Product Presentation، Category Structure، Visual Hierarchy
**Intimissimi:** Fashion Positioning، Editorial Photography، Feminine Visual Language، Product Storytelling
**Aerie:** Lifestyle، جوان‌پسند بودن، صمیمیت، تنوع

در بازار ایران: برتا، هانسو، البرا، بادی باردی، حوریا (فقط از نظر E-commerce UX و Category Structure).

**کپی نکن.** هدف ساخت تجربه‌ای متفاوت و اختصاصی است.

---

## 52. الگوهایی که باید اجتناب شوند

Bannerهای متعدد، رنگ‌های زیاد، تخفیف‌های فریادزن، Pop-up متعدد، Product Card پیچیده، Typography شلوغ، فضای بصری ضعیف، تصاویر بی‌کیفیت، UI شبیه Marketplace. هر بخش باید دلیل داشته باشد.

---

## 53. Image Direction

محصول باید قهرمان سایت باشد: تصاویر بزرگ، تمیز، باکیفیت، Editorial، طبیعی، دارای فضای تنفس.

**تأمین تصویر پروتوتایپ:** تصاویر Placeholder با کیفیت، سبک Fashion/Lifestyle، از طریق جستجوی تصویر تهیه می‌شود — غیرصریح و منطبق با هویت برند. این تصاویر موقتی هستند و در مرحله انتقال به وردپرس با عکاسی واقعی محصول Hecuba جایگزین می‌شوند.

---

## 54. Animation

شدت: **Low → Medium**. استفاده از: Smooth transitions، Image swap on hover، Product zoom، Quick Add، Add to Cart feedback، Wishlist animation، Accordion، Filter Drawer، Sticky Mobile CTA.

**ممنوع:** Parallax سنگین، Loader نمایشی، Animation طولانی، افکت بی‌دلیل، Motion بیش از حد.

---

## 55. Mobile UX

Header موبایل: Logo, Search, Wishlist, Cart, Menu.
**Sticky Bottom CTA** در Product Page: «افزودن به سبد» — در دسترس انگشت.
Filter موبایل: Drawer/Bottom Sheet.

---

## 56. Navigation

Header **Sticky**. Desktop: خانه، فروشگاه، دسته‌بندی‌ها، جدیدها، پرفروش‌ها، تخفیف‌ها، درباره ما + Search, Wishlist, Cart, Account. Mobile Navigation ساده‌تر.

---

## 57. Mega Menu

مثال:
- **لباس زیر:** سوتین، شورت، ست، نیم‌تنه، فانتزی
- **پوشاک:** لباس خواب، لباس راحتی، بادی
- **ساحلی:** مایو، بیکینی

نباید شلوغ باشد.

---

## 58. Footer

Logo، معرفی کوتاه، لینک‌های فروشگاه، لینک‌های راهنما، قوانین، تماس، Instagram، WhatsApp، **نماد اعتماد الکترونیکی (اینماد) و ساماندهی** (به‌صورت Placeholder گرافیکی)، Copyright.

---

## 59. SEO

ساختار Semantic HTML رعایت شود. هر صفحه شامل: `<title>`، `<meta description>`، ساختار Heading منطقی (فقط یک H1 در صفحه)، Alt Text، و **Schema.org مقدماتی** (Product, BreadcrumbList) آماده برای تنظیم توسط **Rank Math SEO** در مرحله وردپرس.

**Keywords:** لباس زیر زنانه، خرید لباس زیر زنانه، خرید سوتین زنانه، خرید شورت زنانه، ست لباس زیر زنانه، سوتین زنانه، شورت زنانه، لباس زیر فانتزی، لباس خواب زنانه، بادی زنانه، نیم تنه زنانه، مایو زنانه، بیکینی زنانه، راهنمای سایز سوتین.

---

## 60. Blog

موضوعات نمونه: چگونگی پیدا کردن سایز سوتین، تفاوت مدل‌های سوتین، راهنمای انتخاب شورت، مراقبت از لباس زیر، زمان تعویض لباس زیر، انتخاب لباس زیر روزمره، تفاوت مدل‌های سوتین. باید قابل توسعه باشد.

---

## 61. Technical Direction

ساخت با **HTML + CSS + JavaScript**، ساختار تمیز، Component-Based، قابل انتقال.

**RTL:** سایت کاملاً راست‌به‌چپ (`dir="rtl"` روی HTML) — شامل breadcrumb، اسلایدرها، فلش‌های جهت‌دار، آیکون‌های back/next.

**ساختار فایل:** چند فایل HTML مجزا (Home, Shop, Category, Product, About/Contact) + یک CSS مشترک + یک JS مشترک — نه یک فایل تک‌صفحه‌ای بزرگ.

CSS با Variables برای: Colors, Typography, Spacing, Radius, Shadows, Container Width.

**فونت‌ها:** فایل‌های WOFF2 آماده (Peyda 3 وزن اصلی + Manrope) به‌صورت `@font-face` لوکال لود می‌شوند، نه از CDN خارجی.

**Analytics Placeholder:** در `<head>` هر صفحه، Comment Placeholder برای Google tag (gtag.js) جهت اتصال بعدی به **Site Kit by Google**.

**تصاویر:** فرمت مناسب فشرده‌سازی/WebP-ready، هماهنگ با افزونه Image Optimization در مرحله وردپرس.

---

## 62. Elementor Compatibility

نسخه نهایی به **WordPress + WooCommerce + Elementor** منتقل می‌شود:

- Layoutها Container-based باشند.
- از ساختارهای پیچیده‌ی غیرقابل بازسازی در Elementor خودداری شود.
- از عناصر تودرتوی غیرضروری خودداری شود.
- Componentها منطقی و قابل تبدیل طراحی شوند.
- Grid و Card باید قابلیت تبدیل به Elementor Container + Widget را داشته باشند.
- Header و Footer باید با **XPRO Theme Builder** قابل بازسازی باشند.
- Product Card باید قابل تبدیل به WooCommerce Product Loop باشد.
- Product Page باید با WooCommerce Single Product structure قابل پیاده‌سازی باشد.
- Category Page باید با WooCommerce Archive structure قابل پیاده‌سازی باشد.

---

## 63. Elementor Constraints (به‌روزرسانی‌شده)

در مرحله وردپرس، هر دو **Elementor Pro** و **XPRO Addons** نصب هستند:

- **XPRO Theme Builder** صرفاً برای Header و Footer (Theme Parts) استفاده می‌شود.
- از **Elementor Pro Widgets** برای بخش‌های محتوایی صفحات (Sections، Sliders، Forms Layout و…) می‌توان استفاده کرد.
- از **Native Elementor Widgets** به‌عنوان پایه استفاده می‌شود.
- از **HTML Widget** و **Atomic Elements** خودداری می‌شود.

طراحی فعلی باید طوری باشد که هیچ بخشی وابسته به یک Custom HTML Widget غیرقابل انتقال نباشد.

---

## 64. Header / Footer

Header و Footer در وردپرس با **XPRO Theme Builder** ساخته می‌شوند؛ بنابراین به‌عنوان Component مستقل طراحی شوند.

**Header:** Logo, Navigation, Search, Wishlist, Cart, Account, Mobile Menu
**Footer:** Brand, Links, Customer Service, Contact, Social, Trust

---

## 65. WPForms

فرم Contact در وردپرس با **WPForms Lite** ساخته می‌شود؛ در Prototype فقط UI فرم طراحی می‌شود.

---

## 66. WooCommerce Compatibility

WooCommerce (به همراه **ووکامرس فارسی**، **افزونه حمل‌ونقل**، **درگاه پرداخت**، **افزونه SMS**) مسئول: Products, Variations, Inventory, Cart, Checkout, Orders, Coupons, Customer Account, Reviews خواهد بود.

- **Variation Swatches for WooCommerce (Brainstorm Force):** ساختار رنگ/سایز در Product Card و Product Page باید به‌صورت Swatch (دکمه/دایره رنگی، نه Dropdown) طراحی شود — `data-attribute="color"` قابل تشخیص.
- **Filter Everything:** هر گروه فیلتر (دسته، سایز، رنگ، قیمت، جنس) به‌صورت Block مستقل با Checkbox/Range Slider طراحی شود، سازگار با فیلتر Real-time بدون Reload.
- **TI WooCommerce Wishlist:** آیکون Wishlist روی Product Card با ساختار ثابت و `data-product-id` قابل تشخیص طراحی شود؛ رفتار Local Storage در پروتوتایپ همان توالی UX (کلیک → پر شدن آیکون → Toast Feedback) را شبیه‌سازی کند.
- **افزونه SMS:** در UI مسیر Checkout، جایگاه پیام «کد تایید پیامکی» (OTP placeholder) در نظر گرفته شود.

Prototype باید UX این سیستم را شبیه‌سازی کند، بدون نیاز به Backend واقعی WooCommerce.

---

## 67. Prototype Interactions

این تعاملات باید واقعاً پیاده‌سازی شوند: Navigation، Search، Filter، Sort، Product Detail، Product Gallery، Color Selection، Size Selection، Add to Cart، Quick Add، Cart Drawer، Quantity Change، Wishlist، Recently Viewed، Size Guide، Size Finder، FAQ Accordion، Mobile Menu، Mobile Filter، Product Image Swap، Add to Cart Feedback.

Cart و Wishlist از **Local Storage** استفاده کنند تا با Refresh از بین نروند.

---

## 68. مهم‌ترین اولویت‌های UX

اگر بین زیبایی و Conversion تعارض بود: **Conversion را انتخاب کن.**

سه اولویت اصلی:
1. خرید سریع و ساده در موبایل
2. نمایش حرفه‌ای محصول
3. اعتمادسازی (سایزبندی، پرداخت، ارسال، تعویض، بهداشت محصول)

---

## 69. Design System

قبل از ساخت صفحات، یک Design System کوچک و منسجم تعریف شود، شامل: Color Tokens، Typography Scale، Spacing، Container Width، Button Styles، Input Styles، Card Styles، Badge Styles، Product Card، Product Swatches، Rating، Accordion، Modal، Drawer، Navigation، Breadcrumb، Trust Badge.

همه صفحات از همین Design System استفاده کنند.

---

## 70. اصل مهم: از طراحی بیش از حد پرهیز کن

از این اشتباه‌ها جلوگیری کن: 15 نوع Card، 10 نوع Button، 8 نوع Font، Animation زیاد، Section بی‌دلیل، Gradient بی‌دلیل، Shadow زیاد، Border زیاد، رنگ‌های متعدد.

هدف: **Sophisticated Simplicity**

---

## 71. Visual Hierarchy

در تمام صفحات: **Product Image → Product Name → Price → Variant/Size → CTA**

کاربر باید بی‌درنگ بفهمد: چه چیزی می‌فروشی؟ چقدر قیمت دارد؟ چه سایزی دارد؟ چطور بخرم؟

---

## 72. Accessibility

Contrast مناسب، Focus State، Keyboard Navigation، Alt Text، Semantic HTML، Button Labels، Form Labels، Touch Target مناسب.

---

## 73. Performance

اجتناب از: تصاویر بیش از حد سنگین، Animation سنگین، Library غیرضروری، Dependency زیاد.

هدف: **Fast + Elegant**

---

## 74. Important Business Rule

Instagram منبع Traffic است، نه مقصد نهایی. مسیر: **Instagram → Product → Trust → Size Confidence → Add to Cart → Checkout**

CTA اصلی: «خرید / افزودن به سبد» — نه «Follow Instagram».

---

## 75. Content Tone

صمیمی، زنانه، مطمئن، مدرن، کوتاه، غیررسمی اما حرفه‌ای. از کلیشه‌هایی مثل «بهترین کیفیت باورنکردنی با ارزان‌ترین قیمت» پرهیز شود.

---

## 76. Final Quality Standard

قبل از تحویل هر فاز، با این سؤال‌ها بررسی شود:

- آیا در 5 ثانیه اول مشخص است هکوبا چه می‌فروشد؟
- آیا کاربر موبایل سریع وارد Shop می‌شود؟
- آیا Product Card واضح است؟
- آیا انتخاب سایز ساده است؟
- آیا Trust Signals واضح هستند؟
- آیا Add to Cart مهم‌ترین CTA است؟
- آیا Product Page برای خرید بهینه شده؟
- آیا سایت بیش از حد Sexy/Adult نشده؟
- آیا شبیه Marketplace شلوغ نیست؟
- آیا Design واقعاً Fashion-oriented است؟
- آیا Layout قابل بازسازی در Elementor است؟
- آیا Header/Footer قابل تبدیل به XPRO هستند؟
- آیا Product Card قابل تبدیل به WooCommerce Loop است؟
- آیا Product Page قابل تبدیل به WooCommerce Single Product است؟
- آیا Mobile UX از Desktop UX مهم‌تر طراحی شده؟

---

## 77. زیرساخت فنی مرحله وردپرس (مرجع، بدون اثر مستقیم بر Prototype فعلی)

فهرست افزونه‌های نصب‌شده برای مرحله بعد:

**فروشگاه:** WooCommerce، ووکامرس فارسی، افزونه حمل‌ونقل، درگاه پرداخت، افزونه SMS
**UX تکمیلی:** Variation Swatches for WooCommerce، Filter Everything، TI WooCommerce Wishlist
**صفحه‌ساز:** Elementor، Elementor Pro، XPRO Addons/Theme Builder
**فرم:** WPForms Lite
**SEO:** Rank Math SEO
**آنالیتیکس/عملکرد:** Site Kit by Google، Image Optimization/WebP
**سایر:** Novamira (کانکتور مدیریت سایت)

---

## 78. خروجی نهایی مورد انتظار

یک **Premium Fashion E-commerce Experience** برای Hecuba Style که Modern، Feminine، Minimal، Editorial، Mobile First، Conversion Focused، Product Centric، Trust Building، SEO Friendly، Fast، Scalable باشد و مهم‌تر از همه، قابلیت انتقال به WordPress + WooCommerce + Elementor را داشته باشد.

از طراحی‌های تکراری فروشگاه‌های ایرانی فاصله بگیر. از Benchmarkها الهام بگیر، اما کپی نکن.

---

## دستور اجرایی و فازبندی

قبل از شروع کدنویسی:
1. Architecture سایت مشخص شود
2. Design System تعریف شود
3. Componentها طراحی شوند
4. صفحات بر اساس Componentهای مشترک ساخته شوند
5. ابتدا Mobile UX، سپس Tablet و Desktop
6. تمام Interactionها تست شوند

اگر بین چند گزینه طراحی تردید بود، گزینه‌ای انتخاب شود که هم از نظر بصری قوی‌تر باشد و هم مسیر خرید را کوتاه‌تر و واضح‌تر کند.

### فازهای اجرا (تایید مرحله‌ای):

| فاز | محتوا |
|---|---|
| **فاز ۱** | Design System + Header/Footer + Homepage |
| **فاز ۲** | Shop/Category Page + Product Card + Filter |
| **فاز ۳** | Product Detail Page (گالری، رنگ/سایز، Size Finder) |
| **فاز ۴** | Cart + Checkout Flow + Wishlist |
| **فاز ۵** | صفحات باقی‌مانده (About, Contact, FAQ, Blog, Returns, حریم خصوصی) |

بعد از هر فاز، نتیجه ارائه و تا تایید، وارد فاز بعد نمی‌شویم.

خروجی نهایی باید یک Prototype واقعی، قابل تعامل، منسجم و Production-minded باشد؛ نه صرفاً یک Mockup زیبا.

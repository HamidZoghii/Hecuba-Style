# Hecuba Style — پروتوتایپ کامل (فاز ۱ تا ۵)

پروژه تکمیل شد ✅ — یک Prototype کامل، چندصفحه‌ای، Mobile-First و RTL برای Hecuba Style، آماده برای بررسی و انتقال به WordPress + WooCommerce + Elementor.

## ساختار پروژه (۱۷ صفحه)
```
hecuba/
├── index.html            صفحه اصلی
├── shop.html              فروشگاه (Search + Filter + Sort + Grid)
├── category.html          قالب دسته‌بندی (?cat=)
├── product.html            قالب محصول (?id=)
├── cart.html               سبد خرید
├── checkout.html           تسویه‌حساب (Guest Checkout)
├── order-success.html      تایید سفارش
├── wishlist.html           علاقه‌مندی‌های من
├── about.html               درباره ما
├── contact.html             تماس با ما (+ فرم UI)
├── faq.html                 سؤالات پرتکرار (گروه‌بندی‌شده)
├── blog.html                 وبلاگ (لیست مقالات نمونه)
├── returns.html              تعویض و مرجوعی
├── shipping.html             ارسال
├── size-guide.html           راهنمای سایز (مستقل از Modal داخل Product Page)
├── privacy.html               حریم خصوصی
├── terms.html                 قوانین و مقررات
├── css/style.css             استایل مشترک کل سایت (تک‌فایل، طبق بریف)
├── js/main.js                 جاوااسکریپت مشترک (تک‌فایل، طبق بریف)
├── fonts/                     فونت‌های Peyda و Manrope (WOFF2, لوکال)
└── README.md
```

## نحوه پیش‌نمایش
```
cd hecuba
python3 -m http.server 8080
```
سپس در مرورگر: `http://localhost:8080`

## فاز ۵ — نکات
- **۹ صفحه جدید** ساخته شد: About، Contact (+ فرم تماس UI-only، در وردپرس با WPForms جایگزین می‌شه)، FAQ (گروه‌بندی‌شده در ۴ دسته با Accordion مستقل)، Blog (لیست ۶ مقاله نمونه — صفحات تکی مقاله در scope این پروتوتایپ نیست)، Returns، Shipping، Size Guide (مستقل)، Privacy، Terms.
- تمام لینک‌های Footer/Header که در فازهای قبل به این صفحات اشاره می‌کردن، حالا زنده و کاری هستن — هیچ Dead Link‌ای باقی نمونده (با اسکریپت بررسی خودکار تایید شد).
- لینک «وبلاگ» و «درباره ما» به Footer («فروشگاه» column) در همه صفحات اضافه شد.

## خلاصه کل پروژه (چک‌لیست کیفیت طبق بریف، بخش ۷۶)
- ✅ در ۵ ثانیه اول مشخصه هکوبا چی می‌فروشه (Hero + Trust Strip)
- ✅ کاربر موبایل سریع وارد Shop می‌شه (ناوبری، CTA اصلی، Sticky CTAها)
- ✅ Product Card واضح: تصویر → نام → قیمت → Swatch → CTA
- ✅ انتخاب سایز ساده: Size Guide + Size Finder روی Product Page
- ✅ Trust Signals واضح و غیرشلوغ (Strip در Home، ردیف فشرده در Product/Cart)
- ✅ افزودن به سبد، مهم‌ترین CTA در همه‌جا
- ✅ Product Page برای خرید بهینه (Gallery, Variant Selection, Sticky CTA موبایل)
- ✅ سایت Adult/Explicit نشده — از Placeholder گرافیکی به‌جای عکس واقعی استفاده شد
- ✅ شلوغ/Marketplace نیست — Design System محدود و منسجم
- ✅ Layout با Elementor Container-based سازگاره؛ Header/Footer مستقل برای XPRO
- ✅ Product Card → قابل تبدیل به WooCommerce Loop؛ Product Page → Single Product structure
- ✅ Mobile UX در همه صفحات محور اصلی طراحی بوده، نه Desktop Responsive‌شده

## آماده‌سازی برای Elementor + WooCommerce
- Header و Footer به‌صورت Section/Container ساده و بدون تودرتویی غیرضروری نوشته شده‌اند → قابل بازسازی با **XPRO Theme Builder**.
- `.product-card` ساختار تخت (تصویر → نام → قیمت → Swatch → CTA) دارد → قابل تبدیل به **WooCommerce Product Loop Item**.
- تمام Sectionها Container-based و بدون Grid/Flex تودرتوی پیچیده هستن → قابل بازسازی با Elementor Pro Widgets.
- Swatch رنگ‌ها `data-attribute="color"` دارن → آماده اتصال به **Variation Swatches for WooCommerce**.
- دکمه Wishlist روی هر کارت `data-product-id` داره → آماده اتصال به **TI WooCommerce Wishlist**.
- فیلترهای Shop/Category به‌صورت Checkbox/Range مستقل هستن → آماده اتصال به **Filter Everything**.
- جایگاه OTP پیامکی در Checkout آماده اتصال به افزونه SMS.
- داده نمونه ۲۴ محصول در `js/main.js` (`window.HECUBA.PRODUCTS`) ساختاری کاملاً قابل‌توسعه به ۱۲۰+ محصول واقعی داره.

## محدودیت‌های شناخته‌شده (خارج از Scope این پروتوتایپ)
- صفحات تکی مقالات وبلاگ (فقط لیست مقالات ساخته شده).
- صفحه Account/ورود کاربر (چون Guest Checkout الزامی و اولویت اول بریف بود).
- صفحه اختصاصی Order Tracking (لینک آماده در Order Success، اما پیاده‌سازی کامل نشده).
- تصاویر Placeholder گرافیکی هستن، نه عکس واقعی — در انتقال به وردپرس با عکاسی واقعی Hecuba جایگزین می‌شن.
- پرداخت، پیامک OTP و فرم تماس، همگی UI/UX واقعی دارن ولی Backend واقعی ندارن (طبق دستور بریف، نیازی به آن‌ها در این مرحله نبود).

## نحوه پیش‌نمایش
برای جلوگیری از محدودیت CORS مرورگر روی فایل‌های لوکال، بهتر است با یک سرور ساده باز شود:
```
cd hecuba
python3 -m http.server 8080
```
سپس در مرورگر: `http://localhost:8080`

(باز کردن مستقیم `index.html` با دابل‌کلیک هم کار می‌کند چون همه فایل‌ها relative path هستند و از fetch استفاده نشده.)

## نکات مهم فاز ۱
- **Mobile First:** تمام استایل‌ها ابتدا برای موبایل نوشته شده و با `min-width` برای تبلت (768px) و دسکتاپ (1024px+) گسترش پیدا کرده‌اند.
- **RTL کامل:** `dir="rtl"` روی `<html>`، آیکون‌ها و Drawerها جهت‌دار (با `inset-inline-start/end`) پیاده‌سازی شده‌اند.
- **تصاویر Placeholder:** به‌جای عکس‌های واقعی، از بلوک‌های گرادیانی با پالت برند (`.ph-image`) استفاده شده تا در مرحله انتقال به وردپرس با عکاسی واقعی محصولات هکوبا جایگزین شوند — این تصمیم برای جلوگیری از هرگونه تصویر نامناسب یا ناهماهنگ با هویت برند گرفته شد.
- **داده محصول نمونه:** ۱۰ محصول نمونه در `js/main.js` (`window.HECUBA.PRODUCTS`) با ساختار کامل (رنگ، سایز، قیمت، تخفیف، موجودی، برچسب) تعریف شده — این ساختار مستقیماً قابل توسعه به ۱۲۰+ محصول و مپ به WooCommerce است.
- **Cart / Wishlist:** با LocalStorage کار می‌کنند و بعد از Refresh باقی می‌مانند.

## آماده‌سازی برای Elementor + WooCommerce
- Header و Footer به‌صورت Section/Container ساده و بدون تودرتویی غیرضروری نوشته شده‌اند → قابل بازسازی با **XPRO Theme Builder**.
- `.product-card` ساختار تخت (تصویر → نام → قیمت → Swatch → CTA) دارد → قابل تبدیل به **WooCommerce Product Loop Item**.
- تمام Sectionهای Homepage به‌صورت بلوک‌های مستقل و Container-based نوشته شده‌اند (بدون CSS Grid/Flex تو در توی پیچیده) → قابل بازسازی با Elementor Pro Widgets.
- کلاس‌های Swatch رنگ آماده اتصال به **Variation Swatches for WooCommerce** هستند (`data-product-id` روی دکمه Wishlist نیز برای **TI WooCommerce Wishlist** آماده شده).

## فازهای بعدی (در انتظار تایید)
| فاز | محتوا |
|---|---|
| فاز ۲ | Shop/Category Page + Product Card + Filter |
| فاز ۳ | Product Detail Page |
| فاز ۴ | Cart + Checkout + Wishlist |
| فاز ۵ | صفحات باقی‌مانده |

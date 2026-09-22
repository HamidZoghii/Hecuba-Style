# Hecuba Style

پروتوتایپ کامل یه فروشگاه اینترنتی برای Hecuba Style — چندصفحه‌ای، Mobile-First و RTL، با HTML/CSS/JS ساده (بدون فریم‌ورک)، آماده برای انتقال به WordPress + WooCommerce + Elementor.

## آماده‌سازی برای Elementor + WooCommerce

Header/Footer و باقی Sectionها Container-based و بدون تودرتوی پیچیده نوشته شدن، Product Card ساختار تخته و مستقیم قابل تبدیل به WooCommerce Loop Item است، Swatchهای رنگ و دکمه Wishlist هم data attribute آماده اتصال به افزونه‌های Variation Swatches و TI Wishlist دارن.

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
| Product Detail Page |
| فاز ۴ | Cart + Checkout + Wishlist |
| فاز ۵ | صفحات باقی‌مانده |

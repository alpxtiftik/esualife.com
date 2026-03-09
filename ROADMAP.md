# ESUA Life – Sıfırdan Yenileme (HTML + CSS + JS)

**Hedef:** Mevcut projedeki tüm metin, görsel, logo, renk ve bilgileri kullanarak sıfırdan, Bootstrap/jQuery olmadan, tam responsive ve modern bir site.

---

## Teknoloji

| Kullanılan | Kullanılmayan |
|------------|----------------|
| HTML5 (semantik) | Bootstrap |
| Tek CSS dosyası (değişkenler, Grid, Flexbox) | jQuery |
| Vanilla JS (menü, footer yılı) | Owl Carousel |
| Font Awesome (CDN, ikonlar) | Ağır carousel/slider |
| GTM (mevcut) | Eski inline stiller |

---

## Renkler ve tipografi (mevcut projeden)

- **Ana renk (lacivert):** `#00204a`
- **Vurgu (mavi):** `#00bbf0`
- **Yazı:** Roboto (Google Fonts)
- **Görseller:** Mevcut `images/` – yeni sitede `site/images/` (kopyala)

---

## Klasör yapısı

```
esualife.com/
├── site/                 ← YENİ SİTE (sıfırdan)
│   ├── index.html
│   ├── hakkimizda.html
│   ├── referanslarimiz.html
│   ├── urunlervecozumler.html
│   ├── nedenbiz.html
│   ├── iletisim.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/            ← Proje kökündeki images/ buraya kopyalanacak
├── ROADMAP.md             ← Bu dosya
└── (mevcut eski dosyalar deploy’a kadar kalabilir)
```

**Kurulum:** Proje kökündeki `images/` klasörünün içeriğini `site/images/` içine kopyala.

---

## Fazlar

### Phase 1: Yapı + tek CSS + JS
- [x] `site/` klasörü, `style.css` (değişkenler, reset, layout, header, nav, footer, bölümler, responsive)
- [x] `main.js` (mobil menü aç/kapa, footer’da yıl)

### Phase 2: Ana sayfa
- [x] Hero, Hakkımızda özeti, Referanslar grid, Ürünler & Çözümler, Neden Biz, iletişim CTA
- [x] Tüm metin ve görseller mevcut projeden

### Phase 3: İç sayfalar
- [x] Hakkımızda, Referanslarımız, Ürünler ve Çözümler, Neden Biz, İletişim
- [x] Ortak header/footer, aktif menü linki sayfaya göre

### Phase 4: Son rötuşlar
- [x] GTM tüm sayfalarda
- [x] Sitemap ve .htaccess `site/` içinde (deploy’da root’a gider)
- [x] Mobil menü ve breakpoint’ler CSS’te

---

## Deploy

Hazır olunca `site/` içeriğini sunucu root’a at. Eski `index.html` ve `css/`, `js/` dosyalarını yedekleyip kaldır; `site/images/` içeriğini sunucudaki `images/` ile değiştir veya aynı yapıyı koru.

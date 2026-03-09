# ESUA Life – Yeni site (HTML + CSS + JS)

Bu klasör, sıfırdan yazılmış responsive site. Bootstrap ve jQuery yok.

## Hemen yapman gereken

**Görseller:** Proje kökündeki `images/` klasörünün **içeriğini** buraya kopyala:

- Kaynak: `../images/` (bir üst klasördeki images)
- Hedef: `site/images/`

Örnek (terminal):
```bash
cp -r ../images/* images/
```
Veya dosya yöneticisinden `images` klasörünün içindeki tüm dosyaları `site/images/` içine kopyala.

## Sayfalar

- `index.html` – Ana sayfa
- `hakkimizda.html` – Hakkımızda
- `referanslarimiz.html` – Referanslar
- `urunlervecozumler.html` – Ürünler & Çözümler
- `nedenbiz.html` – Neden Biz
- `iletisim.html` – İletişim

## Deploy

`site/` klasörünün **içeriğini** (index.html, css/, js/, images/, .htaccess, sitemap.xml) sunucunun root dizinine at. Eski index.html, css/, js/ dosyalarını yedekleyip kaldır; görseller zaten `images/` ile güncellenmiş olacak.

## Yerel test

`site/index.html` dosyasını tarayıcıda aç veya basit bir HTTP sunucusu ile aç (örn. `python3 -m http.server 8080` ile proje kökünden, sonra `http://localhost:8080/site/`).

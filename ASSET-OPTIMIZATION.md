# Asset-Optimierungsguide für Portfolio Website

## 📁 Empfohlene Asset-Struktur

```
assets/
├── images/
│   ├── og-image.jpg              # Social Media Preview (1200x630px)
│   ├── favicon.ico               # Website Icon (32x32px)
│   ├── apple-touch-icon.png      # iOS App Icon (180x180px)
│   ├── profile/
│   │   ├── profile.jpg           # Profilbild (400x400px)
│   │   └── profile-lg.jpg        # Große Version (800x800px)
│   ├── projects/
│   │   ├── medical-spytool/
│   │   │   ├── hero.jpg          # Hero-Bild (1200x600px)
│   │   │   ├── thumbnail.jpg     # Vorschaubild (400x300px)
│   │   │   └── screenshots/      # Weitere Screenshots
│   │   └── [weitere-projekte]/
│   └── ui/
│       ├── placeholder.svg       # SVG Platzhalter
│       └── icons/               # Custom Icons
├── videos/
│   ├── medical-spytool-demo.mp4  # Komprimiert (H.264, max 10MB)
│   └── thumbnails/              # Video-Thumbnails
└── documents/
    ├── cv.pdf                   # Lebenslauf
    └── certificates/            # Zertifikate
```

## 🖼️ Bildoptimierung

### Empfohlene Formate:
- **JPEG**: Fotografien, komplexe Bilder
- **PNG**: Grafiken mit Transparenz, einfache Bilder
- **SVG**: Icons, einfache Grafiken
- **WebP**: Moderne Browser (Fallback zu JPEG/PNG)

### Empfohlene Größen:
- **Hero-Bilder**: 1200x600px (2:1 Verhältnis)
- **Projekt-Thumbnails**: 400x300px (4:3 Verhältnis)
- **Profilbilder**: 400x400px (1:1 Verhältnis)
- **Open Graph**: 1200x630px (1.91:1 Verhältnis)

### Komprimierung:
```bash
# Beispiel mit ImageMagick
convert original.jpg -quality 85 -resize 1200x600 optimized.jpg

# Beispiel mit ffmpeg für Videos
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 128k output.mp4
```

## 📱 Responsive Images

### HTML Implementation:
```html
<picture>
  <source media="(min-width: 768px)" srcset="assets/images/hero-lg.jpg">
  <source media="(min-width: 480px)" srcset="assets/images/hero-md.jpg">
  <img src="assets/images/hero-sm.jpg" alt="Beschreibung" loading="lazy">
</picture>
```

### CSS Implementation:
```css
.hero-image {
  background-image: url('assets/images/hero-sm.jpg');
}

@media (min-width: 768px) {
  .hero-image {
    background-image: url('assets/images/hero-lg.jpg');
  }
}
```

## 🎬 Video-Optimierung

### Empfohlene Einstellungen:
- **Format**: MP4 (H.264)
- **Auflösung**: Max 1920x1080
- **Bitrate**: 2-5 Mbps
- **Dateigröße**: Max 10-15MB

### HTML5 Video:
```html
<video controls poster="assets/videos/thumbnails/demo.jpg">
  <source src="assets/videos/demo.mp4" type="video/mp4">
  <source src="assets/videos/demo.webm" type="video/webm">
  <p>Ihr Browser unterstützt keine HTML5-Videos.</p>
</video>
```

## 🚀 Performance-Tipps

### Lazy Loading:
```html
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="Beschreibung">
```

### Preloading wichtiger Assets:
```html
<link rel="preload" as="image" href="assets/images/hero.jpg">
<link rel="preload" as="font" href="fonts/inter-400.woff2" crossorigin>
```

### CSS Sprites für Icons:
```css
.icon {
  background-image: url('assets/images/sprite.png');
  background-repeat: no-repeat;
}

.icon-home { background-position: 0 0; }
.icon-about { background-position: -32px 0; }
```

## 📊 Asset-Monitoring

### Tools für Optimierung:
- **TinyPNG/TinyJPG**: Online Bildkomprimierung
- **ImageOptim**: Mac-Tool für Bildoptimierung
- **Squoosh**: Google's Web-basierter Bildoptimierer
- **HandBrake**: Video-Komprimierung

### Performance-Checks:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse DevTools

## 🔄 Automatisierung

### Build-Script Beispiel:
```json
{
  "scripts": {
    "optimize-images": "imagemin assets/images/**/* --out-dir=dist/assets/images/",
    "optimize-videos": "ffmpeg -i assets/videos/*.mp4 -c:v libx264 -crf 28 dist/assets/videos/",
    "build": "npm run optimize-images && npm run optimize-videos"
  }
}
```

## 📝 Checkliste vor Deployment

- [ ] Alle Bilder unter 500KB
- [ ] Videos unter 15MB
- [ ] Alt-Texte für alle Bilder
- [ ] Responsive Versionen erstellt
- [ ] Lazy Loading implementiert
- [ ] Preloading für kritische Assets
- [ ] Favicons generiert
- [ ] Open Graph Bilder optimiert

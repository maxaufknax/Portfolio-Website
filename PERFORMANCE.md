# Performance Optimization Guide

## Bilder-Optimierung

### Empfohlene Formate und Größen:

#### Projekt-Screenshots:
- **Format:** WebP (Fallback: JPG)
- **Größe:** Max. 1920x1080px
- **Komprimierung:** 85% Qualität
- **Dateigröße:** < 200KB pro Bild

#### Profilfotos:
- **Format:** WebP (Fallback: JPG)
- **Größe:** 400x400px
- **Komprimierung:** 90% Qualität
- **Dateigröße:** < 50KB

#### Hero-Images:
- **Format:** WebP (Fallback: JPG)
- **Größe:** 1920x1080px
- **Komprimierung:** 80% Qualität
- **Dateigröße:** < 300KB

### HTML-Implementierung für optimierte Bilder:
```html
<picture>
    <source srcset="assets/image.webp" type="image/webp">
    <img src="assets/image.jpg" alt="Beschreibung" loading="lazy">
</picture>
```

## Video-Optimierung

### Für `.mp4` Dateien:
1. **Codec:** H.264 (AVC)
2. **Auflösung:** Max. 1920x1080 (1080p)
3. **Bitrate:** 2-4 Mbps für gute Qualität
4. **Framerate:** 30fps
5. **Audio:** AAC, 128kbps

### Optimierungs-Tools:
- **FFmpeg:** `ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k output.mp4`
- **Online:** Handbrake, CloudConvert

### Alternative: Video-Hosting
Für große Videos (>10MB):
- **YouTube/Vimeo:** Bessere Performance, weniger Bandbreite
- **Implementierung:** Eingebettete Player

## CSS/JS Minifizierung

### CSS-Optimierung:
- Entfernung ungenutzter Styles
- Kombination von Dateien
- Minifizierung

### JavaScript-Optimierung:
- Code-Splitting nach Seiten
- Lazy Loading für nicht-kritische Scripts
- Minifizierung

## Lazy Loading Implementation

### Bilder:
```html
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="...">
```

### JavaScript:
```javascript
// Intersection Observer für Lazy Loading
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});
```

## GitHub Pages Optimierung

### Cache-Headers:
GitHub Pages setzt automatisch Cache-Headers, aber Sie können:
1. Versionierung für Assets verwenden
2. Service Worker für erweiterte Cache-Kontrolle implementieren

### Komprimierung:
- GitHub Pages komprimiert automatisch
- Bereits minifizierte Dateien hochladen

## Performance-Monitoring

### Tools:
1. **Google PageSpeed Insights**
2. **Lighthouse** (in Chrome DevTools)
3. **GTmetrix**
4. **WebPageTest**

### Ziel-Metriken:
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Speed Index:** < 3s

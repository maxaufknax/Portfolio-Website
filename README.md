# Portfolio Website - Anpassungsleitfaden

## 🎯 Übersicht
Ihre Portfolio-Website ist jetzt bereit! Hier ist eine Anleitung, wie Sie sie personalisieren können.

## 📁 Projektstruktur

```
Portfolio Website/
├── index.html              # Startseite
├── about.html              # Über mich Seite
├── projects.html           # Projekte Übersicht
├── contact.html            # Kontakt Seite
├── qr-code.html           # QR-Code Generator
├── css/
│   ├── style.css          # Haupt-Stylesheet
│   ├── responsive.css     # Mobile Anpassungen
│   └── additional-styles.css
├── js/
│   ├── main.js           # Hauptfunktionalität
│   ├── projects.js       # Projekt-spezifische Features
│   └── qr-generator.js   # QR-Code Funktionalität
├── projects/
│   ├── medical-spytool.html     # Medical Spytool Details
│   ├── ai-discord-bot.html      # AI Discord Bot Details
│   ├── soulscribe.html          # SoulScribe Details
│   └── local-ai-assistant.html  # Lokaler KI-Assistent Details
├── images/
│   └── (Ihre Projektbilder hier)
└── assets/
    └── (Zusätzliche Dateien)
```

## ✏️ Anpassungen, die Sie vornehmen sollten

### 1. Persönliche Informationen
Ersetzen Sie `[Ihr Name]` in allen HTML-Dateien durch Ihren echten Namen:
- `index.html` (mehrere Stellen)
- `about.html`
- `projects.html`
- `contact.html`
- `qr-code.html`
- Alle Projekt-Detail-Seiten

### 2. Kontaktinformationen
In allen Dateien aktualisieren:
- E-Mail-Adresse: `your.email@example.com`
- LinkedIn-URL
- GitHub-URL
- Weitere Social Media Links

### 3. Portfolio-URL
In `js/qr-generator.js`:
- Zeile 4: `this.defaultUrl = 'https://your-portfolio.com';`

### 4. Bilder hinzufügen
Fügen Sie Ihre Bilder im `images/` Ordner hinzu:
- `profile.jpg` - Ihr Profilbild
- `medical-spytool-preview.jpg`
- `medical-spytool-dashboard.jpg`
- `medical-spytool-analysis.jpg`
- `medical-spytool-reports.jpg`
- `discord-bot-preview.jpg`
- `soulscribe-preview.jpg`
- `soulscribe-journal.jpg`
- `soulscribe-insights.jpg`
- `soulscribe-trends.jpg`
- `local-ai-preview.jpg`

### 5. Projekt-Links aktualisieren
In den Projekt-Detail-Seiten (`projects/` Ordner):
- GitHub-Links zu Ihren echten Repositories
- Live-Demo Links
- Download-Links

### 6. Projekt-Inhalte anpassen
Bearbeiten Sie die Projekt-Beschreibungen in:
- `projects/medical-spytool.html`
- `projects/ai-discord-bot.html`
- `projects/soulscribe.html`
- `projects/local-ai-assistant.html`

## 🎨 Design-Anpassungen

### Farben ändern
In `css/style.css`, Zeilen 6-15:
```css
--primary-color: #6366f1;      /* Hauptfarbe */
--secondary-color: #8b5cf6;    /* Sekundärfarbe */
--accent-color: #06b6d4;       /* Akzentfarbe */
```

### Schriftarten
Aktuelle Schriftarten:
- Hauptschrift: Inter (Google Fonts)
- Code-Schrift: JetBrains Mono

## 🚀 Deployment

### GitHub Pages
1. Repository auf GitHub erstellen
2. Dateien hochladen
3. In Repository Settings → Pages → Source: "Deploy from a branch"
4. Branch: main, Folder: / (root)

### Vercel
1. Vercel-Account erstellen
2. Repository verbinden
3. Automatisches Deployment

### Netlify
1. Netlify-Account erstellen
2. Drag & Drop aller Dateien
3. Custom Domain optional hinzufügen

## 🔧 Zusätzliche Features

### Weitere Projekte hinzufügen
1. Neue HTML-Datei in `projects/` erstellen
2. In `projects.html` zur Projektliste hinzufügen
3. Entsprechende Bilder hinzufügen

### Medienprojekte
Erstellen Sie separate Seiten für:
- Produktfotos
- Videos
- Werbeanzeigen
- Online-Stores

### QR-Code Anpassung
Der QR-Code wird automatisch mit Ihrer Domain generiert.
Nutzen Sie ihn für:
- Visitenkarten
- Bewerbungsunterlagen
- Networking-Events
- Präsentationen

## 📱 Mobile Optimierung

Die Website ist bereits vollständig responsive und mobile-optimiert:
- ✅ Touch-freundliche Navigation
- ✅ Optimierte Bildgrößen
- ✅ Lesbare Schriftgrößen
- ✅ Schnelle Ladezeiten

## 🎯 SEO-Optimierung

Bereits implementiert:
- ✅ Meta-Descriptions
- ✅ Semantische HTML-Struktur
- ✅ Alt-Tags für Bilder (bitte aktualisieren)
- ✅ Open Graph Meta-Tags (in Entwicklung)

## 📊 Analytics (Optional)

Für Besucherstatistiken können Sie hinzufügen:
- Google Analytics
- Plausible Analytics
- Simple Analytics

## 🔐 Datenschutz

Aktueller Status:
- ✅ Keine Cookies ohne Zustimmung
- ✅ Externe Ressourcen minimiert
- ✅ DSGVO-freundlich
- ⚠️ Datenschutzerklärung erstellen (empfohlen)

## 📞 Support

Bei Fragen oder Problemen:
1. Überprüfen Sie die Browser-Konsole auf Fehler
2. Stellen Sie sicher, dass alle Pfade korrekt sind
3. Testen Sie auf verschiedenen Geräten

Viel Erfolg mit Ihrem Portfolio! 🚀

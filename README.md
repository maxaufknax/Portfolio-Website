# Portfolio Website 2.0-Beta - Maximilian Paasch

## 🚀 Version 2.0-Beta
Diese ist die Beta-Version 2.0 der Portfolio-Website von Maximilian Paasch für uA. Bewerbungen.

## ⚠️ Beta-Status
Diese Version befindet sich noch in der Entwicklung. Einige Features sind möglicherweise noch nicht vollständig funktionsfähig.

## 🎯 Übersicht
Portfolio-Website mit Fokus auf AI, Web Development und Media Design Projekte.

## 🚀 Schnellstart

### Website starten
```bash
npm install
npm start
```
Die Website ist dann unter `http://localhost:3000` erreichbar.

### Entwicklungsmodus
```bash
npm run dev
```

## 📁 Projektstruktur (Version 2.0)

```
Portfolio-Website-2.0/
├── index.html                    # Startseite
├── about.html                    # Über mich Seite  
├── projects.html                 # Projekte Übersicht
├── contact.html                  # Kontakt Seite
├── qr-code.html                 # QR-Code Generator
├── thank-you.html               # Danke-Seite nach Kontakt
├── test-images.html             # Test-Seite für Bilder
├── package.json                 # Node.js Konfiguration
├── manifest.json                # Web App Manifest
├── css/
│   ├── style.css               # Haupt-CSS (importiert alle anderen)
│   ├── base.css                # Basis-Stile und CSS-Variablen
│   ├── layout.css              # Layout und Grid-Systeme
│   ├── components.css          # Wiederverwendbare Komponenten
│   ├── animations.css          # Animationen und Übergänge
│   ├── home.css                # Startseiten-spezifische Stile
│   ├── about.css               # Über-mich-Seiten-Stile
│   ├── projects_shared.css     # Gemeinsame Projekt-Stile
│   ├── contact.css             # Kontakt-Seiten-Stile
│   ├── qr_code.css            # QR-Code-Seiten-Stile
│   └── responsive.css          # Mobile und responsive Stile
├── js/
│   ├── main.js                 # Hauptfunktionalität
│   ├── projects.js             # Projekt-spezifische Features
│   ├── qr-generator.js         # QR-Code Generator
│   └── accessibility.js        # Barrierefreiheits-Features
├── projects/
│   ├── medical-spytool.html    # Medical Spytool Details
│   ├── ai-discord-bot.html     # AI Discord Bot Details
│   ├── soulscribe.html         # SoulScribe Details
│   └── local-ai-assistant.html # Lokaler KI-Assistent Details
├── assets/
│   ├── profile/
│   │   └── profile.jpg         # Profilbild
│   └── projects/
│       └── medical-spytool/    # Projekt-Assets
├── images/
│   ├── profile.jpg             # Haupt-Profilbild
│   └── *.svg                   # SVG-Icons und Thumbnails
└── data/
    └── projects.json           # Projekt-Daten (JSON)
```

## ✨ Neue Features in Version 2.0-Beta

### 🎨 Design-Verbesserungen
- Modulares CSS-System mit Import-Struktur
- Verbesserte Animationen und Übergänge  
- Responsive Design für alle Geräte
- Moderne Gradient-Effekte und Glasmorphismus

### 🚀 Technische Verbesserungen
- Live-Server für Entwicklung
- Barrierefreiheits-Features (WCAG 2.1)
- Optimierte Performance
- Progressive Web App (PWA) Features

### 📱 Interaktive Elemente
- QR-Code Generator für Portfolio-Sharing
- Animierte Navigationselemente
- Interaktive Projekt-Galerien
- Kontaktformular mit Validierung

## 🛠️ Entwicklung

### Lokale Entwicklung starten
```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktionsbereit starten
npm start
```

### Build-Prozess
```bash
# Projekt bauen (statische Website)
npm run build

# Deployment vorbereiten
npm run deploy
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

## 🔄 Beta-Status und bekannte Probleme

### ✅ Funktionsfähig
- ✅ Responsive Navigation
- ✅ Live-Server für Entwicklung
- ✅ QR-Code Generator
- ✅ Basis-Animationen
- ✅ Kontaktformular
- ✅ Projekt-Übersichtsseiten

### 🚧 In Bearbeitung
- 🚧 Video-Player für Projekt-Galerien
- 🚧 Erweiterte Animationen
- 🚧 Performance-Optimierungen
- 🚧 SEO-Meta-Tags Vervollständigung

### 📝 Geplante Features
- 📝 Blog-Funktionalität
- 📝 Multi-Language Support
- 📝 Dark/Light Theme Toggle
- 📝 Advanced PWA Features

## 🐛 Bekannte Probleme
- Einige Bilder-Pfade könnten noch angepasst werden müssen
- Video-Thumbnails sind noch Platzhalter
- Optimierung für sehr große Bildschirme steht noch aus

## 🔧 Fehlerbehebung

### Website startet nicht
```bash
# Node.js Module neu installieren
rm -rf node_modules package-lock.json
npm install
npm start
```

### CSS lädt nicht richtig
- Überprüfen Sie, ob alle CSS-Dateien im `/css` Ordner vorhanden sind
- Browser-Cache leeren (Strg+F5)

### JavaScript-Fehler
- Browser-Konsole öffnen (F12) für Details
- Sicherstellen, dass alle JS-Dateien im `/js` Ordner sind
````

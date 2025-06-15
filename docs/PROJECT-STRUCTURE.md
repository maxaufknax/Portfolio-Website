# Portfolio Website 2.0-Beta - Projektstruktur

## 📁 Ordnerstruktur (Organisiert)

```
Portfolio-Website-2.0/
├── 📄 README.md                     # Haupt-README (Sie lesen gerade hier)
├── 📄 package.json                  # Node.js Konfiguration
├── 📄 manifest.json                 # PWA Manifest
├── 📄 test-functionality.js         # Test-Script (derzeit leer)
├── 📄 test-images.html              # Bild-Test-Seite
│
├── 🌐 HTML-Seiten/
│   ├── index.html                   # 🏠 Startseite
│   ├── about.html                   # 👤 Über mich
│   ├── projects.html                # 💼 Projekte-Übersicht
│   ├── contact.html                 # 📧 Kontakt
│   ├── qr-code.html                # 📱 QR-Code Generator
│   └── thank-you.html              # ✅ Danke-Seite
│
├── 📁 projects/                     # Detailseiten der Projekte
│   ├── medical-spytool.html         # 🏥 Medical Spytool
│   ├── ai-discord-bot.html          # 🤖 AI Discord Bot
│   ├── soulscribe.html              # ✍️ SoulScribe
│   └── local-ai-assistant.html      # 🧠 Lokaler KI-Assistent
│
├── 🎨 css/                          # Modular aufgebaute Stylesheets
│   ├── style.css                    # 📋 Haupt-CSS (importiert alle anderen)
│   ├── base.css                     # 🔧 Basis-Stile und Variablen
│   ├── layout.css                   # 📐 Layout und Grid-Systeme
│   ├── components.css               # 🧩 Wiederverwendbare Komponenten
│   ├── animations.css               # ✨ Animationen und Übergänge
│   ├── home.css                     # 🏠 Startseiten-Stile
│   ├── about.css                    # 👤 Über-mich-Seiten-Stile
│   ├── projects_shared.css          # 💼 Gemeinsame Projekt-Stile
│   ├── contact.css                  # 📧 Kontakt-Seiten-Stile
│   ├── qr_code.css                 # 📱 QR-Code-Seiten-Stile
│   └── responsive.css               # 📱 Mobile und responsive Stile
│
├── ⚡ js/                           # JavaScript-Funktionalität
│   ├── main.js                      # 🔧 Hauptfunktionalität (781 Zeilen)
│   ├── projects.js                  # 💼 Projekt-Features
│   ├── qr-generator.js              # 📱 QR-Code Generator
│   └── accessibility.js             # ♿ Barrierefreiheits-Features (NEU!)
│
├── 🖼️ assets/                       # Projekt-Assets
│   ├── Bewerbungsfoto - Max Paasch.jpeg
│   ├── profile/
│   │   └── profile.jpg              # 👤 Profilbild
│   └── projects/
│       └── medical-spytool/         # 🏥 Medical Spytool Assets
│           ├── imag222.png
│           ├── imag223.png
│           ├── imag224.png
│           ├── Medical Spytool Local Showcase.mp4
│           ├── Medical Spytool Web Showcase.mp4
│           └── Screenshot*.png
│
├── 🖼️ images/                       # Öffentliche Bilder
│   ├── profile.jpg                  # 👤 Haupt-Profilbild
│   ├── medical-spytool-local-thumbnail.svg
│   ├── medical-spytool-video-thumbnail.svg
│   └── README.md                    # 📋 Bilder-Dokumentation
│
├── 📊 data/                         # JSON-Daten
│   └── projects.json                # 💼 Projekt-Daten
│
├── 📚 docs/                         # Dokumentation (NEU organisiert!)
│   └── development/                 # 🛠️ Entwicklungsdokumentation
│       ├── ASSET-OPTIMIZATION.md
│       ├── ASSET-STRUCTURE.md
│       ├── CSS-COMPLETION-REPORT.md
│       ├── DEPLOYMENT.md
│       ├── OPTIMIZATION-COMPLETE.md
│       ├── PERFORMANCE.md
│       └── QUICK-START.md
│
├── 🔧 scripts/                      # Automatisierungs-Scripts (NEU!)
│   ├── fix-floating-elements.ps1    # 🔧 PowerShell-Script
│   └── personalize.ps1              # 🎨 Personalisierungs-Script
│
└── 📦 node_modules/                 # NPM-Abhängigkeiten (automatisch)
    └── (live-server und Abhängigkeiten)
```

## 🏗️ Architektur-Prinzipien

### 📐 CSS-Architektur
- **Modular**: Jede CSS-Datei hat einen spezifischen Zweck
- **Import-basiert**: `style.css` importiert alle anderen CSS-Dateien
- **Responsive-First**: Mobile-first Design-Ansatz
- **CSS-Custom-Properties**: Konsistente Farben und Abstände

### ⚡ JavaScript-Architektur
- **Event-driven**: Alles basiert auf DOM-Events
- **Modular**: Funktionen sind in logische Bereiche unterteilt
- **Progressive Enhancement**: Funktioniert auch ohne JavaScript
- **Accessibility-First**: WCAG 2.1 Compliance

### 🗂️ Datei-Organisation
- **Trennung der Concerns**: HTML, CSS, JS getrennt
- **Logische Gruppierung**: Ähnliche Dateien in Ordnern
- **Klare Namenskonventionen**: Selbsterklärende Dateinamen
- **Dokumentation**: README-Dateien wo nötig

## 🚀 Live-Entwicklung

Die Website läuft aktuell mit Live-Server:
- **URL**: http://localhost:3000
- **Auto-Reload**: ✅ Bei Dateiänderungen
- **Mobile-Testing**: ✅ Responsive Design
- **Console-Debugging**: ✅ Browser-DevTools

## 📝 Nächste Schritte

1. **✅ Grundstruktur organisiert**
2. **✅ Dokumentation aktualisiert**  
3. **✅ Accessibility hinzugefügt**
4. **✅ Git-Repository gepusht**
5. **🚧 Performance-Tests durchführen**
6. **🚧 Cross-Browser-Testing**
7. **🚧 SEO-Optimierung vervollständigen**
8. **🚧 PWA-Features implementieren**

---
*Generiert am: 15. Juni 2025*
*Version: 2.0.0-beta*
*Branch: portfolio-website-2.0-(beta)*

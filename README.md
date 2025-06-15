# 🎨 Max Paasch - Portfolio Website

> **Live Website:** [https://maxaufknax.github.io/Portfolio-Website/](https://maxaufknax.github.io/Portfolio-Website/)

Eine moderne, professionelle Portfolio-Website für meine Bewerbung im Studiengang Mediendesigninformatik. Die Website präsentiert meine Projekte, Fähigkeiten und meinen beruflichen Werdegang mit einem eleganten, dunklen Design.

## 📋 Repository-Struktur & Branches

| Branch | Status | Beschreibung | Verwendung |
|--------|--------|--------------|------------|
| **`portfolio-website-1.5-official`** | 🟢 **PRODUKTIV** | Aktuelle stabile Version | Hauptentwicklung, GitHub Pages Quelle |
| **`gh-pages`** | 🚀 **DEPLOYMENT** | Automatisch generierte Build-Version | GitHub Pages Hosting |
| **`portfolio-website-2.0-(beta)`** | 🧪 **BETA** | Neue Features in Entwicklung | Experimentelle Features |
| **`portfolio-website-1.0-(stable)`** | 📚 **ARCHIV** | Erste stabile Version | Referenz/Backup |
| **`main`** | 🔄 **SYNC** | Standard-Branch | Mirror von 1.5-official |

### 🎯 Empfohlener Workflow:
- **Entwicklung:** `portfolio-website-1.5-official`
- **Live-Website:** Automatisch von `gh-pages` gehostet
- **Neue Features:** `portfolio-website-2.0-(beta)`
- **Produktions-Deployment:** Via GitHub Actions zu `gh-pages`

## 🆕 Version 1.5 Updates (Official Release)

### UI/UX Verbesserungen:
- **Redesigned Technology Tags** - Elegante glassmorphism-basierte Tags passend zum dunklen Design
- **Konsistente Version-Badges** - Einheitliches Design für alle Projekt-Versionen
- **Verbesserte Farbharmonie** - Gedämpfte, professionelle Farben statt bunter Tags
- **Optimierte Hover-Effekte** - Sanfte Animationen und Farbübergänge

### Content & Funktionalität:
- **BFD-MHH Projekt erweitert** - Button zur offiziellen MHH-Abteilungsseite hinzugefügt
- **Präzisere Projektbeschreibungen** - Automatisierungsprozesse und Makros korrekt dargestellt
- **E-Commerce Analytics** - Sales Performance Analytics korrekt betitelt (Mai 2024)
- **Office Automatisierung** - Spezifische Beschreibung für entwickelte Makros und Anleitungen

### Technische Verbesserungen:
- **Designsystem-Konsistenz** - Alle UI-Elemente folgen einheitlichen Designrichtlinien
- **Performance-Optimierung** - Verbesserte Ladezeiten und Animationen
- **Code-Aufräumung** - Sauberer, wartbarer Code mit konsistenter Struktur

## Über dieses Projekt

Diese Portfolio-Website wurde von mir entwickelt, um meine Fähigkeiten in der Webentwicklung und im Design zu demonstrieren. Sie dient als digitale Präsentation für meine Bewerbung um einen Studienplatz in Mediendesigninformatik.

## Features

- **Responsive Design**: Vollständig responsiv für alle Geräte
- **Interaktive Timeline**: Bildung, Berufsleben und Interessen in einer kompakten, erweiterbaren Ansicht
- **Projekt-Showcase**: Detaillierte Projektdarstellung mit Modals und Bildergalerien
- **Authentische Inhalte**: Persönliche, reflektierte Texte statt Marketing-Sprache
- **Bildergalerien**: Echte Arbeitsergebnisse - Poster, Analytics, Marketing-Materialien
- **Kontaktformular**: Funktionsfähiges Kontaktformular mit Backend-Integration
- **Moderne UI**: Glassmorphism-Effekte, Gradient-Texte und sanfte Animationen
- **Dark Theme**: Professionelles dunkles Design mit Neon-Akzenten
- **Click-to-Expand**: Bildergalerien mit Vollbild-Ansicht

## Tech Stack

### Frontend
- **React 18** mit TypeScript
- **Tailwind CSS** für Styling
- **Framer Motion** für Animationen
- **Wouter** für Routing
- **TanStack Query** für State Management
- **Shadcn/ui** für UI-Komponenten

### Backend
- **Express.js** mit TypeScript
- **In-Memory Storage** für Entwicklung
- **Drizzle ORM** für Datenbankschema
- **Zod** für Validierung

## 🚀 Quick Start

### Lokale Entwicklung
```bash
# Repository klonen
git clone https://github.com/maxaufknax/Portfolio-Website.git
cd Portfolio-Website

# Zum produktiven Branch wechseln
git checkout portfolio-website-1.5-official

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:5000` erreichbar.

### Production Build
```bash
# Build für GitHub Pages erstellen
npm run build

# Build testen
npm run preview
```

## 📁 Projektstruktur

```
Portfolio-Website/
├── client/                 # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/     # React-Komponenten
│   │   │   ├── about-section.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── project-modal.tsx
│   │   │   └── ...
│   │   ├── pages/         # Seiten-Komponenten
│   │   │   ├── home.tsx
│   │   │   ├── portfolio.tsx
│   │   │   └── contact.tsx
│   │   ├── lib/           # Utils & Datenschicht
│   │   │   ├── project-data.ts
│   │   │   └── api.ts
│   │   └── hooks/         # Custom React Hooks
│   ├── public/            # Statische Assets
│   │   ├── *.pdf          # Portfolio-PDFs
│   │   ├── *.mp4          # Projekt-Videos
│   │   ├── *.png          # Bilder & Screenshots
│   │   └── index.html
│   └── index.html         # HTML-Template
├── server/                # Backend (Express + TypeScript)
│   ├── index.ts           # Server-Einstiegspunkt
│   ├── routes.ts          # API-Routen
│   └── storage.ts         # Datenbank-Interface
├── shared/                # Geteilte TypeScript-Typen
│   └── schema.ts          # Drizzle-Schemas
├── vite.config.ts         # Vite-Konfiguration
├── tailwind.config.js     # Tailwind-Konfiguration
└── README.md              # Diese Datei
```

## Deployed Features

### Sections
- **Hero**: Einführung und Call-to-Action
- **About**: Persönliche Motivation und Werte
- **Timeline**: Interaktive Darstellung von Bildung, Berufsleben und Interessen
- **Projects**: Showcase von 6 Hauptprojekten
- **Contact**: Funktionsfähiges Kontaktformular

### Projekte
1. **Medical Spytool**: Wissenschaftliche Publikationssuche
2. **KI Discord Bot**: OpenAI/Anthropic-gestützter Discord Bot
3. **SoulScribe**: KI-gestütztes Reflexions-Tool
4. **Local AI Assistant**: Offline KI-Assistent
5. **Media Portfolio**: Professionelle Medienproduktion
6. **Interactive Experiences**: 3D-Web-Erlebnisse

## 🌐 Deployment & Hosting

### GitHub Pages (Aktuell Live)
Die Website wird automatisch auf GitHub Pages gehostet:
- **Live-URL:** https://maxaufknax.github.io/Portfolio-Website/
- **Source:** `gh-pages` Branch (automatisch generiert)
- **Trigger:** Push zu `portfolio-website-1.5-official`

### Deployment-Workflow
```bash
# 1. Auf produktivem Branch entwickeln
git checkout portfolio-website-1.5-official
# ... Änderungen machen ...

# 2. Build erstellen und zu gh-pages deployen
npm run build
git add -A && git commit -m "Deploy: Website updates"
git push origin portfolio-website-1.5-official

# 3. GitHub Pages aktualisiert automatisch
```

### Alternative Hosting-Optionen

#### Vercel
```bash
npm run build
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload dist/ Ordner zu Netlify
```

## 🔧 Entwicklung & Anpassung

### Branch-Management
```bash
# Zum Haupt-Entwicklungsbranch wechseln
git checkout portfolio-website-1.5-official

# Neue Features in Beta-Branch testen
git checkout portfolio-website-2.0-(beta)

# Archiv-Version ansehen
git checkout portfolio-website-1.0-(stable)
```

### Konfiguration anpassen

#### Farben ändern
Farben in `client/src/index.css` anpassen:
```css
:root {
  --primary: 239 84% 67%;     /* Indigo */
  --secondary: 256 65% 64%;   /* Purple */
  --accent: 198 93% 60%;      /* Cyan */
}
```

#### Projekte hinzufügen/bearbeiten
Projekte in `client/src/lib/project-data.ts` anpassen:
```typescript
export const projects: Project[] = [
  {
    id: "new-project",
    title: "Neues Projekt",
    description: "Beschreibung...",
    // ...weitere Konfiguration
  }
];
```

#### GitHub Pages Pfade
Für GitHub Pages deployment sind alle Asset-Pfade relativ konfiguriert:
```typescript
// ✅ Korrekt für GitHub Pages
imagePath: "./assets/project-image.png"

// ❌ Falsch - würde 404 verursachen
imagePath: "/assets/project-image.png"
```

## 📞 Support & Kontakt

### Repository-Management
- **Issues:** GitHub Issues für Bug-Reports und Feature-Requests
- **Pull Requests:** Contributions sind willkommen
- **Wiki:** Zusätzliche Dokumentation (falls vorhanden)

### Kontakt
- **GitHub:** [@maxaufknax](https://github.com/maxaufknax)
- **Website:** [Portfolio ansehen](https://maxaufknax.github.io/Portfolio-Website/)
- **LinkedIn:** [Max Paasch](https://linkedin.com/in/max-paasch) *(falls vorhanden)*

## 📊 Status & Metriken

### Version History
- **v1.5 (Official)** - Aktuelle Produktivversion
- **v1.3 (Stable)** - ~~Zwischenversion~~ *(deprecated)*
- **v1.0 (Stable)** - Erste Release
- **v2.0 (Beta)** - In Entwicklung

### Performance
- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

---

**⭐ Wenn dir dieses Portfolio gefällt, gib dem Repository einen Stern!**
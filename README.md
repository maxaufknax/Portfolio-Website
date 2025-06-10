# Max Paasch - Portfolio Website v1.5 (Official Release)

Eine moderne, professionelle Portfolio-Website für meine Bewerbung im Studiengang Mediendesigninformatik. Die Website präsentiert meine Projekte, Fähigkeiten und meinen beruflichen Werdegang mit einem eleganten, dunklen Design.

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

## Installation

1. Repository klonen:
```bash
git clone https://github.com/maxaufknax/portfolio
cd portfolio
```

2. Dependencies installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

Die Website ist dann unter `http://localhost:5000` erreichbar.

## Projektstruktur

```
├── client/                 # Frontend-Code
│   ├── src/
│   │   ├── components/     # React-Komponenten
│   │   ├── pages/         # Seiten-Komponenten
│   │   ├── lib/           # Utilities und Datenmodelle
│   │   └── hooks/         # Custom React Hooks
│   └── index.html         # HTML-Template
├── server/                # Backend-Code
│   ├── index.ts           # Server-Einstiegspunkt
│   ├── routes.ts          # API-Routen
│   ├── storage.ts         # Datenbank-Interface
│   └── vite.ts            # Vite-Integration
├── shared/                # Geteilte TypeScript-Typen
│   └── schema.ts          # Drizzle-Schemas
└── components.json        # Shadcn/ui-Konfiguration
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

## Deployment

Das Projekt ist für verschiedene Hosting-Plattformen optimiert:

### GitHub Pages (Aktuell aktiv)
Die Website wird automatisch über GitHub Actions deployed:
- **Live URL:** https://maxaufknax.github.io/Portfolio-Website/
- **Automatisches Deployment** bei Push zu `main` oder `portfolio-website-1.5-official`
- **Build-Status:** Verfügbar in GitHub Actions Tab

Setup GitHub Pages:
1. Repository Settings → Pages
2. Source: "GitHub Actions" wählen
3. Workflow wird automatisch erkannt

### Andere Hosting-Optionen

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

## Anpassung

### Farben ändern
Farben können in `client/src/index.css` angepasst werden:
```css
:root {
  --primary: 239 84% 67%;     /* Indigo */
  --secondary: 256 65% 64%;   /* Purple */
  --accent: 198 93% 60%;      /* Cyan */
}
```

### Projekte hinzufügen
Neue Projekte in `client/src/lib/project-data.ts` hinzufügen.

### Kontaktformular
Das Kontaktformular nutzt In-Memory Storage. Für Produktion sollte eine echte Datenbank konfiguriert werden.

## Browser-Unterstützung

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Lizenz

MIT License - siehe LICENSE-Datei für Details.

## Kontakt

Bei Fragen oder Feedback:
- Email: [Ihre Email]
- GitHub: [@maxaufknax](https://github.com/maxaufknax)
- LinkedIn: [Ihr LinkedIn Profil]
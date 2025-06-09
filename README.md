# Max Paasch - Portfolio Website v1.3 (Stable)

Eine moderne, professionelle Portfolio-Website für meine Bewerbung im Studiengang Mediendesigninformatik. Die Website präsentiert meine Projekte, Fähigkeiten und meinen beruflichen Werdegang mit einem eleganten, dunklen Design.

## 🆕 Version 1.3 Updates

### Neue Features:
- **Authentische "Über Max" Sektion** - Komplett neu geschrieben mit persönlichem, reflektiertem Inhalt
- **Bildergalerien** für BFD-MHH und E-Commerce Projekte mit echten Arbeitsergebnissen
- **Responsive Galerie-Layout** mit Click-to-Expand Funktionalität
- **Erweiterte Projekt-Modals** mit professionellen Asset-Präsentationen

### Content Updates:
- **Persönlichere Einführung** - Authentischer, nachdenklicher Schreibstil
- **Konkrete Projektergebnisse** - Echte Poster, Analytics, Marketing-Materialien
- **Neue Fokus-Bereiche** - Informatik & KI, Mediendesign, E-Commerce
- **Detaillierte Arbeitsbeispiele** - MHH Event-Poster, E-Commerce Performance-Daten

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

### Vercel (Empfohlen)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ Ordner zu Netlify
```

### GitHub Pages
1. Build erstellen: `npm run build`
2. Dist-Ordner zu gh-pages Branch pushen

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
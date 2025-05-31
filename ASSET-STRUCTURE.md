# Asset-Struktur für Portfolio Website

## Empfohlene Verzeichnisstruktur

### `assets/` - Projektspezifische Inhalte
```
assets/
├── projects/
│   ├── medical-spytool/
│   │   ├── images/
│   │   ├── videos/
│   │   └── documents/
│   ├── soulscribe/
│   └── ai-discord-bot/
├── personal/
│   ├── profile-photos/
│   └── cv/
└── shared/
    ├── icons/
    └── logos/
```

### `images/` - UI und Layout
```
images/
├── ui/
│   ├── placeholders/
│   ├── thumbnails/
│   └── backgrounds/
├── icons/
└── logos/
```

## Migration Plan

### Aktuelle Probleme:
1. Bilder sind zwischen `assets/` und `images/` verstreut
2. Keine klare Trennung zwischen Content und UI-Assets
3. Video-Thumbnails in `images/`, Videos in `assets/`

### Empfohlene Aktionen:
1. Projektbilder: `assets/` → `assets/projects/[project-name]/`
2. UI-Elemente: `images/ui/`
3. Persönliche Fotos: `assets/personal/`
4. Video-Thumbnails: zusammen mit Videos in `assets/projects/[project-name]/videos/`

## Vorteile:
- Bessere Organisation
- Einfachere Wartung
- Saubere Trennung von Content und Code
- GitHub Pages kompatibel

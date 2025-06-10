# GitHub Pages Deployment Guide

## Automatisches Deployment

Das Portfolio wird automatisch über GitHub Actions deployed, wenn Änderungen in die Branches `portfolio-website-1.5-official` oder `main` gepusht werden.

### Setup-Schritte im GitHub Repository:

1. **GitHub Pages aktivieren:**
   - Gehe zu Repository Settings → Pages
   - Source: "GitHub Actions" wählen
   - Der Workflow wird automatisch erkannt

2. **Deployment URL:**
   - Die Website wird verfügbar sein unter: `https://maxaufknax.github.io/Portfolio-Website/`
   - Nach dem ersten Deployment kann es 5-10 Minuten dauern

### Manuelles Deployment (falls nötig):

```bash
# Build für GitHub Pages erstellen
npm run build:github

# Oder für Windows
npm run build:github:win
```

### Wichtige Dateien:

- `.github/workflows/deploy-github-pages.yml` - GitHub Actions Workflow
- `client/public/.nojekyll` - Verhindert Jekyll-Processing
- `vite.config.ts` - Konfiguration mit korrekter base URL

### Troubleshooting:

**Problem: Assets laden nicht**
- Lösung: Überprüfe die `base` URL in `vite.config.ts`

**Problem: 404 Fehler**
- Lösung: Stelle sicher, dass GitHub Pages auf "GitHub Actions" eingestellt ist

**Problem: Workflow schlägt fehl**
- Lösung: Überprüfe die Actions-Logs im GitHub Repository

### Custom Domain (Optional):

Um eine eigene Domain zu verwenden:
1. Erstelle eine `CNAME` Datei in `client/public/` mit deiner Domain
2. Konfiguriere deine Domain-DNS-Einstellungen
3. Aktiviere die Domain in den GitHub Pages Einstellungen

## Deployment Status

✅ GitHub Actions Workflow konfiguriert
✅ Build-Process optimiert für statische Hosting
✅ Asset-Pfade korrekt konfiguriert
✅ Production-Build getestet

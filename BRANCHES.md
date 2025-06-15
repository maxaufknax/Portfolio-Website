# 🌿 Branch Management Guide

## 📋 Aktuelle Branch-Struktur

### 🟢 Produktive Branches

#### `portfolio-website-1.5-official`
- **Status:** Aktive Entwicklung & Produktion
- **Zweck:** Stabile, funktionsfähige Version
- **GitHub Pages:** Wird automatisch deployed
- **Letzte Updates:** GitHub Pages Optimierungen, Asset-Pfad-Korrekturen
- **Empfehlung:** Hauptbranch für alle Entwicklungsarbeiten

#### `gh-pages`
- **Status:** Automatisch generiert
- **Zweck:** GitHub Pages Deployment
- **Inhalt:** Kompilierte/gebaute Website-Dateien
- **⚠️ WARNUNG:** Niemals manuell bearbeiten!

### 🧪 Entwicklungs-Branches

#### `portfolio-website-2.0-(beta)`
- **Status:** Beta/Experimentell
- **Zweck:** Neue Features und größere Updates
- **Stabilität:** Möglicherweise instabil
- **Verwendung:** Feature-Testing vor Production-Release

### 📚 Archiv-Branches

#### `portfolio-website-1.0-(stable)`
- **Status:** Archiviert
- **Zweck:** Erste stabile Version als Referenz
- **Empfehlung:** Nur zur Referenz behalten, nicht entwickeln

#### ~~`portfolio-website-1.3-stable`~~
- **Status:** Veraltet/Überflüssig
- **Zweck:** Zwischenversion ohne besonderen Wert
- **Empfehlung:** Kann sicher gelöscht werden

#### `main`
- **Status:** Standard GitHub Branch
- **Aktuelle Rolle:** Nicht aktiv genutzt
- **Empfehlung:** Könnte als Mirror von 1.5-official dienen

## 🚀 Workflow-Empfehlungen

### Für tägliche Entwicklung:
```bash
git checkout portfolio-website-1.5-official
# Entwickeln, committen, pushen
```

### Für experimentelle Features:
```bash
git checkout portfolio-website-2.0-(beta)
# Neue Features testen
```

### Für Deployment:
```bash
# Automatisch bei Push zu 1.5-official
# Kein manueller Eingriff nötig
```

## 🧹 Aufräum-Empfehlungen

### ✅ Sicher entfernbar:
- `portfolio-website-1.3-stable` (nur Zwischenversion)

### ⚠️ Mit Vorsicht:
- `main` (Standard Branch - evtl. als Mirror nutzen)

### ❌ Niemals löschen:
- `portfolio-website-1.5-official` (Produktiv)
- `gh-pages` (Live Website)
- `portfolio-website-2.0-(beta)` (Entwicklung)
- `portfolio-website-1.0-(stable)` (Historisch wertvoll)

## 📝 Branch-Naming Convention

Für zukünftige Branches:
```
portfolio-website-[VERSION]-[STATUS]

Beispiele:
- portfolio-website-1.6-official
- portfolio-website-2.1-beta
- portfolio-website-3.0-experimental
```

Status-Optionen:
- `official` - Produktionsreif
- `stable` - Stabil, aber nicht aktuell
- `beta` - Feature-komplett, aber ungetestet
- `experimental` - Proof-of-concept
- `hotfix` - Bugfixes

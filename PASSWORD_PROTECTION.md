# Portfolio Passwort-Schutz

## Übersicht

Diese Portfolio-Website verfügt über eine elegante Passwort-Schutzfunktion, die verhindert, dass unbefugte Benutzer auf den Inhalt zugreifen können.

## Features

- 🔒 **Sicherer Passwort-Schutz** - Vollständige Website ist geschützt
- 🎨 **Elegantes Design** - Glassmorphism-Design mit Animationen
- ⏰ **Automatisches Ablaufen** - Authentifizierung läuft nach 24 Stunden ab
- 💾 **Persistente Anmeldung** - Bleibt auch nach Browser-Neustart angemeldet
- 🔧 **Einfache Konfiguration** - Über Umgebungsvariablen konfigurierbar
- 👤 **Admin-Panel** - Abmelde-Funktion für angemeldete Benutzer

## Konfiguration

### Passwort ändern

1. **Über Umgebungsvariable** (empfohlen):
   ```bash
   # In .env Datei
   VITE_PORTFOLIO_PASSWORD=ihr_sicheres_passwort
   ```

2. **Direkt im Code**:
   ```tsx
   // In App.tsx
   <PasswordProtection password="ihr_sicheres_passwort">
   ```

### Passwort-Schutz deaktivieren

Für Entwicklung oder Tests:

```bash
# In .env Datei
VITE_DEV_MODE=true
```

Dies deaktiviert den Passwort-Schutz automatisch im Entwicklungsmodus.

## Standard-Passwort

Das Passwort ist über Umgebungsvariablen konfiguriert und aus Sicherheitsgründen nicht in der Dokumentation angegeben.

⚠️ **Wichtig:** Das Passwort ist in der `.env` Datei definiert, die nicht im Repository gespeichert werden sollte!

## Verwendung

### Für Benutzer

1. Öffne die Website
2. Gib das Passwort ein
3. Klicke auf "Portfolio betreten"
4. Du bleibst 24 Stunden angemeldet

### Für Administratoren

- **Anmeldestatus prüfen:** Grünes Shield-Icon unten rechts zeigt Anmeldung
- **Abmelden:** Klicke auf das Logout-Icon im Admin-Panel
- **Passwort ändern:** Bearbeite die `.env` Datei und starte den Server neu

## Sicherheitshinweise

- Das Passwort wird nicht im Klartext in localStorage gespeichert
- Die Authentifizierung läuft automatisch nach 24 Stunden ab
- Bei jedem Browser-Neustart wird die Gültigkeit überprüft
- Das System ist gegen einfache Bypass-Versuche geschützt

## Technische Details

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS mit Glassmorphism
- **Icons:** Lucide React
- **Persistierung:** localStorage mit Zeitstempel
- **Sicherheit:** Client-side Passwort-Validierung

## Anpassung

Du kannst das Design und Verhalten der Passwort-Schutzfunktion in folgenden Dateien anpassen:

- `src/components/password-protection.tsx` - Haupt-Komponente
- `src/components/password-admin.tsx` - Admin-Panel
- `.env` - Konfiguration

## Deployment

Stelle sicher, dass du vor dem Deployment:

1. Ein sicheres Passwort in der `.env` Datei setzt
2. `VITE_DEV_MODE=false` für Produktion setzt
3. Die `.env` Datei nicht in das Repository eincheckst

## Support

Bei Fragen oder Problemen mit der Passwort-Schutzfunktion, überprüfe:

1. Die Browser-Konsole auf Fehlermeldungen
2. Die `.env` Datei auf korrekte Konfiguration
3. Ob alle Dependencies installiert sind (`npm install`)

# Styleguide - Design System

Dieses Dokument definiert das visuelle Designsystem des LuminaTec Webshops. Das Design basiert auf modernen Webstandards und wird strikt über **Vanilla CSS Custom Properties (Variablen)** gepflegt.

---

## 🎨 1. Farbschema (Color Palette)

```css
:root {
  /* Brand Accent Colors */
  --primary-color: #6366f1;       /* Electric Indigo (Hauptakzent) */
  --primary-hover: #4f46e5;       
  --secondary-color: #a855f7;     /* Vibrant Violet (Sekundärakzent / Badges) */
  --secondary-hover: #9333ea;

  /* Neutral Colors (Light Theme) */
  --bg-color: #f8fafc;            /* Slate 50 (Hintergrund) */
  --panel-bg: #ffffff;            /* Pure White (Karten & Formulare) */
  --border-color: #e2e8f0;        /* Slate 200 (Rahmen & Linien) */
  --text-main: #0f172a;           /* Slate 900 (Haupttext) */
  --text-muted: #64748b;          /* Slate 500 (Nebentext / Beschreibungen) */

  /* Semantic Status Colors */
  --success-color: #10b981;       /* Emerald (Erfolgsmeldungen / Toasts) */
  --error-color: #ef4444;         /* Red (Fehlermeldungen / Toasts) */
}
```

---

## ✍️ 2. Typografie & Skalierung

- **Überschriften-Schriftart**: `'Outfit', sans-serif` (Premium Google Font, modern und geometrisch)
- **Fliesstext-Schriftart**: `'Inter', sans-serif` (Hochgradig lesbar auf allen Displays)

```css
--font-headings: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Typografische Hierarchie */
--text-xs: 0.75rem;   /* 12px - Badges */
--text-sm: 0.875rem;  /* 14px - Nebentexte / Toasts */
--text-base: 1rem;    /* 16px - Standard Fliesstext */
--text-lg: 1.125rem;  /* 18px - Sub-Headings / Produktnamen */
--text-xl: 1.25rem;   /* 20px - H3 / Preise */
--text-2xl: 1.5rem;   /* 24px - H2 / Kategorien */
--text-3xl: 1.875rem; /* 30px - H1 / Seitentitel */
--text-4xl: 2.25rem;  /* 36px - Hero Banner (skaliert mobil auf 2rem) */
```

---

## 📐 3. Grid- & Flexbox-Layouts

Die Seitenstruktur ist responsiv über flexible CSS-Layout-Klassen aufgebaut.

- **`.grid-container`**: Für Produktkarten. Verwendet CSS Grid mit automatischer Spaltenanzahl:
  `display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--spacing-xl);`
- **`.responsive-split-grid`**: Für Produktdetailansichten. Teilt die Seite in 2 Spalten (Bild/Video links, Details/Bestellformular rechts) und bricht bei Mobilgeräten automatisch in eine Spalte um.
- **`.cart-layout-grid`**: Für den Warenkorb (`2fr 1fr`). Stellt Produkte links und die Bestellzusammenfassung rechts dar. Bricht bei `< 992px` in 1 Spalte um.
- **`.profile-layout-grid`**: Für das Kundenprofil (`1fr 2fr`). Zeigt Benutzerinfos links und Merkliste/Bestellungen rechts. Bricht bei `< 992px` in 1 Spalte um.

---

## ✨ 4. Visuelle Effekte & Micro-Interactions

- **Abrundungen (Border-Radius)**:
  - Kleine Elemente (Inputs, Buttons): `8px` (`--radius-md`)
  - Grosse Panels & Karten: `16px` (`--radius-lg`)
  - Pill-Buttons / Filter: `9999px` (`--radius-full`)
- **Schatten (Shadow-Elevation)**:
  - Standard-Karten: `--shadow-sm`
  - Hover-Zustand & Toasts: `--shadow-md`
- **Hover-Transitions**:
  - Tasten & Links verwenden `--transition-base: all 0.2s ease;` für weiche Übergänge.
  - Produktkarten verschieben sich beim Hovern leicht nach oben: `transform: translateY(-4px);`

---

## 🔔 5. Spezifische UI-Komponenten

### Toasts (Temporäre Benachrichtigungen)
- **Container**: `.toast-container` (fixiert unten rechts bei `bottom: 24px; right: 24px;`)
- **Toast**: `.toast` mit weichem Slide-In (`transform: translateY(0)`) und Fade-Out (`opacity: 0`).

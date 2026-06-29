# Dokumentation des KI-Einsatzes & Vergleich

Dieses Dokument dokumentiert den zielgerichteten Einsatz von künstlicher Intelligenz bei der Entwicklung des LuminaTec Webshops und vergleicht zwei verschiedene KI-Lösungen anhand selbst definierter Kriterien.

---

## 🤖 1. KI-Einsatz im Entwicklungsprozess

Künstliche Intelligenz wurde in allen Phasen des Software-Lebenszyklus als Assistenz verwendet:
1. **Konzeption & Struktur**: Schnelle Erstellung einer sitemap-konformen Seitenstruktur (Header, Main, Footer) und Entwurf von Markdown-Wireframes.
2. **Layout & Styling (Vanilla CSS)**: Generierung des CSS Grid- und Flexbox-Layouts, Formulierung von Media Queries für Mobilgeräte sowie Definition des CSS-Variablen-Designsystems.
3. **Logik & Kriterien (JavaScript & Web Storage)**: Implementierung des Warenkorb-State-Managements, der Registrierungs- und Anmeldesitzungen sowie der Bookmark-Merkliste in `localStorage`.
4. **UX-Optimierung**: Refactoring von störenden Browser-Alert-Popups hin zu einer eleganten, animierten Toast-Notification (unten rechts).

---

## 📊 2. Vergleich der KI-Tools

Die Entwicklung erfolgte unter Verwendung und dem Vergleich von zwei KI-Werkzeugen:
* **Tool A: Antigravity (Gemini-gestützt)** - Ein voll-agentischer KI-Programmierassistent, der direkt den Workspace bearbeiten und Dateien generieren kann.
* **Tool B: Copilot in VS Code (GitHub Copilot)** - Der integrierte Inline- und Chat-Assistent in Visual Studio Code für Code-Vervollständigung und Erklärungshilfen.

### Bewertungskriterien
Die Werkzeuge wurden anhand von 4 Kernkriterien bewertet (Skala 1 bis 5, wobei 5 hervorragend ist):
1. **Autonomie & Workspace-Integration**: Kann das Tool Änderungen selbstständig umsetzen und verwalten, anstatt nur Code-Snippets vorzuschlagen?
2. **Design- & Ästhetik-Verständnis**: Wie gut sind die Vorschläge für CSS-Farbpaletten, Typografie und responsive Layouts?
3. **State Management & JS-Komplexität**: Wie fehlerfrei werden logische Abläufe (wie z. B. Warenkorb-Verwaltung mit Web Storage) generiert?
4. **Erklärungsqualität & Lerneffekt**: Hilft das Tool dem Entwickler, den Code zu verstehen und sich weiterzubilden?

### Bewertungstabelle

| Kriterium | Tool A (Antigravity) | Tool B (Copilot in VS Code) | Bemerkungen |
| :--- | :---: | :---: | :--- |
| **Autonomie & Integration** | 5 / 5 | 3 / 5 | Antigravity erstellt und editiert Dateien direkt im Workspace, während Copilot Code-Blöcke vorschlägt, die manuell kopiert werden müssen. |
| **Design- & Ästhetik-Verständnis** | 5 / 5 | 3.5 / 5 | Antigravity schlug hervorragende Premium-Variablen (Indigo/Purple Palette) und eine massgeschneiderte Toast-Animation vor. Copilot neigt zu einfacheren Standard-Layouts. |
| **State Management & Logik** | 4.5 / 5 | 4 / 5 | Beide Tools generierten die Login/Logout-Logik sauber. Antigravity baute zusätzlich einen CORS-Sicherheits-Fallback für lokale Dateisystem-Tests ein. |
| **Erklärungsqualität** | 5 / 5 | 3.5 / 5 | Antigravity dokumentierte jeden Schritt ausführlich und verlinkte bearbeitete Dateien. Copilot ist schneller, aber oft knapper in seinen Erklärungen. |
| **Gesamtdurchschnitt** | **4.88 / 5** | **3.50 / 5** | |

---

## 📝 3. Reflexion & Lerneffekt
Der Einsatz beider Tools zeigt deutlich, wie sich die Rolle des Entwicklers verändert:
- **VS Code Copilot** eignet sich exzellent als "intelligentes Autocomplete", um schnell Zeilen zu vervollständigen (z.B. Schleifen, Standard-HTML-Tags).
- **Antigravity** agiert als echter "Pair Programmer", dem man übergeordnete Architektur-Ziele vorgeben kann (z.B. "Implementiere den Warenkorb und das Login-System"), welche er selbstständig strukturiert über mehrere Dateien hinweg umsetzt.
- **Lerneffekt**: Durch das Gegenlesen der generierten Toasts und Grid-Zuweisungen wurde das Verständnis für fortgeschrittene CSS-Selektoren (wie `attr(data-label)`) sowie die asynchrone Fehlerbehandlung in JavaScript signifikant gestärkt.

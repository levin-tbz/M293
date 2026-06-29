# Wireframes (Responsive Layouts)

Dieses Dokument zeigt die Layout-Skizzen für den LuminaTec Webshop für verschiedene Bildschirmgrössen (Desktop, Tablet, Mobile) inklusive der optionalen Seiten (Warenkorb & Profil).

---

## 🗺️ 1. Vollständige Sitemap

```
               [Webshop Startseite] (index.html)
             /          |           \            \
            /           |            \            \
   [Produkte]        [Kontakt]     [Warenkorb]   [Profil / Login]
  (shop.html)     (contact.html)   (cart.html)    (profile.html)
      |
[Produktdetail]
 (detail.html)
```

---

## 📐 2. Desktop-Wireframes (Min-width: 1024px)

### Startseite (`index.html`)

```
+---------------------------------------------------------------------------------+
| LuminaTec [Logo]            Home   Produkte   Kontakt   🛒 Warenkorb   Profil   |
+---------------------------------------------------------------------------------+
|                                                                                 |
|                        HERO: Die Zukunft Ihres Zuhauses                         |
|                                [Jetzt shoppen]                                  |
|                                                                                 |
+---------------------------------------------------------------------------------+
|                          Kategorien durchsuchen (4 Spalten)                      |
|  +----------------+  +----------------+  +----------------+  +----------------+ |
|  | Lighting       |  | Audio          |  | Security       |  | Power          | |
|  +----------------+  +----------------+  +----------------+  +----------------+ |
+---------------------------------------------------------------------------------+
|                          Beliebte Produkte (3 Spalten)                          |
|  +----------------+  +----------------+  +----------------+                     |
|  | Produkt 1      |  | Produkt 2      |  | Produkt 3      |                     |
|  +----------------+  +----------------+  +----------------+                     |
+---------------------------------------------------------------------------------+
| Footer: Info / Links / Newsletter Abo                                           |
+---------------------------------------------------------------------------------+
```

### Warenkorb (`cart.html`)

- Verwendet `.cart-layout-grid` (Zwei Spalten: links Produkte-Tabelle, rechts Lieferadresse & Kasse).

```
+---------------------------------------------------------------------------------+
| Header (Nav)                                                                    |
+---------------------------------------------------------------------------------+
|  WARENKORB (Zwei Spalten Layout)                                                |
|  +-------------------------------------+  +----------------------------------+  |
|  | Tabelle: Produkt | Preis | Menge    |  | Bestellübersicht                 |  |
|  | ----------------------------------- |  | Total: CHF XXX.XX                |  |
|  | Item A           | 89.90 | [ 1 ]    |  |                                  |  |
|  | Item B           | 45.00 | [ 2 ]    |  | Lieferadresse: [               ] |  |
|  +-------------------------------------+  | Zahlungsart:   [ Dropdown      ] |  |
|                                           | [Jetzt kostenpflichtig bestellen]|  |
|                                           +----------------------------------+  |
+---------------------------------------------------------------------------------+
```

### Profil / Login (`profile.html`)

- Verwendet `.profile-layout-grid` (Zwei Spalten: links Benutzerdaten, rechts Merkliste & Bestellungen).

```
+---------------------------------------------------------------------------------+
| Header (Nav)                                                                    |
+---------------------------------------------------------------------------------+
|  MEIN KONTO                                                                     |
|  +------------------------+  +------------------------------------------------+ |
|  | Benutzer-Card          |  | MEINE MERKLISTE (Grid-Karten)                  | |
|  | [Avatar]               |  | +-----------+  +-----------+  +-----------+    | |
|  | Name: John Doe         |  | | Produkt A |  | Produkt B |  | ...       |    | |
|  | Email: john@doe.com    |  | +-----------+  +-----------+  +-----------+    | |
|  |                        |  |                                                | |
|  | [Abmelden]             |  | BESTELLHISTORIE                                | |
|  +------------------------+  | - Bestellung #ORD-123456 (Status: Bearbeitung) | |
|                              +------------------------------------------------+ |
+---------------------------------------------------------------------------------+
```

---

## 📱 3. Mobile-Wireframes (Max-width: 767px)

Bei Mobilgeräten brechen alle Grid-Systeme und Spalten-Layouts automatisch in eine einzige vertikale Spalte um, um optimalen Lesekomfort zu garantieren.

### Header & Nav

- Das Logo und die Navigation zentrieren und stapeln sich untereinander:

```
+----------------------------+
|         LuminaTec          |
|  Home  Produkte  Kontakt   |
|     🛒 (Count)  Profil     |
+----------------------------+
```

### Mobile Warenkorb-Tabelle

- Die Tabelle wird über CSS (Media Queries) aufgelöst. Jede Reihe wird als eigene Karte dargestellt:

```
+----------------------------+
| +------------------------+ |
| | Produkt: Lumina Glow   | |
| | Preis: CHF 89.90       | |
| | Menge: [ 1 ]           | |
| | [Entfernen]            | |
| +------------------------+ |
|                            |
| +------------------------+ |
| | Bestellübersicht       | |
| | Total: CHF 89.90       | |
| | ...                    | |
| +------------------------+ |
+----------------------------+
```

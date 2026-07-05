# Handoff: Casa Hilltop Breeze — vacation-rental landing site

## Overview
Casa Hilltop Breeze is a small villa complex in Curaçao with **three private apartments** rented to holiday guests. This site is a single-page marketing + booking-funnel website: it sells the "slower, softer side of the Caribbean" vibe, shows the three apartments, and pushes guests to **book each apartment on Airbnb**. It also surfaces things to do nearby and the location. There is **no booking engine and no contact form** — all conversions are outbound links (Airbnb, phone, email, WhatsApp, Instagram).

The intent is to replace the friend's current Website Builder site (hosted on Namecheap) with a fast, static, good-looking page that can be hosted for free on **GitHub Pages**.

## About the Design Files
The files in this bundle are **design references authored in HTML** — a working prototype that shows the intended look, content, and behavior. They are **not meant to be shipped as-is**. The task is to **recreate this design in the target environment** using its established patterns:
- If the goal is a plain static GitHub Pages site, this can be implemented as a single semantic `index.html` + one CSS file (no build step needed) — this is the recommended path given the friend's needs.
- If a framework is preferred (React/Vite, Astro, Next static export, etc.), recreate the sections as components and deploy a static export.

The prototype is built as an "omelette" Design Component (`.dc.html`) that depends on a proprietary runtime, so **do not copy the `.dc.html` wrapper directly** — read it for layout/styling/copy and re-author clean HTML/CSS. The `image-slot.js` web component is a prototype-only drag-and-drop placeholder (see **Assets**); replace it with real `<img>` tags in production.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and responsive behavior are all specified below and should be reproduced closely. The only placeholders are the photographs themselves (the client will supply villa/pool/room/island photos).

## Layout system & responsiveness
- **Single scrolling page**, fixed top nav, anchor links jump to sections (`#apartments`, `#explore`, `#location`, `#contact`, `#top`). `scroll-behavior: smooth`; sections use `scroll-margin-top: 84px` to clear the fixed nav.
- **Content max-width:** `1200px`, centered (`margin: 0 auto`).
- **Section padding:** vertical `clamp(72px, 10vw, 128px)`, horizontal `clamp(20px, 5vw, 64px)`.
- **Fully fluid / no media queries.** Responsiveness is achieved with `clamp()` typography, `flex-wrap`, and `grid-template-columns: repeat(auto-fit, minmax(<min>, 1fr))`. Two-column blocks use `display:flex; flex-wrap:wrap` with children `flex: 1 1 <basis>` so they stack on narrow screens. You may convert these to explicit media-query breakpoints in production if preferred — the visual result should match.
- Body has `overflow-x: hidden`.

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Ink (text) | `#16323a` | Headings, body text base |
| Body text | `rgba(22,50,58,0.82)` | Paragraph copy |
| Muted body | `rgba(22,50,58,0.78)` | Card paragraph copy |
| Ivory background | `#f6f1e8` | Page background, default sections |
| Sea-mist background | `#e6f4f2` | Alternating sections (Apartments, Location) |
| Turtle primary | `#17869b` | Buttons, eyebrow labels, nav dot, links |
| Turtle primary hover | `#0f6577` | Button hover |
| Hero gradient | `linear-gradient(150deg, #47faf0 0%, #17869b 100%)` | Hero background (behind photo) |
| Footer gradient | `linear-gradient(160deg, #125562 0%, #0a3540 100%)` | Footer/contact background |
| Woodwork accent | `#7d634f` | Small bullet dots (about list, footer) |
| Hairline border | `rgba(22,50,58,0.10)` – `rgba(22,50,58,0.12)` | Card/nav borders |
| Card shadow | `0 18px 40px -28px rgba(22,50,58,0.4)` | Apartment cards, map |
| White | `#ffffff` | Cards |

> **Chosen palette: Turtle** (Skilpaddeblå + Turkis + Woodwork). The prototype also ships a live palette switcher and a `palette` prop with four alternates — `ocean`, `lagoon`, `palm`, `sky`. For production, implement the Turtle values above as the site colors. To keep colors swappable, define them as CSS custom properties on a wrapper element (`--primary`, `--primary-h`, `--bg`, `--nav-bg`, `--tint`, `--accent`, `--hero`, `--footer`) and reference them via `var(...)` throughout — that is how the prototype does it. Otherwise just inline the Turtle hex values and drop the switcher.
>
> Alternate palettes — primary / hero-bright / hero-deep / bg / tint / footer-deep / accent:
> - **Ocean** — `#1497ac` / `#23b4cb` / `#0d5562` / `#f2ede3` / `#d8edf0` / `#08323b` / `#c2a06b`
> - **Lagoon** — `#2b95a4` / `#7dc6d5` / `#1f7885` / `#f6f1e8` / `#e4f4f6` / `#0d3f47` / `#7d634f`
> - **Palm** — `#5f7f63` / `#b1c68d` / `#5f7f63` / `#f4efe4` / `#eaf0e0` / `#293c2e` / `#7d634f`
> - **Sky** — `#3a68ba` / `#86b9ed` / `#3a68ba` / `#f6f1e8` / `#e6eefb` / `#172c54` / `#7d634f`

### Typography
- **Display / headings:** `'Marcellus', serif` (Google Fonts), weight 400 only. Used for the wordmark, all `h1/h2/h3`, and the footer tagline.
- **Body / UI:** `'Mulish', system-ui, sans-serif` (Google Fonts), weights 400/500/600/700/800.
- Google Fonts link: `https://fonts.googleapis.com/css2?family=Marcellus&family=Mulish:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap`
- **Type scale:**
  - H1 (hero): `clamp(2.4rem, 6vw, 4.6rem)`, line-height `1.04`, Marcellus 400, white, `text-shadow: 0 2px 30px rgba(0,0,0,0.35)`
  - H2 (section): `clamp(2rem, 4vw, 3.1rem)`, line-height `1.1`, Marcellus 400, ink
  - H3 (card): `22–24px`, Marcellus 400, ink
  - Eyebrow label: `13px`, Mulish 700, `text-transform:uppercase`, `letter-spacing:0.24em`, turtle `#17869b`
  - Lead paragraph: `clamp(16px, 1.5vw, 18px)`, line-height `1.75`
  - Hero subhead: `clamp(17px, 2vw, 21px)`, line-height `1.5`, `rgba(255,255,255,0.92)`
  - Card body: `15px`, line-height `1.65`
  - Nav links: `14px`, weight 600
  - Wordmark: `clamp(15px, 2vw, 18px)`, Marcellus, `text-transform:uppercase`, `letter-spacing:0.16em`

### Radius & spacing
- Button radius: `999px` (pill). Button padding: primary CTA `16px 32px`; nav/card buttons `10px 20px` – `14px 22px`.
- Card / image / map radius: `16px`.
- Card image height: `240px` (apartments), `300px` (explore), about photo `clamp(340px, 42vw, 520px)`, map `clamp(320px, 40vw, 440px)`.
- Common gaps: section content gaps `clamp(20px, 2.5vw, 32px)`; two-col gaps `clamp(32px, 5vw, 72px)`.

## Screens / Views
This is one page; "views" below are its stacked sections in order.

### 1. Fixed Nav
- **Purpose:** persistent brand + jump links + primary booking CTA.
- **Layout:** `position:fixed; top/left/right:0; z-index:50`. `display:flex; align-items:center; justify-content:space-between`. Padding `14px clamp(20px,5vw,64px)`.
- **Background:** `rgba(246,241,232,0.85)` with `backdrop-filter: blur(14px)` and a `1px` bottom border `rgba(22,50,58,0.10)`.
- **Left:** wordmark link to `#top` — a `10px` turtle (`#17869b`) filled circle + "CASA HILLTOP BREEZE" in Marcellus uppercase, `letter-spacing:0.16em`, ink.
- **Right:** flex row, gap `clamp(14px,2.4vw,30px)` — three text links ("Apartments", "Explore", "Location"; `14px`/600/ink at `opacity:0.82`) + a pill **"Book now"** button (turtle bg `#17869b`, white text, hover `#0f6577`) linking to `#contact`.
- **Responsive note:** the nav is deliberately compact so it survives narrow widths in one row. If links crowd on very small phones, collapse the three text links (keep wordmark + "Book now") or move them into a menu — your call in production.

### 2. Hero
- **Purpose:** set the mood and drive the two primary actions.
- **Layout:** `position:relative; min-height:90vh; display:flex; align-items:flex-end; overflow:hidden`. Content anchored to the **bottom-left**.
- **Background stack (back to front):**
  1. Ocean gradient `linear-gradient(150deg,#47faf0 0%,#17869b 100%)`.
  2. **Hero photo** (full-bleed `cover`, `position:absolute; inset:0`). *Placeholder in prototype.*
  3. Scrim for legibility: `linear-gradient(180deg, rgba(11,30,34,0.30) 0%, rgba(11,30,34,0.05) 38%, rgba(11,30,34,0.45) 78%, rgba(11,30,34,0.72) 100%)`, `pointer-events:none`.
  4. Content wrapper (`max-width:1200px`, padding `0 clamp(20px,5vw,64px) clamp(56px,8vw,96px)`).
- **Content** (max-width `760px`, entrance animation `hbRise` — fade + 22px rise, `0.9s cubic-bezier(0.16,1,0.3,1)`):
  - Eyebrow: "Curaçao · Caribbean" — `13px`/700/uppercase/`letter-spacing:0.26em`, `rgba(255,255,255,0.9)`.
  - H1: **"Escape to a slower, softer side of the Caribbean"**.
  - Subhead (max-width `520px`): "Affordable luxury in a tropical hideaway — three private apartments, a shared pool and the quiet of the hilltop."
  - Buttons (flex, wrap, gap 14px): **"Book your stay"** (white bg, ink text, hover `#f6f1e8`) → `#apartments`; **"Explore the island"** (transparent, white text, `1px` border `rgba(255,255,255,0.65)`, hover `rgba(255,255,255,0.12)`) → `#explore`.

### 3. About
- **Purpose:** describe the villa, list headline amenities.
- **Layout:** sand background. `flex; flex-wrap:wrap; align-items:center; gap:clamp(36px,5vw,72px)`. Left text block `flex:1 1 360px`; right photo block `flex:1 1 360px; min-width:280px`.
- **Left:** eyebrow "About us"; H2 **"A quiet villa made for unwinding"**; paragraph (see Copy); then a **`grid` of amenities** (`repeat(auto-fit, minmax(190px,1fr))`, gap `18px 24px`, margin-top `38px`): each item = `8px` gold dot + `15px`/600 label. Items: "Three private apartments", "Shared swimming pool", "Wi-Fi included", "30 minutes from the airport".
- **Right:** rounded (`16px`) photo, height `clamp(340px,42vw,520px)`. *Placeholder.*

### 4. Apartments
- **Purpose:** the core conversion — three apartment cards, each linking out to its Airbnb listing.
- **Layout:** sea-mist background `#e6f4f2`. Intro block (max-width `680px`): eyebrow "The apartments", H2 **"Three ways to stay"**, intro paragraph. Then a **card grid** `repeat(auto-fit, minmax(290px,1fr))`, gap `clamp(20px,2.5vw,32px)`.
- **Card:** white, radius `16px`, `overflow:hidden`, `1px` border `rgba(22,50,58,0.10)`, shadow `0 18px 40px -28px rgba(22,50,58,0.4)`, `flex column`.
  - Top image (`width:100%; height:240px`, `cover`). *Placeholder.*
  - Body padding `26px 26px 28px`, `flex column`, `flex:1`.
  - H3 (Marcellus 24px) → one-line description (`15px`, `flex:1` to push the button down) → full-width pill **"Book on Airbnb →"** button (ocean bg, white, hover `#0f6577`), `target="_blank" rel="noopener"`.
- **Airbnb links (exact):**
  - Apartment 1 → `https://www.airbnb.no/rooms/1363809583174509139`
  - Apartment 2 → `https://www.airbnb.no/rooms/1364073318350442475`
  - Apartment 3 → `https://www.airbnb.no/rooms/1390231233709113623`
  - *(Original site used long share URLs with tracking params; these are the clean canonical room URLs. Keep `.no` or change to `.com` per the client's preference.)*

### 5. Explore (things to do nearby)
- **Purpose:** sell the island.
- **Layout:** sand background. Intro (max-width `680px`): eyebrow "Explore", H2 **"Beautiful beaches, colourful art and great food"**, paragraph "Your next Caribbean adventure is just around the corner." Then a **grid** `repeat(auto-fit, minmax(280px,1fr))`, gap `clamp(20px,2.5vw,32px)`.
- **Item (3):** rounded `16px` photo (`height:300px`, *placeholder*) above a title (Marcellus `22px`) + `15px` paragraph. No card chrome — image + text only, `flex column`, gap `18px`.
  - **Beaches:** "Jan Thiel and Mambo Beach are minutes away — calm turquoise water, easy snorkelling and laid-back beach clubs."
  - **Food & drink:** "From beachside grills to Willemstad's waterfront restaurants, the island eats and drinks remarkably well."
  - **Art & culture:** "Wander the colourful streets of Willemstad — a UNESCO-listed capital full of murals and Dutch-Caribbean colour."

### 6. Location
- **Purpose:** show where the villa is; link out to maps.
- **Layout:** sea-mist background `#e6f4f2`. `flex; flex-wrap:wrap; align-items:center; gap:clamp(32px,4vw,56px)`. Left text `flex:1 1 320px`; right map `flex:1 1 380px; min-width:300px`.
- **Left:** eyebrow "Location", H2 **"Where you'll be"**, paragraph: "Perfectly placed between Jan Thiel and Mambo Beach, in a calm and friendly neighbourhood — and just 30 minutes from Curaçao International Airport." Then pill button **"Open in Google Maps →"** → `https://www.google.com/maps/search/?api=1&query=Jan+Thiel+Curacao` (`target="_blank"`).
- **Right:** embedded map in a rounded (`16px`) bordered container with the card shadow. `<iframe>` src `https://www.google.com/maps?q=Jan%20Thiel%2C%20Cura%C3%A7ao&z=13&output=embed`, `height:clamp(320px,40vw,440px)`, `border:0`, `loading="lazy"`. *In production, consider a Leaflet/MapLibre embed or a precise pin once the exact address is known.*

### 7. Contact / Footer
- **Purpose:** all contact methods; closing brand note.
- **Layout:** footer gradient bg `linear-gradient(160deg,#125562 0%,#0a3540 100%)`, white text, padding `clamp(64px,9vw,110px) clamp(20px,5vw,64px) 36px`. Top: `flex; flex-wrap:wrap; justify-content:space-between; gap:clamp(36px,5vw,72px)`.
- **Left block** (`flex:1 1 320px; max-width:460px`): gold dot + "CASA HILLTOP BREEZE" wordmark; tagline in Marcellus `17px` `rgba(255,255,255,0.78)`: "A slower, softer side of the Caribbean — waiting for you on the hilltop."
- **Right block:** eyebrow "Get in touch" (`rgba(255,255,255,0.55)`), then a `flex column` (gap 14px) of links, each = `7px` gold dot + `17px`/600 white text, hover color `#7d634f`:
  - `+5999 565 1242` → `tel:+59995651242`
  - `contact@casa-hilltopbreeze.com` → `mailto:contact@casa-hilltopbreeze.com`
  - `WhatsApp` → `https://wa.me/59995651242`
  - `@hilltopbreeze_curacao` → `https://www.instagram.com/hilltopbreeze_curacao`
- **Bottom bar:** top border `rgba(255,255,255,0.14)`, `flex; justify-content:space-between`; "© 2026 Casa Hilltop Breeze" and "Curaçao · Caribbean", both `13px` `rgba(255,255,255,0.5)`.

## Interactions & Behavior
- **Nav / CTA links:** in-page anchors with smooth scroll; outbound links (Airbnb, maps, tel, mailto, WhatsApp, Instagram) open in a new tab with `rel="noopener"`.
- **Hover states:** primary buttons darken `#17869b → #0f6577`; white hero button `#fff → #f6f1e8`; outline hero button gains `rgba(255,255,255,0.12)` fill; footer links shift to woodwork `#7d634f`. Add `transition: 0.15–0.2s ease` on color/background in production (the prototype uses instant `style-hover`).
- **Hero entrance:** `@keyframes hbRise { from{opacity:0; transform:translateY(22px)} to{opacity:1; transform:translateY(0)} }`, `0.9s cubic-bezier(0.16,1,0.3,1) both`.
- **No JS required** beyond the map iframe and (in the prototype only) the image-slot component. The production site can be 100% static.
- **Responsive:** see layout system above — everything reflows via flex-wrap + auto-fit grids.

## State Management
None. Static marketing page — no client state, no data fetching, no forms. (The original site's contact form was intentionally dropped; contact is via the direct links above.)

## Assets
- **Photography (client to supply):** the prototype marks every photo with a drag-and-drop placeholder (`image-slot.js`, prototype-only). In production replace each with a real optimized `<img>` (WebP/AVIF, `loading="lazy"`, descriptive `alt`). Slots/photos needed:
  1. **Hero** — wide, atmospheric villa or pool shot (landscape, ≥2000px wide).
  2. **About** — villa exterior or pool (portrait/landscape ok).
  3. **Apartment 1 / 2 / 3** — one representative interior each (landscape, ~16:10).
  4. **Explore: Beaches / Food & drink / Art & culture** — island lifestyle shots (landscape).
  - Sources: client's own photos, the current Website Builder media library, or the Airbnb listings. *These could not be auto-extracted from the live site — they're JS-loaded from the builder/Airbnb CDNs.*
- **Fonts:** Marcellus + Mulish from Google Fonts (link above). Self-host for best GitHub Pages performance if desired.
- **Icons/logos:** none required — brand mark is the text wordmark + a colored dot. No SVG logos used.
- **Map:** Google Maps embed iframe (no API key needed for the basic `output=embed` URL).

## Files
- `Casa Hilltop Breeze.dc.html` — the full design prototype (read for layout/styling/copy; do **not** ship the `.dc.html` wrapper — it needs a proprietary runtime).
- `image-slot.js` — prototype-only drag-and-drop image placeholder web component. **Not for production**; replace placeholders with real `<img>` tags.

## Recommended production setup (given the client's goals)
- Single static `index.html` + `styles.css`, fonts self-hosted or via Google Fonts `<link>`, real `<img>` tags, deployed to **GitHub Pages** (or Netlify/Cloudflare Pages). No build step strictly required.
- Add `<title>`, `meta description`, Open Graph tags (title/description/`og:image` using the hero photo), and a favicon — the original site shipped with generic "Home" metadata.
- Fix the original typos already corrected in this design: "luxury" (was "luxuary"), "adventure" (was "adventour"), "Contact" (was "CONACT"), "phone number".

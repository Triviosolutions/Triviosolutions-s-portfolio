# TRIVIO SOLUTIONS — Website Blueprint
### Complete Content, Structure, Color & Asset Specification Document
*(v4 — Fully build-ready: all placeholders resolved with mock data, domain confirmed, single logo icon confirmed. Hand this file directly to the coding agent.)*

---

## IMPLEMENTATION BRIEF — READ FIRST (for AI coding agent / Google Antigravity)

This document is the single source of truth for building the Trivio Solutions website. Build the full site in one pass using the structure, copy, colors, and asset specs below. Every piece of content needed to build a complete, working site is included in this document — either as **provided assets** (real files), **build-in-code** (generate programmatically), or **mock data** (realistic placeholder content, clearly marked, to be swapped for real client content in a later pass). Nothing in this build should block on missing content — use the mock data given below exactly as written.

### Logo Asset — Provided
| File | Path | Use |
|---|---|---|
| Icon (final, only version in use) | `images/logo2.png` | **The** icon — use everywhere: header, footer, favicon source, OG image source, GitHub org avatar, social profile pictures. Has the lighter bottom-right segment, works on both light and dark backgrounds with best contrast. |

**Note:** `images/logo1.png` also exists in the assets folder from an earlier recolor pass but is **not used in this build** — `logo2.png` is the confirmed final icon. Keep `logo1.png` in the folder as an unused backup only; do not reference it anywhere in the site.

**Derived assets to generate from `logo2.png` during build:**
- `favicon.ico` / `favicon.svg` — cropped tight to the icon only
- `apple-touch-icon.png` (180x180)
- `og-image.png` (1200x630) — icon centered on `--color-primary` (`#101A30`) background, with "TRIVIO SOLUTIONS" wordmark added in code (Montserrat, `--color-text-inverse`)
- Header logo lockup — icon (`logo2.png`) + coded "TRIVIO SOLUTIONS" wordmark text next to it (text rendered in Montserrat via code, not baked into the image, so it stays crisp at all sizes and is easy to update)

**Important:** The wordmark "TRIVIO SOLUTIONS" text should be implemented as live HTML/CSS text (Montserrat font) next to the icon image everywhere on the site — not as a flattened image — for accessibility, SEO, and crisp rendering at all screen sizes. Only the triangle icon itself is an image asset.

### Domain & Site Metadata — Confirmed
- **Domain:** `triviosolutions.com`
- Site title tag: `Trivio Solutions — AI, Web & App Development Studio`
- Meta description: "Trivio Solutions is a research-driven software studio specializing in AI/ML engineering, web development, and mobile/desktop applications. 25+ projects delivered."
- OG/Twitter card image: generated `og-image.png` per above
- Canonical URLs throughout should use `https://triviosolutions.com/...`

### Mock Data — Use Exactly As Written (swap for real content in a later pass)

**Founders:**

| Field | Founder 1 | Founder 2 | Founder 3 |
|---|---|---|---|
| Name | Ahmed Raza | Bilal Hassan | Hamza Tariq |
| Role | Co-Founder — AI/ML Lead | Co-Founder — Web Development Lead | Co-Founder — App Development Lead |
| Bio | "Ahmed leads Trivio's AI/ML practice, specializing in RAG pipelines, model fine-tuning, and autonomous agent systems. He's worked across healthcare, fintech, and e-commerce applications of applied ML." | "Bilal architects Trivio's web platforms, from FastAPI/Django backends to React and Next.js frontends. He focuses on building systems that scale from MVP to production without rework." | "Hamza builds Trivio's mobile and desktop products, with a focus on cross-platform performance, offline-first architecture, and real-world reliability." |
| Skills tags | `RAG` `LLM Fine-tuning` `PyTorch` `Agent Systems` | `FastAPI` `React` `Next.js` `System Architecture` | `React Native` `Electron` `Offline-First` `Mobile Performance` |
| LinkedIn | `https://linkedin.com/in/ahmed-raza-trivio` *(mock)* | `https://linkedin.com/in/bilal-hassan-trivio` *(mock)* | `https://linkedin.com/in/hamza-tariq-trivio` *(mock)* |
| GitHub | `https://github.com/ahmedraza-trivio` *(mock)* | `https://github.com/bilalhassan-trivio` *(mock)* | `https://github.com/hamzatariq-trivio` *(mock)* |
| Photo | Placeholder initials avatar (see Section 5.3) | Placeholder initials avatar | Placeholder initials avatar |

**Contact & Company Info:**
- Business email: `hello@triviosolutions.com`
- Response-time note: "We typically respond within 24 hours."
- Location: `Faisalabad, Pakistan` *(mock — remote-first, available worldwide)*
- LinkedIn company page: `https://linkedin.com/company/trivio-solutions` *(mock)*
- GitHub organization: `https://github.com/trivio-solutions` *(mock)*
- Copyright line: `© 2026 Trivio Solutions. All rights reserved.`

**Case Studies:** Use the 6 sample case studies in Section 6.3 exactly as written, including their placeholder GitHub links (`github.com/trivio-solutions/[project-slug]`) — these are already structured as realistic mock data.

### Full Asset Inventory & Status

| Asset | Status | Action |
|---|---|---|
| Logo icon | ✅ Provided (`images/logo2.png`) | Use directly |
| Founder headshots (×3) | 🟡 Mock (initials avatar) | Render circular avatar in `--color-primary-2` with initials in `--color-text-inverse` — see Section 5.3 |
| Founder bios, names, roles, links | ✅ Mock data provided above | Use exactly as written |
| Case study screenshots (×25+) | 🟡 Mock (placeholder frame) | Use the 6 sample case studies in Section 6.3 with a neutral placeholder device-mockup graphic (solid `--color-neutral-bg` screen with a centered icon + "Screenshot coming soon" text) |
| Case study GitHub repo links | ✅ Mock data provided in Section 6.3 | Use exactly as written |
| Business email, phone, location | ✅ Mock data provided above | Use exactly as written |
| LinkedIn company page URL | ✅ Mock data provided above | Use exactly as written |
| GitHub organization URL | ✅ Mock data provided above | Use exactly as written |
| Domain name | ✅ Confirmed — `triviosolutions.com` | Use in all metadata/canonical URLs |
| Hero 3D scene | 🔧 Build in code | Build a CSS/SVG or lightweight Three.js/React Three Fiber abstract animated geometric shape (low-poly triangle/node network) using `--color-accent` → `--color-accent-alt` gradient. Can be swapped for a commissioned Spline scene later without changing layout. |
| 4× Service icons | 🔧 Build in code | Build as styled SVG icons (simple geometric/line style using `--color-accent`) rather than waiting on a 3D icon pack |
| Tech stack logos | 🔧 Build in code | Pull official SVG logos for FastAPI, Django, React, Next.js, Firebase, Supabase, Cloudflare, Vercel, Hugging Face, Railway from public brand assets/npm icon packages (e.g., `simple-icons`) |
| Icon set (bullets, values, nav) | 🔧 Build in code | Use `lucide-react` or `phosphor-icons` library — already covers every icon need in this doc |
| Architecture diagrams, process timeline | 🔧 Build in code | Build as SVG/CSS components per the color tokens in Section 0 |
| Device-frame mockup component | 🔧 Build in code | Build once as a reusable component (browser-chrome frame, phone frame, window frame variants) |

**This build is fully unblocked.** Every content field required across the site is either a provided file, confirmed data, mock data, or a build-in-code component — the agent can build the entire site end-to-end in a single pass with no missing inputs. Founder headshots and real case-study screenshots/details are the only two items intended to be swapped later — everything else in this document (including domain, contact info, and social links) can be treated as final unless the client says otherwise.

---

## 0. COLOR SYSTEM (FINALIZED)

**Direction chosen:** *Navy-Indigo with Signal Accent* — an evolved, research/AI-grade version of the existing logo's navy, kept close enough to avoid a full rebrand, but sharpened with a single accent color so the site doesn't blend into the "safe blue SaaS wallpaper" that most competitors use.

### 0.1 Core Palette & Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` (Navy-Indigo, dark) | `#101A30` | Main dark backgrounds (hero, footer, dark sections), primary text on light backgrounds when darker than pure black is wanted |
| `--color-primary-2` (Deep Navy, mid) | `#1B2A4A` | Secondary dark surfaces — card backgrounds on dark sections, header/nav background |
| `--color-accent` (Signal Indigo) | `#4C5FFF` | Primary CTA buttons, links, active states, icon accents, stat numbers, hover states |
| `--color-accent-alt` (Signal Cyan — optional secondary accent) | `#00C2FF` | Used sparingly for gradient pairing with Signal Indigo (e.g., hero 3D asset gradient, chart/diagram highlights) — never as a standalone primary action color |
| `--color-neutral-bg` (Off-White) | `#F5F6F8` | Main light-mode page background (not pure white — matches the soft off-white already visible in your logo file) |
| `--color-neutral-surface` (Card White) | `#FFFFFF` | Cards, form fields, elevated surfaces sitting on `--color-neutral-bg` |
| `--color-neutral-border` (Cool Grey) | `#E2E5EB` | Borders, dividers, input outlines |
| `--color-text-primary` (Near-Black Navy) | `#12141C` | Body text on light backgrounds — softer than pure `#000` |
| `--color-text-secondary` (Slate Grey) | `#5B6478` | Subtext, captions, metadata labels (e.g., case study tags, dates) |
| `--color-text-inverse` (Off-White text) | `#F5F6F8` | Text on dark backgrounds (hero, footer, dark CTA bands) |
| `--color-success` | `#2FBF71` | Form success states, "delivered" status tags — semantic only, not decorative |
| `--color-error` | `#F0473E` | Form validation errors — semantic only |

**Rule of thumb (60/30/10):** 60% `--color-neutral-bg`/white, 30% `--color-primary`/`--color-primary-2` (dark sections, header, footer), 10% `--color-accent` (buttons, links, highlights only). The accent should always feel rare and intentional — never used for large fills.

### 0.2 Logo Icon — Finalized
Icon has been recolored and finalized (see Implementation Brief above for file paths). Primary icon: `images/logo2.png`.
- Top triangle (peak): gradient from deep navy → signal indigo, brightest point at the tip
- Bottom-left triangle: solid deep navy
- Bottom-right triangle: lighter navy-slate, giving the "third shape" visible contrast on both light and dark backgrounds
- Wordmark "TRIVIO": coded as live text, `--color-primary` (`#101A30`) on light backgrounds / `--color-text-inverse` on dark backgrounds — never baked into the logo image
- "SOLUTIONS" sub-text: coded as live text, `--color-text-secondary` (`#5B6478`)

### 0.3 Where Each Color Lives (applied across the site)
- **Header/Nav:** `--color-neutral-bg` background (light mode default) with `--color-primary` logo/text; nav-link hover uses `--color-accent`
- **Hero sections (Home + Service pages):** `--color-primary` full dark background, `--color-text-inverse` headline text, 3D asset rendered with an indigo-to-cyan gradient (`--color-accent` → `--color-accent-alt`) so the hero visual and the accent system are the same gradient language
- **Buttons (primary):** `--color-accent` fill, `--color-text-inverse` label, darkens ~10% on hover
- **Buttons (secondary/outline):** transparent fill, `--color-accent` border + text
- **Cards (services, case studies, blog):** `--color-neutral-surface` background, `--color-neutral-border` 1px border, subtle shadow; tag pills use `--color-accent` at 10–15% opacity as background with `--color-accent` text
- **Stats/numbers:** `--color-accent` (or `--color-primary` if on a dark background, to keep accent rare)
- **Footer:** `--color-primary` background, `--color-text-inverse` text, `--color-accent` for link hover only
- **Case study "Tech Stack" tags:** `--color-neutral-bg` pill with `--color-text-secondary` text (kept neutral so tags don't compete visually with GitHub/CTA buttons)
- **GitHub repo buttons (case studies):** distinct treatment from primary CTA — dark `--color-primary` fill with `--color-text-inverse` text and a GitHub icon, so it visually reads as "external/code" rather than "contact us"
- **Architecture diagrams:** `--color-primary`/`--color-primary-2` boxes, `--color-accent` connecting arrows/data-flow lines, `--color-neutral-bg` diagram background

---

## 1. TYPOGRAPHY SYSTEM

| Role | Font | Notes |
|---|---|---|
| Primary typeface | **Montserrat** | Already brand font (used in logo wordmark) |
| Fallback stack | `Montserrat, "General Sans", "Sora", "Space Grotesk", sans-serif` | Use one of these as backup web-safe geometric sans if Montserrat variable weights feel too "default" |
| Headings (H1–H2) | Montserrat **SemiBold/Bold (600–700)**, tight letter-spacing (-1% to -2%) | Large, confident, matches the sharp triangular logo mark |
| Sub-headings (H3–H4) | Montserrat Medium (500) | |
| Body text | Montserrat Regular (400), 16–18px, 1.5–1.6 line height | Geometric sans can feel cold in long paragraphs — keep line-height generous |
| Buttons / Labels / Tags | Montserrat SemiBold (600), uppercase or small-caps, letter-spacing +2–4% | Gives a "technical/engineering" feel, matches AI-agency positioning |
| Numbers / Stats (e.g. "25+", "40%") | Montserrat Bold or a monospace pairing (e.g. **JetBrains Mono** / **Space Mono**) for a "data/engineering" accent | Optional but recommended — a monospace accent font for stats and code-like tags reinforces the technical/research identity |

**Design logic:** Since the logo is a sharp geometric triangle mark, the typography should feel equally geometric and confident — Montserrat's straight terminals and near-perfect circles match that. A monospace accent (even just for stat numbers, tech-stack tags, and case-study meta labels) reinforces "we are engineers/researchers," which differentiates you from generic dev agencies.

---

## 2. SITEMAP

```
1. Home
2. Services
   2.1 AI / ML / RAG & Agent Development
   2.2 Web Development
   2.3 App Development (Mobile)
   2.4 Desktop Applications
3. Case Studies (index/grid) → Individual Case Study pages
4. About Us
5. Process / How We Work
6. Tech Stack (can be merged into About or Process — noted below)
7. Blog / Insights (Phase 2, optional at launch)
8. Contact
```

Navbar (recommended, 5 items max to stay clean):
`Home | Services ▾ | Case Studies | About | Contact`
(Process content can live inside "About" as a section rather than a separate nav item — keeps nav lean.)

---

## 3. HOME PAGE

### 3.1 Section: Hero
**Purpose:** First 3 seconds must say "AI-driven, research-based software company," not "generic dev shop."

**Copy (draft):**
- Eyebrow tag: `RESEARCH-DRIVEN SOFTWARE STUDIO`
- H1: **"We turn AI research into products that ship."**
  - Alt option: "From research paper to production — AI, Web & App development under one roof."
- Subtext: "Trivio Solutions is a software studio built around three specializations — AI/ML engineering, web development, and mobile/desktop applications. We don't just implement; we research, prototype, and deploy."
- CTA 1 (primary): `View Case Studies`
- CTA 2 (secondary, outline): `Start a Project`

**Asset spec:**
- **Type:** 3D abstract hero visual (Spline scene recommended, per earlier discussion)
- **Style:** Low-poly / wireframe geometric object echoing the logo's triangle motif — e.g., an abstract faceted triangular/pyramid form built from smaller connected nodes (visually implies "neural network" + brand mark simultaneously)
- **Behavior:** Slow auto-rotation or subtle parallax on mouse move; must have a static fallback PNG/WebP for mobile (no heavy 3D on mobile — replace with a pre-rendered still image or lightweight Lottie loop)
- **Placement:** Right half of hero on desktop (text left, visual right) or full-bleed background at low opacity behind centered text
- **File formats needed:** `.splinecode` / embed link (desktop), `.webp` fallback (mobile/low-power), optimized under 500KB for the static version
- **For this build:** No Spline asset provided yet — build this as a coded animated SVG/CSS or lightweight Three.js abstract low-poly shape (per Implementation Brief) using the `--color-accent` → `--color-accent-alt` gradient, so the hero works fully in this first pass. Swappable for a commissioned Spline scene later.
- **Color treatment:** Section background = `--color-primary` (`#101A30`); H1/subtext = `--color-text-inverse`; CTA 1 = `--color-accent` filled button; CTA 2 = `--color-accent` outline button; 3D asset rendered as an indigo-to-cyan gradient (`--color-accent` → `--color-accent-alt`) on a dark/glass material so it glows against the navy background

### 3.2 Section: Trust / Stats Bar
Directly under hero — thin horizontal strip.

**Copy:**
- `25+` Case Studies Delivered
- `3` Specialized Founders
- `10+` Technologies in Active Use
- `[X]+` Industries Served *(fill once you tally your case studies by industry)*

**Asset spec:** No imagery — pure typography, use the monospace/bold number treatment described in Section 1. Also apply --color-accent for the number itself and --color-text-secondary for the label beneath it. Optional: thin animated counter (numbers count up on scroll-into-view).

### 3.3 Section: Services Overview
4 cards, equal width, grid layout (2x2 on tablet, 1x4 row on desktop).

**Card 1 — AI / ML / RAG & Agents**
- Icon/asset: 3D isometric icon — abstract brain/network node cluster, OR a simplified geometric icon in the style of a "connected nodes" graph (3–5 nodes, connecting lines)
- Copy: "Custom ML/DL models, RAG pipelines, and autonomous agent systems — built and deployed end-to-end."

**Card 2 — Web Development**
- Icon/asset: 3D isometric icon — browser window / layered UI panels floating at slight angle
- Copy: "Scalable web platforms with React, Next.js, FastAPI, and Django — from MVP to production."

**Card 3 — App Development**
- Icon/asset: 3D isometric icon — floating mobile device mockup (angled, minimal)
- Copy: "Cross-platform and native mobile apps designed for performance and real-world use."

**Card 4 — Desktop Applications**
- Icon/asset: 3D isometric icon — floating desktop window/monitor shape
- Copy: "Robust desktop software for teams that need offline-first, high-performance tools."

**Asset spec (all 4 icons):** Consistent 3D isometric icon set (same lighting angle, same material style — matte/frosted glass look works well with geometric branding). Source options: commission a matching 4-icon set (recommended for brand consistency) or use a paid isometric 3D icon pack (e.g., 3dicons.co, Icons8 3D pack) and re-color to match brand later. Size: 200x200px minimum, transparent background, `.webp`/`.png`.

**Color treatment:** Section background = `--color-neutral-bg`; cards = `--color-neutral-surface` with `--color-neutral-border` 1px border; icons rendered in the same indigo-to-cyan gradient (`--color-accent` → `--color-accent-alt`) as the hero 3D asset, so all 3D elements site-wide share one gradient identity; card title text = `--color-text-primary`; body copy = `--color-text-secondary`; "Learn more" link = `--color-accent`.

### 3.4 Section: Featured Case Studies
3–4 best case studies pulled from the full list (curated, not all 25+).

**Layout:** Horizontal scroll cards or 2x2 grid. Each card:
- Project thumbnail/screenshot
- Industry tag (e.g. `HEALTHCARE`, `FINTECH`)
- Title
- 1-line result statement
- "View Case Study →" link

**Asset spec:** Each case study needs a **hero screenshot or mockup** — see Section 6 (Case Studies) for full spec. For homepage cards specifically: 16:9 ratio, device-frame mockup (browser chrome or phone frame) preferred over raw screenshot — looks more polished in a small card.

**Color treatment:** Card background = `--color-neutral-surface`; industry tag pill = `--color-accent` at 10–15% opacity fill with `--color-accent` text; "View Case Study →" link = `--color-accent`, arrow slides right on hover.

### 3.5 Section: Tech Stack Strip
Logo marquee (auto-scrolling or static grid) of technologies used.

**Logos needed:** FastAPI, Django, React, Next.js, Firebase, Supabase, Cloudflare, Vercel, Hugging Face, Railway, Python, TensorFlow/PyTorch (if used), Docker (if used)

**Asset spec:** Official monochrome/greyscale SVG logos (most of these brands provide official brand-kit SVGs — pull from their brand pages, not screenshots). Keep them uniform height (~32–40px), greyscale by default with color-on-hover as a nice interaction detail. Infinite horizontal scroll (marquee) works well here and is a common pattern in top dev-agency sites.

**Color treatment:** Section background = `--color-primary-2` (a distinct darker band to break up the page rhythm between two light sections); logos rendered in `--color-neutral-bg` (near-white monochrome) at rest, switching to full original brand color on hover.

### 3.6 Section: Meet the Founders (teaser)
Short version — full bios live on About page.

**Copy structure per founder:**
- Photo (placeholder initials avatar for now — see Implementation Brief mock data)
- Name (Ahmed Raza / Bilal Hassan / Hamza Tariq)
- Role tag: `AI/ML Lead` / `Web Development Lead` / `App Development Lead`
- 1-line specialization
- LinkedIn icon link (mock URLs from Implementation Brief)

**Asset spec:** Professional headshots, consistent style (same background treatment/crop ratio for all 3 — e.g., square crop, similar lighting, optionally a subtle duotone/brand-tint overlay applied uniformly so they feel like a "set" not 3 random photos). 500x500px minimum.

**Color treatment:** If applying the duotone overlay, use `--color-primary` shadows → `--color-accent` highlights so the headshots visually tie back to the hero gradient; role tag pill = `--color-neutral-bg` background with `--color-text-secondary` text.

### 3.7 Section: Final CTA
Full-width band before footer.

**Copy:**
- H2: "Have a project in mind? Let's build it right."
- Subtext: "Whether it's a research-heavy AI system or a full-stack product — we'll help you scope it."
- CTA button: `Get in Touch`

**Asset spec:** Optional subtle background — repeat a cropped/zoomed portion of the hero's 3D asset at very low opacity for visual continuity, OR keep this section asset-free (clean typographic close works well too, reduces load).

**Color treatment:** Section background = `--color-primary`; H2/subtext = `--color-text-inverse`; CTA button = `--color-accent` filled, same style as hero CTA 1 — this repetition (dark navy bookends at top and bottom of homepage) is intentional and frames the lighter middle sections.

### 3.8 Footer
- Logo (`images/logo2.png`) + coded "TRIVIO SOLUTIONS" wordmark + 1-line tagline
- Quick links (Services, Case Studies, About, Contact)
- Social icons (LinkedIn — priority, GitHub — important given your case-study links, X/Twitter if active)
- Contact email / location
- Copyright line

**Asset spec:** GitHub icon should link to a **GitHub Organization page** if you create one (recommended — see Section 10), not individual repos.

**Color treatment:** Footer background = `--color-primary`; all text = `--color-text-inverse` at full opacity for headings, ~70% opacity for secondary links; link/icon hover = `--color-accent`; divider lines = `--color-primary-2`.

---

## 4. SERVICES PAGES (4 pages, same template structure)

Each service page follows this identical structure for consistency:

### 4.1 Service Hero
- Small breadcrumb: `Services / AI & ML Development`
- H1: Service name
- 2–3 line description
- **Asset:** Service-specific 3D/isometric hero visual, larger version of the homepage card icon, or a relevant abstract visual (e.g., for AI page — a more elaborate node-network 3D scene; for Web page — layered browser panels; for App page — floating phone mockups; for Desktop page — floating window/dashboard mockup)
- **Color treatment:** Same dark hero treatment as homepage — `--color-primary` background, `--color-text-inverse` text, gradient 3D asset in `--color-accent` → `--color-accent-alt`, so every page opens with the same recognizable "dark navy + indigo glow" signature.

### 4.2 "What We Do" — Capability Breakdown
Bullet/card list of specific capabilities. **Example for AI/ML page:**
- Custom ML & Deep Learning model development
- RAG (Retrieval-Augmented Generation) pipeline design
- AI agent development & orchestration
- Model fine-tuning & deployment (Hugging Face, custom infra)
- NLP, computer vision, predictive modeling
- MLOps & model monitoring

**Example for Web page:**
- Full-stack web application development
- API development (FastAPI, Django REST)
- Frontend engineering (React, Next.js)
- Database architecture (Firebase, Supabase)
- Cloud deployment & DevOps (Vercel, Cloudflare, Railway)

*(Write equivalent lists for App Development and Desktop Applications — App: cross-platform frameworks, native modules, offline sync, app store deployment. Desktop: Electron/native frameworks, offline-first architecture, system integration, auto-update pipelines.)*

**Asset spec:** No imagery required for this section — icon bullets only (use small 24px line icons, consistent icon family, e.g., Phosphor Icons or Lucide, styled in your monospace/technical aesthetic).

**Color treatment:** Section background = `--color-neutral-bg`; bullet icons = `--color-accent`; bullet text = `--color-text-primary`.

### 4.3 Tech Stack for This Service
Small tag/pill row of specific technologies relevant to *this* service only (subset of full stack).

**Asset spec:** Same SVG logo set as homepage strip, filtered per page.

### 4.4 Relevant Case Studies
3 case studies filtered to this service category, same card format as homepage.

### 4.5 Process Snippet (optional, or link to full Process section on About page)
3–4 step mini-timeline: Discovery → Prototype → Build → Deploy

### 4.6 CTA
Same pattern as homepage final CTA, service-specific copy: "Need [Service Name]? Let's talk scope."

**Color treatment:** Identical to Section 3.7 (homepage Final CTA) — `--color-primary` background, `--color-accent` button.

---

## 5. ABOUT US PAGE

### 5.1 Hero
- H1: "Built by researchers, engineers, and builders."
- Subtext: Company origin/mission (2–3 lines — why Trivio exists, what "research-based" means in practice)

**Asset spec:** Team photo (if available) or continuation of the 3D brand visual style, kept simpler/more human-focused than homepage hero.

**Color treatment:** `--color-primary` background, `--color-text-inverse` text — keeps the "dark hero on every page-entry" pattern consistent.

### 5.2 Mission/Values block
3 short value pillars, e.g.:
- **Research First** — "We validate before we build."
- **Full-Stack Ownership** — "One team, from model to UI to deployment."
- **Production-Grade, Always** — "Prototypes that are built to scale."

**Asset spec:** Small abstract icon per value (line-icon style, matching Section 4.2 icon set, rendered in `--color-accent`).

**Color treatment:** Section background = `--color-neutral-bg`; value titles = `--color-text-primary`; description = `--color-text-secondary`.

### 5.3 Founders — Full Profiles
For each of the 3 founders (repeat structure):
- Large photo
- Name + Title (e.g., "Co-Founder — AI/ML Lead")
- 3–4 sentence bio: background, specialization, notable expertise areas
- Skills tags (e.g., `RAG` `LLM Fine-tuning` `PyTorch` `Agent Systems`)
- LinkedIn + GitHub icon links

**Asset spec:** Same headshot set described in Section 3.6, larger crop here (portrait orientation option, e.g., 800x1000px), consistent styling across all 3.

**Placeholder handling (no real photos yet):** Render a circular/rounded avatar in `--color-primary-2` with the founder's initials centered in `--color-text-inverse` Montserrat Bold, same crop dimensions as the real photo will use — so swapping in a real headshot later is a single image-replace, no layout change. Use the mock founder data from the Implementation Brief (Ahmed Raza — AR, Bilal Hassan — BH, Hamza Tariq — HT) for names, roles, bios, skills tags, and social links; initials avatars use those same two-letter initials.

**Color treatment:** Skills tags = `--color-accent` at 10–15% opacity fill with `--color-accent` text, matching the case-study industry tag style for visual consistency across the site.

### 5.4 "Why Research-Based" section
Explain your differentiator explicitly — this is important given your positioning.
**Copy direction:** "Most agencies implement what's already proven. We treat every complex problem as a research question first — evaluating approaches, prototyping fast, and only committing to an architecture once it's validated. This is why our AI/ML work spans [X industries] with production-grade reliability."

**Asset spec:** Optional — a simple visual diagram (not photographic) showing your process loop: Research → Prototype → Validate → Build → Deploy. This can be a custom SVG diagram rather than a 3D asset — clean, technical, on-brand.

**Color treatment:** Diagram nodes = `--color-primary`/`--color-primary-2` boxes with `--color-text-inverse` labels; connecting arrows = `--color-accent`, matching the architecture-diagram styling used in case studies (Section 6.2) for a consistent "technical diagram language" across the whole site.

### 5.5 Process / How We Work (can live here or as separate page)
Step-by-step timeline (4–5 steps):
1. **Discovery Call** — understand problem, constraints, goals
2. **Research & Scoping** — technical feasibility, architecture proposal
3. **Prototype** — working proof-of-concept before full build
4. **Build & Iterate** — sprints with regular check-ins
5. **Deploy & Support** — production launch + post-launch support

**Asset spec:** Horizontal or vertical timeline UI component — no external imagery needed, built with CSS/SVG connecting lines and numbered nodes styled in the monospace/technical typography.

**Color treatment:** Numbered step circles = `--color-accent` fill with `--color-text-inverse` numerals; connecting line = `--color-neutral-border`, filling in with `--color-accent` as the user scrolls past each step (progressive-fill animation).

### 5.6 CTA
Standard closing CTA band.

---

## 6. CASE STUDIES

### 6.1 Case Studies Index Page

**Header:**
- H1: "25+ Projects. Real Problems Solved."
- Subtext: "A selection of what we've built — across AI, web, mobile, and desktop."

**Filter bar:**
- By Service: `All | AI/ML | Web | App | Desktop`
- By Industry: `All | Healthcare | Fintech | E-commerce | Education | [etc. — categorize once all 25+ are tallied]`

**Grid:** Card layout, each card = thumbnail + title + tags + "View →"

**Asset spec:** Every case study needs a consistent thumbnail treatment (see 6.2). Grid should support **at least 25 cards** without feeling cluttered — use pagination or "Load More" after first 9–12.

**Color treatment:** Filter pills = `--color-neutral-surface` with `--color-neutral-border`, active filter = `--color-accent` fill with `--color-text-inverse` text; card layout matches Section 3.4 (Featured Case Studies) styling for consistency.

### 6.2 Individual Case Study Page Template

This exact structure repeats for every case study:

1. **Header**
   - Project title
   - Industry tag + Service tag(s)
   - 1-line summary
   - **GitHub repo button** (prominent, top of page): `View on GitHub →` linking to the public repo
   - Live demo link button (if deployed/available)
   - **Color treatment:** Industry tag = `--color-accent` at 10–15% opacity pill; GitHub button = `--color-primary` fill with `--color-text-inverse` text + GitHub icon (kept visually distinct from the `--color-accent` demo/CTA button so "code" and "live product" read as two different actions)

2. **Hero visual**
   - **Asset spec:** Device-frame mockup of the project (browser frame for web, phone frame for app, window frame for desktop) showing the actual product UI. If it's a backend/AI-only project with no UI, use an architecture diagram instead (see below).
   - Format: 16:9 or 4:3, high-res screenshot inside mockup frame, `.webp`, under 300KB optimized

3. **The Challenge**
   - 2–4 sentences: what problem the client/project needed to solve

4. **Our Approach**
   - 3–5 sentences or bullet list: technical approach, key decisions, why this stack/method was chosen

5. **Tech Stack Used**
   - Tag row of specific technologies for this project (pulls from same SVG logo/tag system as Section 3.5)
   - **Color treatment:** Neutral pills — `--color-neutral-bg` background, `--color-text-secondary` text (kept deliberately neutral so tags don't visually compete with the accent-colored CTA/GitHub buttons)

6. **What We Built** (feature breakdown)
   - 3–5 bullet points of key features/modules delivered
   - **Asset spec:** 2–3 additional in-context screenshots (same device-frame style as hero) showing key screens/features

7. **Architecture Diagram** (for AI/ML-heavy or backend-heavy projects)
   - **Asset spec:** Clean custom SVG diagram — boxes/arrows showing data flow (e.g., "User Query → Retrieval → Vector DB → LLM → Response"). Not a photo/3D asset — a technical diagram, consistent visual language across all case studies (same box style, arrow style, font).
   - **Color treatment:** Same tokens as the About/Process diagram (Section 5.4) — `--color-primary`/`--color-primary-2` boxes, `--color-accent` arrows, `--color-neutral-bg` diagram canvas — so every diagram on the site looks like it came from the same system.

8. **Results / Impact**
   - Bullet list of outcomes — use real numbers where available ("Reduced processing time by X%," "Automated Y manual hours/week"). Where no hard metric exists, use qualitative outcome statements ("Enabled the client to handle 3x more support tickets without adding staff").
   - **Color treatment:** Result numbers/percentages bolded in `--color-accent`; checkmark/bullet icons = `--color-success`.

9. **GitHub Repo Card** (repeat at bottom, not just top)
   - Repo name, short description, star count (if any), `View Repository →` button
   - **Why repeat at bottom:** Increases click-through — reader has now built trust reading the case study and is more likely to click through to verify code quality.
   - **Color treatment:** Same `--color-primary` fill treatment as the top GitHub button, in a full-width card format — `--color-neutral-surface` card background with a `--color-primary`-filled button inside it.

10. **Next Case Study** navigation (prev/next arrows to keep users browsing)

### 6.3 Sample Case Studies (placeholder content — replace with real projects at the end)

> **Note:** Below are sample entries to test the template. Replace title, description, stack, metrics, and GitHub links with your actual 25+ projects before launch. Structure/format should stay the same for consistency.

**Placeholder handling (no real screenshots yet):** For every case study's hero visual and in-context screenshots, render the device-frame mockup component with a solid `--color-neutral-bg` "screen" containing a centered app/project icon in `--color-accent` and small text reading "Screenshot coming soon" in `--color-text-secondary` — same frame dimensions as a real screenshot will use, so swapping in real images later is a drop-in replace.

**Sample 1**
- Title: `MediAssist — AI-Powered Clinical Documentation Assistant`
- Industry: Healthcare | Service: AI/ML
- Summary: "An AI system that transcribes and structures doctor-patient conversations into clinical notes using a fine-tuned NLP pipeline."
- Tech: FastAPI, Hugging Face Transformers, PyTorch, React, PostgreSQL
- GitHub: `github.com/trivio-solutions/mediassist-ai` *(placeholder)*
- Sample result: "Reduced clinical documentation time by an estimated 60%."

**Sample 2**
- Title: `RetailIQ — RAG-Based Product Support Chatbot`
- Industry: E-commerce | Service: AI/ML, Web
- Summary: "A retrieval-augmented chatbot trained on product manuals and support tickets, deployed as a widget for a Shopify storefront."
- Tech: Django, LangChain-style RAG pipeline, Supabase (vector store), Next.js
- GitHub: `github.com/trivio-solutions/retailiq-chatbot` *(placeholder)*
- Sample result: "Automated 70% of first-response support queries."

**Sample 3**
- Title: `FinTrack — Personal Finance Web Platform`
- Industry: Fintech | Service: Web
- Summary: "A full-stack budgeting and expense-tracking platform with bank-sync and analytics dashboard."
- Tech: React, FastAPI, Firebase Auth, Vercel
- GitHub: `github.com/trivio-solutions/fintrack-app` *(placeholder)*
- Sample result: "Deployed to production with real-time sync across 3 platforms."

**Sample 4**
- Title: `LogiFlow — Cross-Platform Delivery Tracking App`
- Industry: Logistics | Service: App
- Summary: "A mobile app for real-time delivery tracking with driver and customer-facing interfaces."
- Tech: React Native, Firebase, Google Maps API
- GitHub: `github.com/trivio-solutions/logiflow-mobile` *(placeholder)*
- Sample result: "Cut average delivery-status inquiry calls by 45%."

**Sample 5**
- Title: `DeskAudit — Offline-First Desktop Inventory Manager`
- Industry: Retail/SMB | Service: Desktop
- Summary: "A desktop application for warehouse inventory management, built offline-first with background cloud sync."
- Tech: Electron, Django REST backend, Supabase, SQLite (local cache)
- GitHub: `github.com/trivio-solutions/deskaudit` *(placeholder)*
- Sample result: "Enabled inventory tracking in low-connectivity warehouse environments."

**Sample 6**
- Title: `AgentOps — Autonomous Multi-Agent Research Assistant`
- Industry: Internal R&D / SaaS | Service: AI/ML
- Summary: "A multi-agent system that autonomously researches, summarizes, and cross-references technical documentation."
- Tech: Custom agent orchestration framework, Hugging Face, FastAPI, Railway
- GitHub: `github.com/trivio-solutions/agentops` *(placeholder)*
- Sample result: "Reduced manual literature-review time from days to hours."

**Categorization plan for your real 25+ projects:** Once you replace these, tag each by (a) primary service — AI/ML, Web, App, Desktop, and (b) industry — this powers the filter bar in 6.1. Aim to have at least 3–4 projects per industry category shown; if a category only has 1 project, consider merging it into a broader "Other" tag until you have more.

---

## 7. CONTACT PAGE

### 7.1 Layout
Split screen: form left, info right (or stacked on mobile).

**Form fields:**
- Name
- Email
- Company (optional)
- Project type (dropdown: AI/ML, Web, App, Desktop, Not sure yet)
- Budget range (optional dropdown)
- Message/Project details

**Right panel:**
- Direct email address: `hello@triviosolutions.com`
- Location: Faisalabad, Pakistan *(remote-first, available worldwide)*
- LinkedIn company page link: `https://linkedin.com/company/trivio-solutions`
- GitHub organization link: `https://github.com/trivio-solutions`
- Response-time note ("We typically respond within 24 hours")
- Optional: Calendly/booking link for a discovery call (not included in this build — omit or link `#` if a booking tool isn't set up yet)

**Asset spec:** No heavy imagery needed — keep this page fast-loading and function-focused. Optional: small abstract 3D shape in a corner for brand continuity, kept very subtle/low-opacity.

**Color treatment:** Page background = `--color-neutral-bg`; form fields = `--color-neutral-surface` with `--color-neutral-border`, focus state border = `--color-accent`; submit button = `--color-accent` filled; validation errors = `--color-error`; success confirmation = `--color-success`; right-panel info icons = `--color-accent`.

---

## 8. BLOG / INSIGHTS (Phase 2 — plan structure now, populate later)

**Purpose:** SEO + demonstrates research credibility (write about AI/ML techniques, case-study deep-dives, industry commentary).

**Structure:**
- Index page: filterable by category (AI/ML, Web Dev, Case Study Deep-Dives, Company News)
- Article template: title, author (link to founder profile), read time, tags, cover image, body content, related articles

**Asset spec:** Each article needs one cover image (can be simple — abstract gradient/geometric graphic generated per category, doesn't need to be unique 3D art each time; build 4–5 reusable cover templates per category to save design time).

**Color treatment:** Cover templates built from the `--color-accent` → `--color-accent-alt` gradient family (same as hero/icon system) with a category label overlay in `--color-text-inverse`; category filter pills = same active/inactive pattern as case-study filters (Section 6.1).

---

## 9. SUPPORTING ASSETS CHECKLIST

Full list of every image/asset you'll need to produce or source before frontend build:

| # | Asset | Type | Where Used | Priority |
|---|---|---|---|---|
| 1 | Hero 3D scene (triangular/node visual) | 3D (Spline) + static fallback | Homepage hero | High |
| 2 | 4x Service isometric icons (AI, Web, App, Desktop) | 3D icon set | Homepage + Service pages | High |
| 3 | Tech stack SVG logos (12–14 logos) | SVG (official brand kits) | Homepage strip, Service pages, Case studies | High |
| 4 | 3 Founder headshots (consistent style) | Photography | Homepage, About | High |
| 5 | Device-frame mockup template (browser/phone/window) | Design template (reusable) | All case study screenshots | High |
| 6 | Case study thumbnails (25+, one per project) | Screenshots in device frames | Case studies index + individual pages | High (rolling) |
| 7 | Architecture diagram template (SVG, consistent style) | Custom diagram | AI/ML-heavy case studies | Medium |
| 8 | Line icon set (capabilities, values, process) | Icon library (Phosphor/Lucide) | Services, About | Medium |
| 9 | Process timeline graphic | CSS/SVG built component | About/Process section | Medium |
| 10 | Blog cover templates (4–5 reusable) | Design template | Blog (Phase 2) | Low |
| 11 | Favicon + social share (OG) image | Standard web assets | Site-wide, LinkedIn link previews | High |
| 12 | GitHub organization banner/avatar | Standard GitHub assets | GitHub org page | Medium |
| 13 | Recolored logo icon (per Section 0.2 tokens) | SVG/PNG, light + dark background versions | Header, footer, favicon, GitHub org, social profiles | High |
| 14 | Design token file (CSS variables / Tailwind config from Section 0.1) | Code/config file | Global — frontend build | High |

---

## 10. GITHUB PRESENCE (supporting the "interest barhega" goal)

**Recommendation:** Create a **GitHub Organization** (`github.com/trivio-solutions` or similar) rather than linking scattered personal-account repos. This lets you:
- Pin your best 6 repos on the org profile page
- Add a clean org README (company description, links to website/LinkedIn)
- Give every case study a professional, centralized-looking source link — this is what actually increases client trust, since a prospect clicking through sees a real organization, not a random personal GitHub

Each case-study repo should ideally have a clean `README.md` (tech stack, setup instructions, screenshot) — since clients *will* click through, per your own goal of increasing interest.

---

## 11. NEXT STEPS

1. Hand this entire document to the AI coding agent (Google Antigravity) as the full build spec — it should build the complete site (all pages, all sections, all components) in one pass using the Implementation Brief's placeholder rules for anything not yet provided
2. Place `logo1.png` and `logo2.png` in the project's `images/` (or `public/images/`) folder before the build starts, exactly as referenced in this doc
3. Once the site is fully built and clickable end-to-end with placeholders, provide the remaining "Must-Provide" assets (founder photos/bios, real case studies, contact info, social links, domain) and have the agent do a second pass swapping placeholders for real content — no layout/component changes should be needed for this pass
4. Set up GitHub Organization per Section 10
5. Finalize LinkedIn company page (previously discussed) to link from footer/contact/About

---

*End of blueprint. Color system, logo assets, and full implementation plan are finalized (Section 0 + Implementation Brief). This document is ready to be handed to an AI coding agent for a single build pass.*

# Wild Thyme Spice Co. — Landing Page

A single-page landing site with a **Rustic & Handcrafted** look and **Fresh & Natural** colour palette. The design is fully themeable via one central token file.

---

## What to Do Next (Before Submitting to the Client)

Follow these steps to finalise the project before handoff.

### 1. Add Final Images

The site references images from `resources/images/`. Add or replace files so the client sees the real brand assets.

| Location | File(s) to add | Notes |
|--------|----------------|--------|
| `resources/images/hero/` | `hero.jpg` (or `.png`) | Full-width hero background. If missing, a dark fallback is used. |
| `resources/images/products/` | `signature-blend.jpg`, `berbere.jpg`, `zaatar.jpg`, `garam-masala.jpg` | One image per product; use product names from `content.json`. |
| `resources/images/recipes/` | `recipe-roots.jpg`, `recipe-lentil.jpg`, `recipe-chicken.jpg`, `recipe-chai.jpg`, `recipe-flatbread.jpg` | Recipe/lifestyle photos; names match `content.json`. |
| `resources/images/` | `story.jpg` | Brand story section (e.g. founder photo or spice flat-lay). |
| `resources/images/` | `logo.svg` (or replace existing) | Company logo. A placeholder logo is already in place. |
| `resources/images/textures/` | (optional) | `grain.svg`, `kraft.svg`, `wood.svg` are provided; replace if the client has custom textures. |

**Supported formats:** JPG, PNG, WebP, SVG.  
See `resources/images/README.md` for the same list in one place.

---

### 2. Review and Update Copy

All visible text is driven by **`resources/content.json`**. Before handoff:

- [ ] Update **company name**, **tagline**, and **founded year** if the client uses different branding.
- [ ] Review **hero subtext** and **brand story** paragraphs.
- [ ] Confirm **product names**, **descriptions**, and **image filenames** (must match the files you add in step 1).
- [ ] Update **USP** titles and descriptions if the client’s selling points differ.
- [ ] Review **recipe names** and ensure they match the recipe image filenames.
- [ ] Confirm **testimonials** (quote, author, location) or replace with client-approved quotes.
- [ ] Update **newsletter** heading and body text if needed.
- [ ] Set **footer** nav links (`#products`, `#story`, etc. or real URLs), **contact** (email, phone, address), **social** URLs, and **copyright** year/text.

The live page uses this content; there is no separate CMS. Edit only `content.json`, then update `index.html` to match (or use a small script to inject content if you add one).

---

### 3. Test the Site

- [ ] **Responsive:** Test from **300px to 4000px** width (resize browser or use DevTools). Confirm no horizontal scroll and that text/layout scale correctly.
- [ ] **Browsers:** Check in Chrome, Firefox, Safari, and Edge (or per client requirements).
- [ ] **Accessibility:**  
  - All images have meaningful `alt` text.  
  - Tab through the page; every interactive element (links, buttons, form) should be focusable.  
  - If possible, run a quick check with an axe or WAVE-style tool.
- [ ] **Newsletter:** Submit the form with a valid email; the success message should appear. Try an invalid email; validation should show.
- [ ] **Navigation:** Click all nav and footer links; smooth scroll and active states should work. Test the mobile hamburger menu on small widths.

---

### 4. Optional: Rebrand / Retheme

To change colours or fonts for the client without touching layout or content:

- Open **`styles/tokens.css`**.
- Update the variables under **Colours** and **Typography** (and texture paths if needed).
- Save; the whole site updates. No other files need changes for a full theme change.

---

### 5. Prepare for Handoff

- [ ] Remove or update any placeholder/dummy content so the client receives a production-ready page.
- [ ] If the client will host the site, provide:
  - The full project folder (or a zip), **or**
  - Instructions for uploading `index.html`, `styles/`, `scripts/`, and `resources/` to their host.
- [ ] Note: The site is static (HTML/CSS/JS). No server or build step is required; it can be opened from `index.html` or served from any web server.

---

## How to Run / View the Site

- **Option A:** Open **`index.html`** in a browser (double-click or “Open with” browser).  
- **Option B:** Use a local server (e.g. `npx serve .` or your editor’s “Live Server”) so paths and behaviour match a real host.

---

## Project Structure (Reference)

```
project-root/
├── resources/
│   ├── content.json     ← All site copy (company, products, testimonials, footer, etc.)
│   ├── colors.json      ← Colour palette (reference for tokens)
│   ├── fonts/           ← Font names (loaded via Google Fonts in index.html)
│   └── images/          ← Hero, products, recipes, logo, textures
├── styles/
│   ├── tokens.css       ← Single source of truth for colours, fonts, spacing (retheme here)
│   └── main.css         ← Layout and component styles
├── scripts/
│   └── main.js         ← Nav scroll, scroll animations, newsletter form, mobile menu
├── index.html          ← Main landing page (all 8 sections)
└── README.md           ← This file
```

---

## Quick Checklist Summary

| Step | Action |
|------|--------|
| 1 | Add/replace images in `resources/images/` (hero, products, recipes, story, logo). |
| 2 | Review and edit `resources/content.json`; sync `index.html` if you change structure. |
| 3 | Test 300px–4000px width, key browsers, accessibility, form, and navigation. |
| 4 | (Optional) Adjust theme in `styles/tokens.css`. |
| 5 | Package and deliver to client with clear instructions. |

Once these are done, the project is ready to submit to the client.

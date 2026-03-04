# Lovin' Bowl — Shift4Shop Theme

Custom Shift4Shop storefront for **Lovin' Bowl** fresh dog food. This repo contains everything needed to deploy the new store design.

---

## How to Deploy

### Step 1: Upload Template Files

Connect to your Shift4Shop store via **FTP** or the admin **File Manager** (`Settings → Design → Themes → FTP`).

Upload to `assets/templates/{your-template}/`:

| Local File | Upload To | Purpose |
|-----------|-----------|---------|
| `frame.html` | `/` (template root) | Master page shell — wraps every page |
| `listing.html` | `/` | Category/listing page layout |
| `product.html` | `/` | Product detail page layout |
| `home.html` | `/` | Homepage content (protein tiles) |
| `styles/lovinbowl.css` | `/css/` or `/` | All custom styles |
| `scripts/lovinbowl.js` | `/js/` or `/` | Gallery, quantity selector, mobile menu |

> Replace `{your-template}` with your actual template folder name.

### Step 2: Upload Brand Images

Upload everything in `brand_assets/` to your template's `/images/` folder. These are the product label images used on homepage tiles and product pages.

**Available images:**

| Protein | Regular | Puppy | Grain Free | Dehydrated |
|---------|---------|-------|------------|------------|
| Beef | `lb_beef_012325.jpg` | `lb_Beef_Puppy_012325.jpg` | `lb_beef_gf_012325.jpg` | `LB_DH Beef Liver_112519.jpg` |
| Chicken | `lb_chicken_012325.jpg` | `lb_Chicken_Puppy_012325.jpg` | `lb_chicken_gf_012325.jpg` | `LB_DH_Chicken Breast_112519.jpg` |
| Lamb | `lb_lamb_012325.jpg` | `lb_Lamb_Puppy_012325.jpg` / `lb_lamb_puppy_030426.jpg` | `lb_lamb_gf_012325.jpg` | — |
| Salmon | `lb_salmon_012325.jpg` | `lb_Salmon_Puppy_012325.jpg` | `lb_salmon_gf_012325.jpg` | — |
| Pork | `LB_Pork_030426.jpg` | `LB_Pork_Puppy_030426.jpg` | `LB_Pork_GF_030426.jpg` | — |

**Treats:**
- `LB_Chicken Liver Cookies_112519.jpg`
- `LB_Beef Liver Cookies_112519.jpg`

**Bone Broth:**
- `Bone Broth_Beef.jpg`
- `Bone Broth_turkey.jpg`

### Step 3: Set Up Categories

In **Products → Categories → Add New**, create this **diet-first** hierarchy:

| Top-Level Category | Sub-Categories (proteins) |
|-------------------|--------------------------|
| **Regular** | Beef, Chicken, Lamb, Salmon, Pork |
| **Puppy** | Beef, Chicken, Lamb, Salmon, Pork |
| **Grain Free** | Beef, Chicken, Lamb, Salmon, Pork |
| **Dehydrated** | Beef, Chicken, Lamb, Salmon, Pork |
| **Treats** | *(no sub-categories)* |
| **Our Story** | *(content page, not a product category)* |

**URL slugs** — use `{protein}-{diet}` format:
- Regular > Beef → `beef-regular`
- Puppy > Chicken → `chicken-puppy`
- Grain Free > Lamb → `lamb-grain-free`
- Dehydrated > Salmon → `salmon-dehydrated`

### Step 4: Create Products (39 total)

**SKU format:** `LB-{PROTEIN}-{DIET}-{SIZE}`

| Code | Protein | | Code | Diet | | Code | Size |
|------|---------|---|------|------|---|------|------|
| BEEF | Beef | | REG | Regular | | 16 | 16oz |
| CHKN | Chicken | | PUP | Puppy | | 32 | 32oz |
| LAMB | Lamb | | GF | Grain Free | | | |
| SLMN | Salmon | | DH | Dehydrated | | | |
| PORK | Pork | | | | | | |

**Pricing — 32oz (2 lbs):**

| Protein | Regular | Puppy | Grain Free | Dehydrated |
|---------|---------|-------|------------|------------|
| Beef | $24 | $25 | $24 | $29 |
| Chicken | $24 | $25 | $24 | $29 |
| Lamb | $25 | $25 | $25 | $30 |
| Salmon | $25 | $25 | $25 | $30 |
| Pork | $25 | $25 | $25 | $30 |

**Pricing — 16oz (1 lb):** ~60% of 32oz price. Verify with actual pricing.

| Protein | Regular | Puppy | Grain Free |
|---------|---------|-------|------------|
| Beef | $14 | $15 | $14 |
| Chicken | $14 | $15 | $14 |
| Lamb | $15 | $15 | $15 |
| Salmon | $15 | $15 | $15 |
| Pork | $15 | $15 | $15 |

> Dehydrated only comes in 32oz. All other diets have both 16oz and 32oz.

**Treats (4 products):**

| Product | SKU | Price |
|---------|-----|-------|
| Handmade Cookies - Chicken | LB-TREAT-COOKIE-CHKN | $8.00 |
| Handmade Cookies - Beef | LB-TREAT-COOKIE-BEEF | $8.00 |
| Pup Cake (Small) | LB-TREAT-CAKE-SM | $5.00 |
| Pup Cake (Large) | LB-TREAT-CAKE-LG | $7.00 |

**Product count:** 5 proteins × 3 diets × 2 sizes = 30, plus 5 dehydrated × 1 size = 5, plus 4 treats = **39 products**.

### Step 5: Configure Navigation

In **Settings → Design → Themes → Settings:**

1. Enable "Category Navigation" display
2. Set max displayed categories to **6** (Regular, Puppy, Grain Free, Dehydrated, Treats, Our Story)
3. Enable sub-category dropdowns — each diet shows its 5 protein children
4. The nav bar should render as: `Regular | Puppy | Grain Free | Dehydrated | Treats | Our Story`

### Step 6: Set Up Homepage

The homepage (`home.html`) displays 6 hero tiles linking to each protein's product page. Update the `href` values in `home.html` to match your actual Shift4Shop category URLs:

```html
<!-- In home.html, update these links: -->
<a href="view_category.asp?cat=BEEF" class="lb-hero-tile">
<a href="view_category.asp?cat=CHKN" class="lb-hero-tile">
<a href="view_category.asp?cat=LAMB" class="lb-hero-tile">
<a href="view_category.asp?cat=SLMN" class="lb-hero-tile">
<a href="view_category.asp?cat=PORK" class="lb-hero-tile">
<a href="view_category.asp?cat=TREATS" class="lb-hero-tile lb-hero-tile--treats">
```

Also update the image `src` paths to match where you uploaded them:
```html
<img src="assets/templates/{your-template}/images/lb_beef_012325.jpg" alt="Beef" />
```

### Step 7: Product Page Setup

For each product, upload **up to 4 images** to the Shift4Shop gallery:
1. **Image 1:** Front label (the brand image from `brand_assets/`)
2. **Image 2:** Ingredients/nutrition label
3. **Image 3:** Bowl/serving suggestion
4. **Image 4:** Lifestyle shot

**Description field** — paste the ingredient list:

- **Beef:** Ground Beef, Sweet Potatoes, Beef Liver, Beef Heart, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.
- **Chicken:** Chicken Thighs, Chicken Breast, Sweet Potatoes, Chicken Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.
- **Lamb:** Ground Lamb, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Pumpkin, Quinoa, Carrots, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.
- **Salmon:** Salmon, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.
- **Pork:** Ground Pork, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

Append this to each: *"Our {Protein} Diet is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrition Profiles for maintenance."*

---

## User Flow

```
Homepage (protein tiles)
  └─ Click "Beef" → Product page for Beef
       ├─ Choose diet: Regular | Dehydrated (+$5) | Puppy | Grain Free
       ├─ Choose size: 16oz | 32oz
       └─ Add to Cart

Nav bar (diet-first)
  ├─ Regular    → dropdown: Beef, Chicken, Lamb, Salmon, Pork
  ├─ Puppy      → dropdown: Beef, Chicken, Lamb, Salmon, Pork
  ├─ Grain Free → dropdown: Beef, Chicken, Lamb, Salmon, Pork
  ├─ Dehydrated → dropdown: Beef, Chicken, Lamb, Salmon, Pork
  ├─ Treats
  └─ Our Story
```

---

## File Overview

```
├── frame.html              # Shift4Shop master template (header, nav, footer, [page_content])
├── listing.html            # Category listing template (product grid)
├── product.html            # Product detail template (gallery, price, add-to-cart)
├── home.html               # Homepage content block (6 hero tiles — static HTML)
├── styles/
│   └── lovinbowl.css       # Full theme stylesheet (28 sections, ~2000 lines)
├── scripts/
│   └── lovinbowl.js        # Gallery, quantity selector, mobile menu, scroll effects
├── brand_assets/           # Product label images (23 JPGs + 1 PSD)
├── menu-config.json        # Nav structure definition (diet-first)
├── generate-nav.js         # Builds nav-snippet.html from menu-config.json
├── nav-snippet.html        # Generated nav HTML (reference — Shift4Shop renders nav server-side)
├── catalog-structure.json  # Full product data: pricing, ingredients, SKUs
├── docs/
│   └── admin-setup.md      # Detailed Shift4Shop admin walkthrough
├── *-mockup.html           # Local preview files (not uploaded to Shift4Shop)
├── serve.mjs               # Local dev server (port 3000)
└── screenshot.mjs          # Puppeteer screenshot utility
```

---

## Local Development

```bash
npm install
npm run serve      # http://localhost:3000
npm run generate   # rebuild nav-snippet.html from menu-config.json
npm run lint       # htmlhint all template + mockup files
```

**Routes:**
| URL | File |
|-----|------|
| `/` | home-mockup.html (homepage) |
| `/listing` | listing-mockup.html (category page) |
| `/product` | product-mockup.html (product detail) |
| `/frame` | frame.html (master template) |

**Screenshots:**
```bash
node screenshot.mjs http://localhost:3000 label 1280    # desktop
node screenshot.mjs http://localhost:3000 label 768     # tablet
node screenshot.mjs http://localhost:3000 label 375     # mobile
```

---

## Important Notes

- **Template variables** like `[TITLE]`, `[page_content]`, `[item_price]` are Shift4Shop tokens — don't edit or remove them
- **Block comments** like `<!--START: BLOCK-->...<!--END: BLOCK-->` must stay exactly as-is, including the intentional typo `<!--END: SUB_CATEGORIEST-->`
- **Bootstrap 3 + jQuery** are intentionally kept loaded — Shift4Shop checkout and account pages depend on them
- All custom styles use `.lb-*` prefix to avoid collisions with Bootstrap/Shift4Shop system CSS
- The `home.html` homepage uses hard-coded tiles (not template loops) because Shift4Shop's homepage doesn't have dynamic product listing blocks

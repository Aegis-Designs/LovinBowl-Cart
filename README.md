# Lovin' Bowl — Shift4Shop Custom Storefront

A complete, production-ready Shift4Shop (formerly 3dcart) storefront for **Lovin' Bowl**, a premium fresh dog food brand. This repository contains every template file, stylesheet, script, brand asset, and data reference needed to deploy and operate a modern 2026 e-commerce experience.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Repository Structure](#repository-structure)
3. [Step-by-Step Deployment Guide](#step-by-step-deployment-guide)
   - [Step 1: Choose Your Plan](#step-1-choose-your-plan)
   - [Step 2: Upload Template Files via FTP](#step-2-upload-template-files-via-ftp)
   - [Step 3: Upload Brand Images](#step-3-upload-brand-images)
   - [Step 4: Create the Category Hierarchy](#step-4-create-the-category-hierarchy)
   - [Step 5: Create All 40 Products](#step-5-create-all-40-products)
   - [Step 6: Configure Navigation](#step-6-configure-navigation)
   - [Step 7: Set Up the Homepage](#step-7-set-up-the-homepage)
   - [Step 8: Product Page Image Uploads](#step-8-product-page-image-uploads)
   - [Step 9: Configure Payment Processing](#step-9-configure-payment-processing)
   - [Step 10: Configure Shipping](#step-10-configure-shipping)
   - [Step 11: Enable Essential Modules](#step-11-enable-essential-modules)
   - [Step 12: Enable Marketing & Growth Modules](#step-12-enable-marketing--growth-modules)
   - [Step 13: SEO Configuration](#step-13-seo-configuration)
   - [Step 14: Security & Compliance](#step-14-security--compliance)
   - [Step 15: Analytics & Tracking](#step-15-analytics--tracking)
   - [Step 16: Social Commerce](#step-16-social-commerce)
   - [Step 17: Go-Live Checklist](#step-17-go-live-checklist)
4. [Product Catalog Reference](#product-catalog-reference)
5. [Pricing](#pricing)
6. [Ingredient Lists](#ingredient-lists)
7. [User Flow](#user-flow)
8. [Optional Modules & Plugins](#optional-modules--plugins)
9. [Local Development](#local-development)
10. [Template Variable Reference](#template-variable-reference)
11. [Important Notes](#important-notes)

---

## Quick Start

```bash
git clone https://github.com/Aegis-Designs/LovinBowl-Cart.git
cd LovinBowl-Cart
npm install
npm run serve      # http://localhost:3000
```

Open `http://localhost:3000` to preview the homepage, `/listing` for the category page, and `/product` for the product detail page.

---

## Repository Structure

```
LovinBowl-Cart/
├── frame.html                 # Shift4Shop master template (header, nav, footer, [page_content])
├── listing.html               # Category listing page template (product grid)
├── product.html               # Product detail page template (gallery, price, add-to-cart)
├── home.html                  # Homepage content block (6 hero tiles — hard-coded HTML)
├── styles/
│   └── lovinbowl.css          # Full theme stylesheet (28 sections, ~2000 lines)
├── scripts/
│   └── lovinbowl.js           # Gallery, quantity selector, mobile menu, scroll effects
├── brand_assets/              # Product label images (23 JPGs + 1 PSD source file)
├── menu-config.json           # Navigation structure definition (diet-first hierarchy)
├── generate-nav.js            # Builds nav-snippet.html from menu-config.json
├── nav-snippet.html           # Generated nav HTML (reference — Shift4Shop renders nav server-side)
├── catalog-structure.json     # Complete product data: pricing, ingredients, SKUs, categories
├── docs/
│   └── admin-setup.md         # Detailed Shift4Shop admin panel walkthrough
├── home-mockup.html           # Local preview: homepage
├── listing-mockup.html        # Local preview: category/listing page
├── product-mockup.html        # Local preview: product detail page
├── serve.mjs                  # Local dev server (port 3000)
├── screenshot.mjs             # Puppeteer screenshot utility for QA
└── package.json               # Node.js project config (lint, serve, generate scripts)
```

> **What gets uploaded to Shift4Shop:** `frame.html`, `listing.html`, `product.html`, `home.html`, `styles/lovinbowl.css`, `scripts/lovinbowl.js`, and everything in `brand_assets/`. The mockup files, `serve.mjs`, `screenshot.mjs`, and other dev tooling stay local.

---

## Step-by-Step Deployment Guide

### Step 1: Choose Your Plan

Go to [shift4shop.com](https://www.shift4shop.com) and sign up. For Lovin' Bowl, we recommend:

| Plan | Monthly Cost | Payment Requirement | Why |
|------|-------------|--------------------|----|
| **End-to-End (Free)** | **$0/mo** | Must use Shift4 Payments (2.9% + $0.30/txn) | Best value. Includes ALL features — Autoship subscriptions, unlimited products, unlimited staff, no bandwidth limits. US businesses only. |
| Pro | $229/mo | Any payment processor | Choose only if you need a third-party payment gateway. |

The **End-to-End plan** is strongly recommended. It includes every module listed in this guide at no monthly cost. The only fee is the standard 2.9% + $0.30 per transaction through Shift4 Payments.

After signup, you'll land in the **Online Store Manager** — this is your admin dashboard for everything.

---

### Step 2: Upload Template Files via FTP

**How to connect:**
1. In the Online Store Manager, go to **Settings → Design → Themes → FTP Information**
2. Note your FTP hostname, username, and password
3. Use an FTP client like [FileZilla](https://filezilla-project.org/) (free) or [Cyberduck](https://cyberduck.io/) (free)
4. Connect and navigate to `assets/templates/{your-template}/`

> Your template folder name is visible in **Settings → Design → Themes**. It's usually a string like `flavor-starter` or similar. Replace `{your-template}` everywhere below with this actual name.

**Upload these files:**

| Local File | Upload To | What It Does |
|-----------|-----------|-------------|
| `frame.html` | `assets/templates/{your-template}/` | Master page shell that wraps every page — header, navigation bar, footer, and the `[page_content]` token where each page's unique content renders |
| `listing.html` | `assets/templates/{your-template}/` | Category/listing page layout — product grid with cards, filter pills, breadcrumb, category description |
| `product.html` | `assets/templates/{your-template}/` | Product detail page layout — image gallery with thumbnails, price display, diet option selector, size selector, quantity picker, add-to-cart button, extended description |
| `home.html` | `assets/templates/{your-template}/` | Homepage content block — 6 hero tiles (5 proteins + Treats) that render inside `[page_content]` on the homepage |
| `styles/lovinbowl.css` | `assets/templates/{your-template}/` (same folder as frame.html) | All custom styles — 28 organized sections covering layout, header, nav, product cards, gallery, buttons, footer, homepage hero tiles, and responsive breakpoints |
| `scripts/lovinbowl.js` | `assets/templates/{your-template}/` (same folder as frame.html) | JavaScript for the image gallery (click thumbnail → swap main image), quantity selector (+/- buttons), mobile hamburger menu, and scroll effects |

**Alternative to FTP:** You can also upload files through the admin panel at **Settings → Design → Themes → File Manager**, but FTP is faster for multiple files.

---

### Step 3: Upload Brand Images

Upload **all files** from the `brand_assets/` folder to `assets/templates/{your-template}/images/` on your Shift4Shop server.

**Complete image inventory:**

| Protein | Regular | Puppy | Grain Free | Dehydrated |
|---------|---------|-------|------------|------------|
| **Beef** | `lb_beef_012325.jpg` | `lb_Beef_Puppy_012325.jpg` | `lb_beef_gf_012325.jpg` | `LB_DH Beef Liver_112519.jpg` |
| **Chicken** | `lb_chicken_012325.jpg` | `lb_Chicken_Puppy_012325.jpg` | `lb_chicken_gf_012325.jpg` | `LB_DH_Chicken Breast_112519.jpg` |
| **Lamb** | `lb_lamb_012325.jpg` | `lb_Lamb_Puppy_012325.jpg` | `lb_lamb_gf_012325.jpg` | — |
| **Salmon** | `lb_salmon_012325.jpg` | `lb_Salmon_Puppy_012325.jpg` | `lb_salmon_gf_012325.jpg` | — |
| **Pork** | `LB_Pork_030426.jpg` | `LB_Pork_Puppy_030426.jpg` | `LB_Pork_GF_030426.jpg` | — |

**Treats:**
- `LB_Chicken Liver Cookies_112519.jpg`
- `LB_Beef Liver Cookies_112519.jpg`

**Bone Broth:**
- `Bone Broth_Beef.jpg`
- `Bone Broth_turkey.jpg`

**Design reference:**
- `Shop Panels Layered.psd` (Photoshop source file — keep locally for future label designs)

> **Important:** Filenames with spaces (like `LB_DH Beef Liver_112519.jpg`) work fine when uploaded to Shift4Shop. The storefront will URL-encode them automatically.

---

### Step 4: Create the Category Hierarchy

Navigate to **Products → Categories → Add New** in the Online Store Manager.

We use a **diet-first** category structure: top-level categories are diet types, and sub-categories under each are the protein options. This mirrors the navigation bar.

#### Top-Level Categories (7 total)

Create these in order:

| # | Category Name | URL Slug | Sort Order | Has Sub-Categories? |
|---|--------------|----------|------------|-------------------|
| 1 | Regular | `regular` | 1 | Yes — 5 proteins |
| 2 | Puppy | `puppy` | 2 | Yes — 5 proteins |
| 3 | Grain Free | `grain-free` | 3 | Yes — 5 proteins |
| 4 | Dehydrated | `dehydrated` | 4 | Yes — 5 proteins |
| 5 | Bone Broth | `bone-broth` | 5 | No |
| 6 | Treats | `treats` | 6 | No |
| 7 | Our Story | `our-story` | 7 | No (content page) |

#### Sub-Categories (5 per diet, 20 total)

For **each** of Regular, Puppy, Grain Free, and Dehydrated, create these 5 protein sub-categories:

| Sub-Category | URL Slug Pattern | Example (for Regular) |
|-------------|------------------|-----------------------|
| Beef | `beef-{diet}` | `beef-regular` |
| Chicken | `chicken-{diet}` | `chicken-regular` |
| Lamb | `lamb-{diet}` | `lamb-regular` |
| Salmon | `salmon-{diet}` | `salmon-regular` |
| Pork | `pork-{diet}` | `pork-regular` |

**To create a sub-category:**
1. Go to **Products → Categories → Add New**
2. Enter the sub-category name (e.g., "Beef")
3. Set the **Parent Category** dropdown to the diet type (e.g., "Regular")
4. Set the **URL Slug** (e.g., `beef-regular`)
5. Click **Save**

Repeat for all 20 sub-categories (5 proteins × 4 diet types).

---

### Step 5: Create All 40 Products

Navigate to **Products → Add New Product** for each product below.

#### SKU Convention

`LB-{PROTEIN}-{DIET}-{SIZE}`

| Protein Code | Diet Code | Size Code |
|-------------|-----------|-----------|
| BEEF | REG (Regular) | 16 (16 oz) |
| CHKN | PUP (Puppy) | 32 (32 oz) |
| LAMB | GF (Grain Free) | |
| SLMN | DH (Dehydrated) | |
| PORK | BB (Bone Broth) | |

#### Pricing — Uniform Across All Proteins and Diet Types

| Size | Price | Weight |
|------|-------|--------|
| **16 oz** (1 lb) | **$15.00** | 1.0 lb |
| **32 oz** (2 lbs) | **$25.00** | 2.0 lb |

This flat pricing applies to every protein (Beef, Chicken, Lamb, Salmon, Pork) across every diet type (Regular, Puppy, Grain Free, Dehydrated) and also Bone Broth.

#### Available Sizes by Diet Type

| Diet Type | 16 oz | 32 oz |
|-----------|-------|-------|
| Regular | Yes | Yes |
| Puppy | Yes | Yes |
| Grain Free | Yes | Yes |
| Dehydrated | — | **32 oz only** |
| Bone Broth | — | **32 oz only** |

#### For Each Product, Fill In:

1. **Product Name:** `Lovin' Bowl {Protein} {Diet} {Size}`
   - Example: "Lovin' Bowl Beef Grain Free 16oz"
2. **SKU:** `LB-{PROTEIN}-{DIET}-{SIZE}`
   - Example: `LB-BEEF-GF-16`
3. **Category:** Assign to the matching sub-category
   - Example: Grain Free > Beef
4. **Price:** $15.00 for 16oz, $25.00 for 32oz
5. **Weight:** 1.0 lb for 16oz, 2.0 lb for 32oz
6. **Stock Status:** In Stock
7. **Description:** Ingredient list + AAFCO statement (see [Ingredient Lists](#ingredient-lists) below)
8. **Extended Description:** Detailed ingredient breakdown, feeding guide
9. **Images:** Upload 1-4 product images (see [Step 8](#step-8-product-page-image-uploads))

#### Complete Product List (40 products)

**Beef (7 products):**

| Product | SKU | Size | Price |
|---------|-----|------|-------|
| Lovin' Bowl Beef Regular 16oz | LB-BEEF-REG-16 | 16 oz | $15.00 |
| Lovin' Bowl Beef Regular 32oz | LB-BEEF-REG-32 | 32 oz | $25.00 |
| Lovin' Bowl Beef Puppy 16oz | LB-BEEF-PUP-16 | 16 oz | $15.00 |
| Lovin' Bowl Beef Puppy 32oz | LB-BEEF-PUP-32 | 32 oz | $25.00 |
| Lovin' Bowl Beef Grain Free 16oz | LB-BEEF-GF-16 | 16 oz | $15.00 |
| Lovin' Bowl Beef Grain Free 32oz | LB-BEEF-GF-32 | 32 oz | $25.00 |
| Lovin' Bowl Beef Dehydrated 32oz | LB-BEEF-DH-32 | 32 oz | $25.00 |

**Chicken (7 products):**

| Product | SKU | Size | Price |
|---------|-----|------|-------|
| Lovin' Bowl Chicken Regular 16oz | LB-CHKN-REG-16 | 16 oz | $15.00 |
| Lovin' Bowl Chicken Regular 32oz | LB-CHKN-REG-32 | 32 oz | $25.00 |
| Lovin' Bowl Chicken Puppy 16oz | LB-CHKN-PUP-16 | 16 oz | $15.00 |
| Lovin' Bowl Chicken Puppy 32oz | LB-CHKN-PUP-32 | 32 oz | $25.00 |
| Lovin' Bowl Chicken Grain Free 16oz | LB-CHKN-GF-16 | 16 oz | $15.00 |
| Lovin' Bowl Chicken Grain Free 32oz | LB-CHKN-GF-32 | 32 oz | $25.00 |
| Lovin' Bowl Chicken Dehydrated 32oz | LB-CHKN-DH-32 | 32 oz | $25.00 |

**Lamb (7 products):**

| Product | SKU | Size | Price |
|---------|-----|------|-------|
| Lovin' Bowl Lamb Regular 16oz | LB-LAMB-REG-16 | 16 oz | $15.00 |
| Lovin' Bowl Lamb Regular 32oz | LB-LAMB-REG-32 | 32 oz | $25.00 |
| Lovin' Bowl Lamb Puppy 16oz | LB-LAMB-PUP-16 | 16 oz | $15.00 |
| Lovin' Bowl Lamb Puppy 32oz | LB-LAMB-PUP-32 | 32 oz | $25.00 |
| Lovin' Bowl Lamb Grain Free 16oz | LB-LAMB-GF-16 | 16 oz | $15.00 |
| Lovin' Bowl Lamb Grain Free 32oz | LB-LAMB-GF-32 | 32 oz | $25.00 |
| Lovin' Bowl Lamb Dehydrated 32oz | LB-LAMB-DH-32 | 32 oz | $25.00 |

**Salmon (7 products):**

| Product | SKU | Size | Price |
|---------|-----|------|-------|
| Lovin' Bowl Salmon Regular 16oz | LB-SLMN-REG-16 | 16 oz | $15.00 |
| Lovin' Bowl Salmon Regular 32oz | LB-SLMN-REG-32 | 32 oz | $25.00 |
| Lovin' Bowl Salmon Puppy 16oz | LB-SLMN-PUP-16 | 16 oz | $15.00 |
| Lovin' Bowl Salmon Puppy 32oz | LB-SLMN-PUP-32 | 32 oz | $25.00 |
| Lovin' Bowl Salmon Grain Free 16oz | LB-SLMN-GF-16 | 16 oz | $15.00 |
| Lovin' Bowl Salmon Grain Free 32oz | LB-SLMN-GF-32 | 32 oz | $25.00 |
| Lovin' Bowl Salmon Dehydrated 32oz | LB-SLMN-DH-32 | 32 oz | $25.00 |

**Pork (7 products):**

| Product | SKU | Size | Price |
|---------|-----|------|-------|
| Lovin' Bowl Pork Regular 16oz | LB-PORK-REG-16 | 16 oz | $15.00 |
| Lovin' Bowl Pork Regular 32oz | LB-PORK-REG-32 | 32 oz | $25.00 |
| Lovin' Bowl Pork Puppy 16oz | LB-PORK-PUP-16 | 16 oz | $15.00 |
| Lovin' Bowl Pork Puppy 32oz | LB-PORK-PUP-32 | 32 oz | $25.00 |
| Lovin' Bowl Pork Grain Free 16oz | LB-PORK-GF-16 | 16 oz | $15.00 |
| Lovin' Bowl Pork Grain Free 32oz | LB-PORK-GF-32 | 32 oz | $25.00 |
| Lovin' Bowl Pork Dehydrated 32oz | LB-PORK-DH-32 | 32 oz | $25.00 |

**Bone Broth (1 product):**

| Product | SKU | Size | Price |
|---------|-----|------|-------|
| Lovin' Bowl Beef Bone Broth 32oz | LB-BEEF-BB-32 | 32 oz | $25.00 |

**Treats (4 products):**

| Product | SKU | Price |
|---------|-----|-------|
| Handmade Cookies - Chicken | LB-TREAT-COOKIE-CHKN | $8.00 |
| Handmade Cookies - Beef | LB-TREAT-COOKIE-BEEF | $8.00 |
| Pup Cake (Small) | LB-TREAT-CAKE-SM | $5.00 |
| Pup Cake (Large) | LB-TREAT-CAKE-LG | $7.00 |

**Product count:** 5 proteins x 3 diets x 2 sizes = 30, plus 5 dehydrated x 1 size = 5, plus 1 bone broth = 1, plus 4 treats = **40 products total**.

---

### Step 6: Configure Navigation

Go to **Settings → Design → Themes → Settings** in the Online Store Manager:

1. **Enable "Category Navigation"** — toggles the category-based nav bar on your storefront
2. **Set max displayed categories to 7** — this shows: Regular, Puppy, Grain Free, Dehydrated, Bone Broth, Treats, Our Story
3. **Enable sub-category dropdowns** — when a customer hovers over "Regular", they see a dropdown with Beef, Chicken, Lamb, Salmon, Pork
4. **Verify the rendered nav bar reads:** `Regular | Puppy | Grain Free | Dehydrated | Bone Broth | Treats | Our Story`

The navigation is **diet-first**: top-level items are the diet type, and the dropdown children are the 5 proteins. This matches how the template files (`frame.html`) expect the nav to render.

---

### Step 7: Set Up the Homepage

The homepage uses `home.html`, which contains **hard-coded hero tiles** (not dynamic product loops — Shift4Shop doesn't support dynamic homepage product grids).

After uploading `home.html`, you need to update two things:

**1. Category links** — replace the placeholder category IDs with your actual Shift4Shop category IDs:

```html
<a href="view_category.asp?cat=BEEF" class="lb-hero-tile">
<a href="view_category.asp?cat=CHKN" class="lb-hero-tile">
<a href="view_category.asp?cat=LAMB" class="lb-hero-tile">
<a href="view_category.asp?cat=SLMN" class="lb-hero-tile">
<a href="view_category.asp?cat=PORK" class="lb-hero-tile">
<a href="view_category.asp?cat=TREATS" class="lb-hero-tile lb-hero-tile--treats">
```

Find your actual category IDs in **Products → Categories** — each category has a numeric ID. Replace `BEEF`, `CHKN`, etc. with the real numbers.

**2. Image paths** — update to match your uploaded image locations:

```html
<img src="assets/templates/{your-template}/images/lb_beef_012325.jpg" alt="Beef" />
```

---

### Step 8: Product Page Image Uploads

For each of your 40 products, upload **up to 4 images** to the Shift4Shop product gallery (in **Products → [product] → Images**):

1. **Image 1:** Front label — the branded bag image from `brand_assets/`
2. **Image 2:** Ingredients/nutrition label
3. **Image 3:** Bowl/serving suggestion photo
4. **Image 4:** Lifestyle shot (dog eating, customer photo, etc.)

The `product.html` template supports up to 4 gallery thumbnails. The first image is displayed as the main product image. Clicking a thumbnail swaps the main image via JavaScript (`lovinbowl.js`).

---

### Step 9: Configure Payment Processing

Navigate to **Settings → Payment** in the Online Store Manager.

#### Recommended: Shift4 Payments (Required for Free Plan)

1. Go to **Settings → Payment → Shift4 Payments**
2. Follow the activation wizard — provide your business information, bank account for deposits
3. Once active, your store accepts: **credit cards, debit cards, Apple Pay, Google Pay**
4. Rate: **2.9% + $0.30 per transaction**
5. Shift4 Payments automatically includes **Kount AI Fraud Prevention** at no extra cost — this uses AI to detect stolen cards and illegitimate chargebacks

#### Add PayPal as a Secondary Option

1. Go to **Settings → Payment → PayPal**
2. Connect your PayPal Business account
3. Enable **PayPal Checkout** which includes:
   - PayPal Pay Later (customers pay in installments, you get paid upfront)
   - Pay in 4 (split into 4 payments)
   - Venmo (if your customers use it)
4. PayPal "Pay Later" messaging will auto-display on product and cart pages

#### Optional: Enable 3D Secure 2.0

For an extra layer of fraud prevention:
1. Go to **Modules** → search "3D Secure"
2. Enable and configure via Cardinal Commerce
3. This verifies cardholder identity through device fingerprinting, spending patterns, and biometrics — reducing chargebacks significantly

---

### Step 10: Configure Shipping

Navigate to **Settings → Shipping** in the Online Store Manager.

#### Enable Real-Time Carrier Rates

For a fresh dog food business, you'll want real-time shipping rates. Enable one or more:

| Carrier | How to Enable | Best For |
|---------|--------------|---------|
| **USPS** | Settings → Shipping → USPS. Get discounted rates (20-40% off retail) through the built-in Stamps.com partnership | Most residential deliveries, best rates for packages under 5 lbs |
| **UPS** | Settings → Shipping → UPS. Enter your UPS account number | Larger/heavier orders, reliable tracking |
| **FedEx** | Settings → Shipping → FedEx. Enter your FedEx credentials | Priority/expedited shipping options |

#### Recommended: Add ShipStation Integration

ShipStation is the best shipping software for Shift4Shop stores:
1. Sign up at [shipstation.com](https://www.shipstation.com)
2. In Shift4Shop: **Settings → Shipping → ShipStation** → enter your ShipStation credentials
3. ShipStation provides:
   - **Multi-carrier label printing** (USPS, UPS, FedEx in one dashboard)
   - **Batch processing** (print 50 labels at once)
   - **Automation rules** (e.g., orders under 2 lbs auto-assign USPS First Class)
   - **Branded tracking pages** (your logo, your colors, your messaging)
   - **Discounted USPS rates** through their partnership

#### Enable Carrier Delivery Notifications

This is critical for perishable food orders — customers need to know exactly when their food arrives:
1. Go to **Modules** → search "Carrier Delivery Notifications"
2. Check **Enable** → click **Save** → click **Settings**
3. Configure email notifications for:
   - Order shipped / out for delivery
   - Delivery confirmed by carrier
4. Supports UPS, USPS, FedEx tracking numbers
5. Optional: Add SMS notifications via **Text Request** integration

#### Optional: Enable In-Store Pickup

If Lovin' Bowl has a physical location:
1. **Modules** → search "In-Store Pickup"
2. Enable and configure your pickup location(s)
3. Customers can choose "In-Store Pickup" at checkout (shipping cost removed, tax auto-calculated by location)

---

### Step 11: Enable Essential Modules

Navigate to **Modules** in the Online Store Manager sidebar. For each module below: search the module name, check **Enable**, click **Save**, then click **Settings** to configure.

#### Autoship / Recurring Orders (Subscriptions)

This is the **single most important module** for a fresh dog food business. Customers set up automatic reorders on a schedule.

1. **Modules** → search "Autoship" → **Enable**
2. Configure subscription intervals: **Every 2 weeks, Monthly, Every 6 weeks, Every 2 months**
3. Customers manage subscriptions from their account dashboard (pause, skip, cancel, change products)
4. Cards are charged automatically and orders are created on schedule
5. Consider offering a 10-15% discount on Autoship orders to incentivize subscriptions

> **Note:** Autoship is available on the End-to-End (free) plan and the Pro plan ($229/mo). It is NOT available on Basic or Plus plans.

#### Product Reviews & Star Ratings

Build trust and social proof:
1. **Modules** → search "Product Reviews" → **Enable**
2. In Settings, enable:
   - **Auto-review-request emails** — sends an email X days after delivery asking for a review
   - **Helpfulness voting** — other customers can upvote helpful reviews
   - **Hide stars on zero-review products** — until a product gets its first review, no empty stars are shown
3. Reviews appear on the product detail page below the description

#### Waiting List / Back-in-Stock Alerts

Essential for managing limited-batch fresh food inventory:
1. **Modules** → search "Waiting List" → **Enable**
2. When a product goes out of stock, the "Add to Cart" button is automatically replaced with a "Notify Me" signup form
3. When you restock, all signed-up customers receive an automatic email notification

#### Inventory Control

1. **Modules** → search "Inventory Control" → **Enable**
2. For each product, set:
   - **Stock level** — how many units you have
   - **Low stock threshold** — get an email alert when inventory drops below this number (e.g., 10 units)
3. This is critical for perishable food — you don't want to oversell items you can't fulfill

#### Reward Points Loyalty Program

Drive repeat purchases and brand loyalty:
1. **Modules** → search "Reward Points" → **Enable**
2. Configure:
   - **Rewards Multiplier** — how many points per dollar spent (e.g., 1 point per $1)
   - **Redemption value** — how many points = $1 off (e.g., 100 points = $1)
   - **Which products earn points** — you can include or exclude specific products/categories
   - **Minimum points to redeem** — set a threshold so customers build up points before using them
3. Customers see their points balance on their account page and at checkout

#### Gift Certificates

1. **Modules** → search "Gift Certificates" → **Enable**
2. Allows customers to buy digital gift cards with custom values
3. Great for "Gift a month of fresh dog food" marketing

---

### Step 12: Enable Marketing & Growth Modules

#### Abandoned Cart Saver

Recover lost revenue from customers who add items to cart but don't complete checkout:
1. **Modules** → search "Abandoned Cart Saver" → **Enable**
2. Create a multi-email recovery campaign:
   - **Email 1** (1 hour after abandonment): "You left something in your cart!" — friendly reminder, no discount
   - **Email 2** (24 hours): "Still thinking about it?" — add social proof (reviews, AAFCO statement)
   - **Email 3** (72 hours): "Here's 10% off to complete your order" — include a coupon code
3. Customize email templates with your brand colors and product images
4. This module alone can recover 10-15% of abandoned carts

#### Newsletter Module

Built-in email marketing:
1. **Modules** → search "Newsletter" → **Enable**
2. Build subscriber lists from checkout opt-ins and footer signup forms
3. Send campaigns for:
   - New recipe/flavor launches
   - Seasonal promotions
   - Nutrition tips and feeding guides
   - Brand story content

#### Autoresponder Module

Automated post-purchase email sequences:
1. **Modules** → search "Autoresponder" → **Enable**
2. Set up triggers like:
   - **3 days after first order:** "How is your dog enjoying the food? Here's a feeding guide."
   - **14 days after order:** "Time to reorder? Set up Autoship and save."
   - **30 days after order:** "Leave a review and earn 50 reward points."

#### Automation Rules

Powerful workflow engine for custom business logic:
1. **Modules** → search "Automation Rules" → **Enable**
2. Example rules:
   - **Trigger:** Order total > $100 → **Action:** Add customer to "VIP" group
   - **Trigger:** Customer's 3rd order → **Action:** Send "Thank you for your loyalty" email with exclusive coupon
   - **Trigger:** Product purchased = Puppy variety → **Action:** Send puppy-specific feeding guide email

#### Promotion Manager

Create discounts, coupons, and special offers:
1. **Modules** → search "Promotion Manager" → **Enable**
2. Types of promotions you can create:
   - **Percentage off** (e.g., 20% off first order)
   - **Dollar off** (e.g., $5 off orders over $50)
   - **Free shipping** (e.g., free shipping on orders over $75)
   - **BOGO** (e.g., buy 2 bags, get 1 free)
   - **Coupon codes** (limited use, date range, minimum order)
   - **Customer group-specific** (e.g., VIP-only pricing)

#### Affiliate Program Module

Partner with pet influencers and bloggers:
1. **Modules** → search "Affiliate" → **Enable**
2. Configure:
   - **Commission rate** (e.g., 10% of referred sales)
   - **Cookie duration** (e.g., 30 days)
   - **Approval workflow** (manual or auto-approve affiliates)
   - **Payout method and minimum threshold**
3. Affiliates get unique tracking links to share on their social media, blogs, and YouTube channels
4. Integrates with **ShareASale** for third-party affiliate network management

#### Upsell & Cross-Sell Features

Display related products on product pages:
1. This is configured per-product in **Products → [product] → Related Products**
2. Set up "Frequently Purchased Together" (e.g., Beef Regular 32oz + Chicken Liver Cookies)
3. Set up "Customers Also Viewed" recommendations
4. The `product.html` template includes a "Frequently Purchased Together" section that renders these automatically

---

### Step 13: SEO Configuration

Shift4Shop has strong built-in SEO tools. Here's how to configure them:

#### For Every Product Page:
1. Go to **Products → [product] → SEO** tab
2. Set:
   - **Page Title:** "Lovin' Bowl Beef Regular 32oz | Fresh Dog Food" (under 60 characters)
   - **Meta Description:** "Gently cooked fresh dog food with Ground Beef, Sweet Potatoes, Kale & superfoods. AAFCO-formulated for adult maintenance. $25 for 2 lbs." (under 160 characters)
   - **URL Slug:** `lovin-bowl-beef-regular-32oz`

#### For Every Category Page:
1. Go to **Products → Categories → [category] → SEO** tab
2. Set the page title, meta description, and URL slug

#### Global SEO Settings:
1. **Settings → General → SEO** tab:
   - Enable **SEO-friendly URLs** (already on by default)
   - Enable **Canonical URLs** (prevents duplicate content penalties)
   - Verify **XML Sitemap** auto-generation is active (submit to Google Search Console)
2. **Settings → General → Tracking:**
   - Add your **Google Analytics V4** measurement ID (e.g., `G-XXXXXXXXXX`)
   - Add your **Facebook Pixel ID** for ad tracking
3. **301 Redirects:** If migrating from an old site, go to **Marketing → 301 Redirects** to map old URLs to new ones

#### Google Shopping (Product Feeds):
1. **Modules** → search "Google Product Feeds" → **Enable**
2. Configure your product feed — this exports your entire catalog to Google Merchant Center daily
3. Sign up at [Google Merchant Center](https://merchants.google.com/) and submit your feed URL
4. Run **Google Shopping ads** and **Google Performance Max campaigns** to drive traffic

#### Schema.org Structured Data:
- Built into the templates automatically — product pages output JSON-LD structured data for price, availability, reviews, and brand
- Verify at [Google Rich Results Test](https://search.google.com/test/rich-results) after going live

---

### Step 14: Security & Compliance

Most security features are automatic, but verify these:

| Feature | Status | Action Required |
|---------|--------|----------------|
| **SSL Certificate** | Included free | None — automatically active |
| **PCI DSS Compliance** | Shift4Shop is PCI certified | None — they handle it |
| **Kount AI Fraud Prevention** | Included with Shift4 Payments | None — automatic |
| **2-Factor Authentication** | Available | **Enable:** Settings → Security → 2-Factor Authentication |
| **DDoS Protection** | Built-in via Cloudflare | None — automatic |
| **Daily Automated Backups** | Built-in | None — automatic with rollback capability |
| **GDPR Toolkit** | Available | **Enable:** Modules → search "GDPR" → Enable. Adds cookie consent popup and privacy checkboxes |
| **Tokenized Payment Processing** | Included with Shift4 Payments | None — card data never touches your server |

**Recommended:** Enable **2-Factor Authentication** and the **GDPR Toolkit** before going live. 2FA protects your admin panel, and GDPR compliance shows professionalism even for US-only stores.

---

### Step 15: Analytics & Tracking

#### Google Analytics V4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (starts with `G-`)
3. In Shift4Shop: **Settings → General → Tracking** → paste the Measurement ID
4. GA4 provides AI-based insights: predicted purchase probability, churn risk, revenue forecasting

#### Facebook Pixel
1. Create a pixel at [Facebook Business Manager](https://business.facebook.com/)
2. Copy the Pixel ID
3. In Shift4Shop: **Settings → General → Tracking** → paste the Pixel ID
4. This enables: conversion tracking, dynamic retargeting ads, lookalike audiences

#### Built-In Reports
Access via **Reports** in the Online Store Manager sidebar:
- **Sales Reports:** Revenue, orders, average order value, trends
- **Product Reports:** Top sellers, views vs. purchases, inventory movement
- **Customer Reports:** New vs. returning, lifetime value, geography
- **Marketing Reports:** Coupon usage, affiliate performance, newsletter engagement

#### Optional: QuickBooks Integration
1. **Modules** → search "QuickBooks" → **Enable**
2. Auto-syncs orders and financial data to QuickBooks for accounting and tax preparation

#### Optional: Avalara Tax Automation
1. **Modules** → search "Avalara" → **Enable**
2. Automatically calculates correct sales tax for every US jurisdiction — essential if shipping to multiple states

---

### Step 16: Social Commerce

#### Facebook Shop
1. **Modules** → search "Facebook" → **Enable**
2. Connect your Facebook Business Page
3. Your entire product catalog syncs to Facebook Shop
4. Customers can browse and buy directly on Facebook
5. Orders flow back into your Shift4Shop dashboard

#### Instagram Shopping
1. First, set up Facebook Shop (above) — Instagram Shopping requires it
2. In Instagram, switch to a Business account and apply for Shopping
3. Once approved, you can tag products in Instagram posts and Stories
4. Customers tap the tag → see price → tap to buy → land on your Shift4Shop product page

#### Google Shopping
1. Set up Google Product Feeds (Step 13 above)
2. Your products appear in Google Shopping results, Google Search, and Google Display Network

---

### Step 17: Go-Live Checklist

Before flipping the switch, verify everything works:

- [ ] **Template files uploaded** — frame.html, listing.html, product.html, home.html, CSS, JS
- [ ] **Brand images uploaded** — all 23 JPGs from `brand_assets/`
- [ ] **7 categories created** — Regular, Puppy, Grain Free, Dehydrated, Bone Broth, Treats, Our Story
- [ ] **20 sub-categories created** — 5 proteins under each of the 4 diet categories
- [ ] **40 products created** — with correct SKUs, prices, descriptions, and images
- [ ] **Navigation working** — 7 top-level items, dropdowns showing 5 proteins each
- [ ] **Homepage tiles linking** — each tile goes to the correct protein/category page
- [ ] **Payment processing active** — test a $1 transaction and refund it
- [ ] **Shipping rates calculating** — add items to cart, enter a test address, verify rates appear
- [ ] **SSL active** — site loads at `https://` with padlock
- [ ] **Mobile responsive** — test on a real phone, not just browser resize
- [ ] **Autoship working** — test a subscription setup from a customer account
- [ ] **Abandoned cart emails firing** — abandon a test cart, verify email arrives
- [ ] **Review request emails configured** — verify autoresponder timing
- [ ] **Google Analytics tracking** — verify real-time data appears in GA4
- [ ] **Facebook Pixel firing** — use Facebook Pixel Helper browser extension to verify

---

## Product Catalog Reference

For the complete product data including all SKUs, pricing, ingredients, and category assignments, see [`catalog-structure.json`](catalog-structure.json).

For a step-by-step admin panel walkthrough with screenshots guidance, see [`docs/admin-setup.md`](docs/admin-setup.md).

---

## Pricing

**Uniform flat pricing across all proteins and diet types:**

| Size | Price |
|------|-------|
| 16 oz (1 lb) | **$15.00** |
| 32 oz (2 lbs) | **$25.00** |

This applies to Beef, Chicken, Lamb, Salmon, and Pork in Regular, Puppy, Grain Free, and Dehydrated varieties, as well as Bone Broth.

**Treats:**

| Product | Price |
|---------|-------|
| Handmade Cookies (Chicken or Beef) | $8.00 |
| Pup Cake (Small) | $5.00 |
| Pup Cake (Large) | $7.00 |

---

## Ingredient Lists

**Beef:** Ground Beef, Sweet Potatoes, Beef Liver, Beef Heart, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Chicken:** Chicken Thighs, Chicken Breast, Sweet Potatoes, Chicken Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Lamb:** Ground Lamb, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Pumpkin, Quinoa, Carrots, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Salmon:** Salmon, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Pork:** Ground Pork, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**AAFCO Statement** (append to each product description):
> "Our {Protein} Diet is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrition Profiles for maintenance."

---

## User Flow

```
Homepage (protein tiles)
  |- Click "Beef" -> Product page for Beef
  |    |- Choose diet: Regular | Dehydrated | Puppy | Grain Free
  |    |- Choose size: 16oz | 32oz
  |    '- Add to Cart
  |
  |- Click "Treats" -> Treats listing page
  |    |- Cookies, Pup Cakes
  |    '- Add to Cart
  |
  '- Click "Bone Broth" (via nav) -> Bone Broth product page

Nav bar (diet-first)
  |- Regular    -> dropdown: Beef, Chicken, Lamb, Salmon, Pork
  |- Puppy      -> dropdown: Beef, Chicken, Lamb, Salmon, Pork
  |- Grain Free -> dropdown: Beef, Chicken, Lamb, Salmon, Pork
  |- Dehydrated -> dropdown: Beef, Chicken, Lamb, Salmon, Pork
  |- Bone Broth
  |- Treats
  '- Our Story
```

---

## Optional Modules & Plugins

Beyond the essential modules covered in the deployment guide, Shift4Shop offers additional modules you can enable as the business grows. All are found in **Modules** in the Online Store Manager sidebar.

### Customer Engagement

| Module | What It Does | When to Enable |
|--------|-------------|----------------|
| **Product Q&A** | Customers ask questions on product pages; you answer publicly. Great for ingredient/allergy/nutrition questions. | Day 1 — builds trust |
| **Product Comparison** | Side-by-side comparison of product specs | Optional — useful if customers want to compare diets |
| **Social Wish Lists** | Customers create shareable wish lists on social media | Enable for holidays and gifting seasons |
| **Gift Registry** | Public registries — brand as "New Puppy Registry" | Creative marketing angle for new puppy owners |
| **Tell-a-Friend** | Customers email product links to friends | Low effort, word-of-mouth referrals |

### Sales & Conversion

| Module | What It Does | When to Enable |
|--------|-------------|----------------|
| **Daily Deals** | Rotating daily discounts with countdown timer | Enable for flash sales and seasonal promotions |
| **Group Deals** | Social buying — discount unlocks when X people buy | Viral mechanic for new flavor launches |
| **Pre-Orders** | Accept orders for products not yet in stock | Perfect for seasonal recipes or new flavors |
| **Make-an-Offer** | Customers propose a price; you accept/reject/counter | Useful for large wholesale/bulk orders |
| **Promotion Scheduler** | Time-based promotion scheduling (exact hour + minute precision) | For planned flash sales and holiday campaigns |

### Operations & Fulfillment

| Module | What It Does | When to Enable |
|--------|-------------|----------------|
| **Purchase Order Module** | Auto-generate POs to suppliers when stock runs low | When you have regular ingredient suppliers |
| **Bulk Data Import/Export** | CSV import/export for products, customers, orders | When managing large catalog updates |
| **Customer Groups** | Segment customers into groups (VIP, Wholesale, Breeder) with custom pricing | When adding wholesale/B2B channel |
| **Sales Rep Module** | Assign sales reps, track performance, manage commissions | If adding a B2B wholesale team |
| **CRM Module** | Built-in customer database with segmentation, notes, communication tracking | When customer base exceeds 500+ |

### Content & Brand

| Module | What It Does | When to Enable |
|--------|-------------|----------------|
| **Built-in Blog** | Full blogging platform with categories, tags, SEO-friendly URLs | Day 1 — nutrition articles, breed guides, brand story |
| **Landing Page Creator** | Build promotional landing pages | For ad campaigns (e.g., "Try Our Puppy Formula") |
| **Homepage Carousel Slider** | Rotating hero banners on homepage | If you want seasonal/promotional banners above the protein tiles |

### Third-Party Integrations

| Integration | What It Does | How to Connect |
|-------------|-------------|----------------|
| **Mailchimp** | Sync subscribers and purchase data to Mailchimp for advanced email marketing | Modules → search "Mailchimp" |
| **QuickBooks** | Auto-sync orders and financial data for accounting | Modules → search "QuickBooks" |
| **Avalara** | Automated sales tax calculation for all US jurisdictions | Modules → search "Avalara" |
| **TaxCloud** | Alternative automated tax compliance | Modules → search "TaxCloud" |
| **ShipStation** | Multi-carrier shipping management and label printing | Settings → Shipping → ShipStation |
| **AfterShip** | Branded post-purchase tracking page and notifications | Modules → search "AfterShip" |
| **ShareASale** | Third-party affiliate network management | Via Affiliate Program Module settings |
| **Amazon Marketplace** | Sync products and orders with Amazon Seller Central | Modules → search "Amazon" |
| **eBay** | Sync products and orders with eBay listings | Modules → search "eBay" |

---

## Local Development

```bash
npm install           # Install dependencies (puppeteer for screenshots)
npm run serve         # Start dev server at http://localhost:3000
npm run generate      # Rebuild nav-snippet.html from menu-config.json
npm run lint          # HTMLHint all template + mockup files
```

**Local preview routes:**

| URL | File | Description |
|-----|------|-------------|
| `/` | `home-mockup.html` | Homepage with protein hero tiles |
| `/listing` | `listing-mockup.html` | Category page (Regular diet, all proteins) |
| `/product` | `product-mockup.html` | Product detail page (Beef) |
| `/frame` | `frame.html` | Master template shell (raw) |

**Taking screenshots for QA:**

```bash
# Desktop (1280px)
node screenshot.mjs http://localhost:3000 homepage-desktop 1280

# Tablet (768px)
node screenshot.mjs http://localhost:3000 homepage-tablet 768

# Mobile (375px)
node screenshot.mjs http://localhost:3000 homepage-mobile 375
```

Screenshots save to `./screenshots/screenshot-N-{label}.png` (auto-incremented).

---

## Template Variable Reference

These tokens are used in the Shift4Shop template files (`frame.html`, `listing.html`, `product.html`). They are replaced server-side by Shift4Shop with actual content. **Never edit or remove them.**

| Token | Where Used | Renders As |
|-------|-----------|-----------|
| `[page_content]` | frame.html | The page-specific content (listing, product, homepage) |
| `[TITLE]` | frame.html | Page title |
| `[name]` | product.html | Product name |
| `[item_price]` | product.html | Product price |
| `[description]` | product.html | Product description |
| `[extendeddescription]` | product.html | Extended description |
| `[image1]` - `[image4]` | product.html | Product gallery image URLs |
| `[CATEGORY_FULLLINE]` | product.html | Breadcrumb trail |
| `[add_to_cart]` | product.html | Add to Cart form |

**Block comments** like `<!--START: BLOCK-->...<!--END: BLOCK-->` must stay exactly as-is — they control conditional rendering. This includes the intentional typo `<!--END: SUB_CATEGORIEST-->` which is a known Shift4Shop quirk.

---

## Important Notes

- **Bootstrap 3 + jQuery** are intentionally loaded in `frame.html` — Shift4Shop's checkout, account, and system pages depend on them. Do not remove.
- **All custom CSS uses the `.lb-*` prefix** to avoid collisions with Bootstrap and Shift4Shop system styles.
- **The homepage uses hard-coded tiles** — Shift4Shop doesn't support dynamic product listing on the homepage, so `home.html` contains static HTML for the 6 protein/treats tiles.
- **Brand images use a navy (#0f172a) background** in their design. The hero tile CSS uses this same color as a fallback background to seamlessly blend with the images.
- **The `home.html` file needs manual category ID updates** after creating your categories in Shift4Shop (see Step 7).

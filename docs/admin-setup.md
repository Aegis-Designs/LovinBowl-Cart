# Shift4Shop Admin Setup Guide — Lovin' Bowl

This guide walks through creating the full product catalog in the Shift4Shop admin panel.

## Category Hierarchy (Diet-First)

Create these categories in **Products → Categories → Add New**:

### Top-Level Categories (6 total)

| # | Category Name | URL Slug | Sort Order |
|---|--------------|----------|------------|
| 1 | Regular | regular | 1 |
| 2 | Puppy | puppy | 2 |
| 3 | Grain Free | grain-free | 3 |
| 4 | Dehydrated | dehydrated | 4 |
| 5 | Treats | treats | 5 |
| 6 | Our Story | our-story | 6 |

### Sub-Categories (5 per diet, 20 total)

For **each** diet category (Regular, Puppy, Grain Free, Dehydrated), create these protein sub-categories:

| Sub-Category | Parent | URL Slug Pattern |
|-------------|--------|------------------|
| Beef | {Diet} | beef-{diet} |
| Chicken | {Diet} | chicken-{diet} |
| Lamb | {Diet} | lamb-{diet} |
| Salmon | {Diet} | salmon-{diet} |
| Pork | {Diet} | pork-{diet} |

**Example for Regular:**
- Regular > Beef → `beef-regular`
- Regular > Chicken → `chicken-regular`
- Regular > Lamb → `lamb-regular`
- Regular > Salmon → `salmon-regular`
- Regular > Pork → `pork-regular`

---

## Products

### SKU Convention

`LB-{PROTEIN}-{DIET}-{SIZE}`

| Protein Code | Diet Code | Size Code |
|-------------|-----------|-----------|
| BEEF | REG (Regular) | 16 (16oz) |
| CHKN | PUP (Puppy) | 32 (32oz) |
| LAMB | GF (Grain Free) | |
| SLMN | DH (Dehydrated) | |
| PORK | | |

### Bag Sizes Per Diet Type

| Diet Type | Available Sizes |
|-----------|----------------|
| Regular | 16oz, 32oz |
| Puppy | 16oz, 32oz |
| Grain Free | 16oz, 32oz |
| Dehydrated | **32oz only** |

### Pricing (from current store)

**32oz (2 lbs) — base price:**

| Protein | Regular | Puppy | Grain Free | Dehydrated (+$5) |
|---------|---------|-------|------------|-------------------|
| Beef | $24.00 | $25.00 | $24.00 | $29.00 |
| Chicken | $24.00 | $25.00 | $24.00 | $29.00 |
| Lamb | $25.00 | $25.00 | $25.00 | $30.00 |
| Salmon | $25.00 | $25.00 | $25.00 | $30.00 |
| Pork | $25.00 | $25.00 | $25.00 | $30.00 |

**16oz (1 lb) — estimated pricing:**

| Protein | Regular | Puppy | Grain Free |
|---------|---------|-------|------------|
| Beef | $14.00 | $15.00 | $14.00 |
| Chicken | $14.00 | $15.00 | $14.00 |
| Lamb | $15.00 | $15.00 | $15.00 |
| Salmon | $15.00 | $15.00 | $15.00 |
| Pork | $15.00 | $15.00 | $15.00 |

> **Note:** 16oz pricing is estimated at ~60% of 32oz. Verify with actual store pricing.

### Product Count

- 5 proteins × 3 diet types × 2 sizes = **30 products**
- 5 proteins × 1 dehydrated × 1 size = **5 products**
- **Total: 35 diet products** + 4 Treats = **39 products**

### Creating Each Product

Go to **Products → Add New Product** for each:

1. **Product Name:** `Lovin' Bowl {Protein} {Diet} {Size}`
   - Example: "Lovin' Bowl Beef Grain Free 16oz"

2. **SKU:** `LB-{PROTEIN}-{DIET}-{SIZE}`
   - Example: `LB-BEEF-GF-16`

3. **Category:** Assign to the matching sub-category
   - Example: Beef > Grain Free

4. **Price:** See pricing tables above

5. **Weight:**
   - 16oz = 1.0 lb
   - 32oz = 2.0 lb

6. **Images:** Upload product photos (up to 4 per Shift4Shop gallery)
   - Image 1: Front of bag (branded label)
   - Image 2: Ingredients/nutrition
   - Image 3: Bowl/serving suggestion
   - Image 4: Lifestyle shot

7. **Description:** Ingredient list + AAFCO statement (see below)

8. **Extended Description:** Detailed info, feeding guide, ingredient list

### Ingredient Lists (from current store)

**Beef:** Ground Beef, Sweet Potatoes, Beef Liver, Beef Heart, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Chicken:** Chicken Thighs, Chicken Breast, Sweet Potatoes, Chicken Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Lamb:** Ground Lamb, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Pumpkin, Quinoa, Carrots, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Salmon:** Salmon, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**Pork:** Ground Pork, Sweet Potatoes, Beef Heart, Beef Liver, Brown Rice, Quinoa, Carrots, Apples, Kale, Flax Seed Powder, Butter, Wheat Germ, Calcium Citrate, Brewers Yeast, Turmeric, Ginger, Spirulina, Apple Cider Vinegar, Olive Oil, Water.

**AAFCO Statement (append to each):** "Our {Protein} Diet is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrition Profiles for maintenance."

---

## Full Product List (Quick Reference)

### Beef (7 products)
| Product | SKU | Size | Price | Category |
|---------|-----|------|-------|----------|
| Lovin' Bowl Beef Regular 16oz | LB-BEEF-REG-16 | 16oz | $14.00 | Beef > Regular |
| Lovin' Bowl Beef Regular 32oz | LB-BEEF-REG-32 | 32oz | $24.00 | Beef > Regular |
| Lovin' Bowl Beef Puppy 16oz | LB-BEEF-PUP-16 | 16oz | $15.00 | Beef > Puppy |
| Lovin' Bowl Beef Puppy 32oz | LB-BEEF-PUP-32 | 32oz | $25.00 | Beef > Puppy |
| Lovin' Bowl Beef Grain Free 16oz | LB-BEEF-GF-16 | 16oz | $14.00 | Beef > Grain Free |
| Lovin' Bowl Beef Grain Free 32oz | LB-BEEF-GF-32 | 32oz | $24.00 | Beef > Grain Free |
| Lovin' Bowl Beef Dehydrated 32oz | LB-BEEF-DH-32 | 32oz | $29.00 | Beef > Dehydrated |

### Chicken (7 products)
| Product | SKU | Size | Price | Category |
|---------|-----|------|-------|----------|
| Lovin' Bowl Chicken Regular 16oz | LB-CHKN-REG-16 | 16oz | $14.00 | Chicken > Regular |
| Lovin' Bowl Chicken Regular 32oz | LB-CHKN-REG-32 | 32oz | $24.00 | Chicken > Regular |
| Lovin' Bowl Chicken Puppy 16oz | LB-CHKN-PUP-16 | 16oz | $15.00 | Chicken > Puppy |
| Lovin' Bowl Chicken Puppy 32oz | LB-CHKN-PUP-32 | 32oz | $25.00 | Chicken > Puppy |
| Lovin' Bowl Chicken Grain Free 16oz | LB-CHKN-GF-16 | 16oz | $14.00 | Chicken > Grain Free |
| Lovin' Bowl Chicken Grain Free 32oz | LB-CHKN-GF-32 | 32oz | $24.00 | Chicken > Grain Free |
| Lovin' Bowl Chicken Dehydrated 32oz | LB-CHKN-DH-32 | 32oz | $29.00 | Chicken > Dehydrated |

### Lamb (7 products)
| Product | SKU | Size | Price | Category |
|---------|-----|------|-------|----------|
| Lovin' Bowl Lamb Regular 16oz | LB-LAMB-REG-16 | 16oz | $15.00 | Lamb > Regular |
| Lovin' Bowl Lamb Regular 32oz | LB-LAMB-REG-32 | 32oz | $25.00 | Lamb > Regular |
| Lovin' Bowl Lamb Puppy 16oz | LB-LAMB-PUP-16 | 16oz | $15.00 | Lamb > Puppy |
| Lovin' Bowl Lamb Puppy 32oz | LB-LAMB-PUP-32 | 32oz | $25.00 | Lamb > Puppy |
| Lovin' Bowl Lamb Grain Free 16oz | LB-LAMB-GF-16 | 16oz | $15.00 | Lamb > Grain Free |
| Lovin' Bowl Lamb Grain Free 32oz | LB-LAMB-GF-32 | 32oz | $25.00 | Lamb > Grain Free |
| Lovin' Bowl Lamb Dehydrated 32oz | LB-LAMB-DH-32 | 32oz | $30.00 | Lamb > Dehydrated |

### Salmon (7 products)
| Product | SKU | Size | Price | Category |
|---------|-----|------|-------|----------|
| Lovin' Bowl Salmon Regular 16oz | LB-SLMN-REG-16 | 16oz | $15.00 | Salmon > Regular |
| Lovin' Bowl Salmon Regular 32oz | LB-SLMN-REG-32 | 32oz | $25.00 | Salmon > Regular |
| Lovin' Bowl Salmon Puppy 16oz | LB-SLMN-PUP-16 | 16oz | $15.00 | Salmon > Puppy |
| Lovin' Bowl Salmon Puppy 32oz | LB-SLMN-PUP-32 | 32oz | $25.00 | Salmon > Puppy |
| Lovin' Bowl Salmon Grain Free 16oz | LB-SLMN-GF-16 | 16oz | $15.00 | Salmon > Grain Free |
| Lovin' Bowl Salmon Grain Free 32oz | LB-SLMN-GF-32 | 32oz | $25.00 | Salmon > Grain Free |
| Lovin' Bowl Salmon Dehydrated 32oz | LB-SLMN-DH-32 | 32oz | $30.00 | Salmon > Dehydrated |

### Pork (7 products)
| Product | SKU | Size | Price | Category |
|---------|-----|------|-------|----------|
| Lovin' Bowl Pork Regular 16oz | LB-PORK-REG-16 | 16oz | $15.00 | Pork > Regular |
| Lovin' Bowl Pork Regular 32oz | LB-PORK-REG-32 | 32oz | $25.00 | Pork > Regular |
| Lovin' Bowl Pork Puppy 16oz | LB-PORK-PUP-16 | 16oz | $15.00 | Pork > Puppy |
| Lovin' Bowl Pork Puppy 32oz | LB-PORK-PUP-32 | 32oz | $25.00 | Pork > Puppy |
| Lovin' Bowl Pork Grain Free 16oz | LB-PORK-GF-16 | 16oz | $15.00 | Pork > Grain Free |
| Lovin' Bowl Pork Grain Free 32oz | LB-PORK-GF-32 | 32oz | $25.00 | Pork > Grain Free |
| Lovin' Bowl Pork Dehydrated 32oz | LB-PORK-DH-32 | 32oz | $30.00 | Pork > Dehydrated |

### Treats (4 products)
| Product | SKU | Price | Category |
|---------|-----|-------|----------|
| Handmade Cookies - Chicken | LB-TREAT-COOKIE-CHKN | $8.00 | Treats |
| Handmade Cookies - Beef | LB-TREAT-COOKIE-BEEF | $8.00 | Treats |
| Pup Cake (Small) | LB-TREAT-CAKE-SM | $5.00 | Treats |
| Pup Cake (Large) | LB-TREAT-CAKE-LG | $7.00 | Treats |

---

## Navigation Settings

In **Settings → Design → Themes → Settings:**

1. Enable "Category Navigation" display
2. Set max displayed categories to **6** (Regular, Puppy, Grain Free, Dehydrated, Treats, Our Story)
3. Enable sub-category dropdowns — each diet shows its 5 protein children
4. Verify the nav bar renders as: `Regular | Puppy | Grain Free | Dehydrated | Treats | Our Story`

---

## Template File Deployment

Upload these files to your Shift4Shop template folder via FTP or admin File Manager:

| Local File | Upload To |
|-----------|-----------|
| `frame.html` | `assets/templates/{your-template}/` |
| `listing.html` | `assets/templates/{your-template}/` |
| `product.html` | `assets/templates/{your-template}/` |
| `styles/lovinbowl.css` | `assets/templates/{your-template}/css/` or alongside frame.html |
| `scripts/lovinbowl.js` | `assets/templates/{your-template}/js/` |

Replace `{your-template}` with your actual Shift4Shop template folder name.

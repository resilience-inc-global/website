# How to Customize robots.txt and sitemap.xml

## 📝 Instructions

Both files need your **GitHub username** to work properly.

### 1. robots.txt

**What to change:**
Replace `YOUR_USERNAME` with your actual GitHub username (here: resilience-inc-global).

**Example:**
If your GitHub username is `resilience-inc-global`, change:

```
Sitemap: https://YOUR_USERNAME.github.io/website/sitemap.xml
```

to:

```
Sitemap: https://resilience-inc-global.github.io/resilience-inc/sitemap.xml
```

**Where to put it:**
Place `robots.txt` in the **root** of your repository (same level as index.html)

-----

### 2. sitemap.xml

**What to change:**
Replace `YOUR_USERNAME` with your actual GitHub username in all 3 locations.

**Example:**
If your GitHub username is `resilience-inc-global`, change:

```xml
<loc>https://YOUR_USERNAME.github.io/website/</loc>
```

to:

```xml
<loc>https://resilience-inc-global.github.io/website/</loc>
```

**Do this for all 3 URLs in the file:**

- Line 4: Main homepage
- Line 10: Contact page
- Line 16: Thank you page

**Where to put it:**
Place `sitemap.xml` in the **root** of your repository (same level as index.html)

-----

## 🎯 What These Files Do

### robots.txt

- Tells search engines (Google, Bing) they can crawl your entire site
- Points them to your sitemap for efficient indexing

### sitemap.xml

- Lists all pages on your site
- Helps search engines find and index your pages
- Sets priority and update frequency for each page

-----

## ✅ Quick Checklist

- [ ] Download both files
- [ ] Replace `YOUR_USERNAME` with your GitHub username
- [ ] Upload both files to the root of your repository
- [ ] Verify they’re accessible:
  - `https://YOUR_USERNAME.github.io/website/robots.txt`
  - `https://YOUR_USERNAME.github.io/website/sitemap.xml`

-----

## 💡 Pro Tip

After your site is live, submit your sitemap to:

- **Google Search Console**: search.google.com/search-console
- **Bing Webmaster Tools**: bing.com/webmasters

This helps your site appear in search results faster!

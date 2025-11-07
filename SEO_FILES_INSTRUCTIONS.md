# How to Customize robots.txt and sitemap.xml

## 📝 Instructions

Both files need your **GitHub username** to work properly.

### 1. robots.txt

**What to change:**
Replace `YOUR_USERNAME` with your actual GitHub username.

**Example:**
If your GitHub username is `resilience-inc-global`, change:

```
Sitemap: https://YOUR_USERNAME.github.io/website/sitemap.xml
```

to:

```
Sitemap: https://resilience-inc-global.github.io/website/sitemap.xml
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
- [ ] Replace `YOUR_USERNAME` with your GitHub username (here: resilience-inc-global)
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

-----

## 📊 Google Analytics Setup (Optional)

Track your website visitors and traffic with Google Analytics.

### Step 1: Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
1. Sign in with your Google account
1. Click **“Start measuring”** or **“Admin”** (gear icon)

### Step 2: Create Account & Property

1. **Account name:** `Resilience Inc`
1. Click **Next**
1. **Property name:** `Resilience Inc Website`
1. **Time zone:** Select your timezone
1. **Currency:** EUR
1. Click **Next**
1. Fill in business information
1. Click **Create** and accept Terms of Service

### Step 3: Set Up Data Stream

1. Choose platform: **Web**
1. Website URL: `https://YOUR_USERNAME.github.io`
1. Stream name: `Resilience Inc Website`
1. Click **Create stream**
1. **Copy your Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 4: Get Your Tracking Code

You’ll see code that looks like this:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Copy this entire code block!**

### Step 5: Add to Your Website Files

Add the tracking code to **all three HTML files** just before the closing `</head>` tag:

**Files to update:**

- `index.html`
- `contact.html`
- `thank-you.html`

**In each file, find the `</head>` tag and add the code before it:**

```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XXXXXXXXXX');
    </script>
</head>
```

### Step 6: Verify It Works

1. Upload your updated files to GitHub
1. Visit your live website
1. Go to Google Analytics → **[Reports](https://tagassistant.google.com/?hl=en-GB&utm_source=gtm#/?id=G-GSKVCK6F2F)** → **Realtime**
1. You should see yourself as an active user!

### 🔍 Finding Your Measurement ID Later

1. Go to [analytics.google.com](https://analytics.google.com)
1. Click **Admin** (gear icon)
1. Click **Data Streams** under Property
1. Click your web stream
1. Measurement ID is at the top (starts with `G-`)

-----

## ✅ Complete SEO Checklist

- [ ] Upload `robots.txt` with your GitHub username
- [ ] Upload `sitemap.xml` with your GitHub username (3 locations)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Add Google Analytics code to all HTML files (optional)
- [ ] Verify analytics is tracking visitors (optional)

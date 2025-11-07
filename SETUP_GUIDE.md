# Resilience Inc - Detailed Setup Guide

This guide will walk you through setting up your website step by step.

## Prerequisites

- GitHub account (free): [github.com/join](https://github.com/join)
- Formspree account (free): [formspree.io/register](https://formspree.io/register)
- Git installed on your computer (optional, can use GitHub web interface)

-----

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface (Easiest)

1. Go to [github.com](https://github.com) and log in
1. Click the **+** icon (top right) → **New repository**
1. Repository name: `website`
1. Description: “Professional Cloud & Security Engineering Website”
1. Make it **Public** (required for free GitHub Pages)
1. **Do NOT** check “Add README” or “Add .gitignore” (we have these already)
1. Click **Create repository**

### Option B: Using Git Command Line

```bash
# Navigate to your website folder
cd website

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Resilience Inc website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/resilience-inc-global/website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

-----

## Step 2: Upload Files to GitHub

### Option A: Using GitHub Web Interface

1. On your new repository page, click **uploading an existing file**
1. Drag and drop ALL files from your `website` folder
1. Include the `.github` folder (may need to show hidden files on Mac/Linux)
1. Write commit message: “Initial website files”
1. Click **Commit changes**

### Option B: Using Git Command Line

Already done in Step 1, Option B!

-----

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
1. Click **Settings** (tab at top)
1. Scroll down and click **Pages** (left sidebar)
1. Under “Build and deployment”:
- **Source**: Select **GitHub Actions** (not “Deploy from a branch”)
1. Save (if button appears)
1. Wait 2-3 minutes for first deployment
1. Your site will be live at: `https://resilience-inc-global.github.io/website/`

**Important:** The first deployment takes a few minutes. Check the **Actions** tab to see deployment progress.

-----

## Step 4: Set Up Contact Form with Formspree

### 4.1 Create Formspree Account

1. Go to [formspree.io/register](https://formspree.io/register)
1. Sign up with email or Google
1. Verify your email address
1. Free plan gives you 50 submissions/month

### 4.2 Create a New Form

1. Click **+ New Form** button
1. Form name: “Resilience Inc Contact”
1. Email: `willem.van.heemstra@resilience-inc.global`
1. Click **Create Form**

### 4.3 Get Your Form Endpoint

1. After creating the form, you’ll see your form endpoint
1. It looks like: `https://formspree.io/f/xanyrgov`
1. **Copy this URL** - you’ll need it next

### 4.4 Update Your Website

**You need to update the contact form in your website:**

1. Open `contact.html` in a text editor
1. Find line 37 (or search for `action="https://formspree.io/f/xanyrgov"`)
1. Replace the Formspree URL with YOUR form endpoint from step 4.3
1. Save the file

**Before:**

```html
<form id="contact-form" action="https://formspree.io/f/xanyrgov" method="POST">
```

**After:**

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 4.5 Update Thank You Page Redirect

1. Open `contact.html` again
1. Find line 122 (or search for `_next`)
1. Update with your GitHub Pages URL:

**Before:**

```html
<input type="hidden" name="_next" value="https://resilience-inc-global.github.io/website/thank-you.html">
```

**After:**

```html
<input type="hidden" name="_next" value="https://resilience-inc-global.github.io/website/thank-you.html">
```

### 4.6 Push Updates to GitHub

**Using Git:**

```bash
git add contact.html
git commit -m "Configure Formspree contact form"
git push
```

**Using GitHub Web Interface:**

1. Go to your repository
1. Click on `contact.html`
1. Click the pencil icon (Edit)
1. Make the changes
1. Scroll down, add commit message
1. Click **Commit changes**

-----

## Step 5: Test Your Website

### 5.1 Visit Your Site

1. Go to: `https://resilience-inc-global.github.io/website/`
1. Check that everything loads properly
1. Test mobile responsiveness (resize browser window)

### 5.2 Test Contact Form

1. Click “Get in Touch” or go to contact page
1. Fill out the form with test data
1. Submit the form
1. You should:
- Be redirected to the thank you page
- Receive an email at `willem.van.heemstra@resilience-inc.global`
- See the submission in your Formspree dashboard

**First submission only:** Formspree may ask you to confirm your email address.

-----

## Step 6: Customize Your Site

### 6.1 Add Your Photo

1. Take or select a professional headshot photo
1. Resize to 500x500 pixels (use any image editor)
1. Compress it (use [tinypng.com](https://tinypng.com))
1. Rename to `willem-profile.jpg`
1. Upload to `assets/images/` folder
1. Update `index.html` around line 93:

**Replace this:**

```html
<div class="placeholder-image">
    <span>Photo</span>
</div>
```

**With this:**

```html
<img src="assets/images/willem-profile.jpg" alt="Willem van Heemstra" class="h-64 w-64 rounded-full object-cover shadow-xl">
```

### 6.2 Update Branding Colors (Optional)

Tailwind CSS handles all styling. Update the configuration snippet in the `<head>` of each HTML file to adjust colors, fonts, or plugins:

```html
<script>
  tailwind.config = {
    plugins: [tailwindcssForms],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: '#2563eb',
            dark: '#1e40af',
            light: '#3b82f6'
          }
        }
      }
    }
  };
</script>
```

Change the hex values to match your palette. You can also add additional keys (e.g. `secondary`, `accent`) and use them via Tailwind utility classes.

### 6.3 Update Service Pricing (If Needed)

1. Open `index.html`
1. Find the services section (around line 126)
1. Update pricing and descriptions as needed

-----

## Step 7: SEO and Analytics (Optional)

### 7.1 Update SEO Files

**robots.txt:**

1. Open `robots.txt`
1. Replace `yourusername` with your actual GitHub username

**sitemap.xml:**

1. Open `sitemap.xml`
1. Replace `yourusername` with your actual GitHub username
1. Update the `lastmod` dates

### 7.2 Add Google Analytics (Optional)

1. Create Google Analytics account
1. Get your tracking code
1. Add it before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

-----

## Step 8: Custom Domain (Optional)

### 8.1 Buy a Domain

Purchase from:

- [Namecheap](https://www.namecheap.com) (recommended)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### 8.2 Configure DNS

In your domain provider’s DNS settings, add:

**For www subdomain:**

- Type: CNAME
- Name: www
- Value: resilience-inc-global.github.io

**For apex domain (optional):**

- Type: A
- Name: @
- Value: Add all four IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### 8.3 Add CNAME File

1. Rename `CNAME.example` to `CNAME`
1. Edit the file and add your domain:
   
   ```
   resilience-inc.global
   ```
   
   OR
   
   ```
   www.resilience-inc.global
   ```
1. Commit and push to GitHub

### 8.4 Enable HTTPS

1. Wait 24 hours for DNS to propagate
1. Go to GitHub Settings → Pages
1. Check “Enforce HTTPS”

-----

## Troubleshooting

### Site not loading?

- Check Actions tab for deployment errors
- Verify repository is public
- Wait 5 minutes after first push

### Form not working?

- Verify Formspree endpoint is correct
- Check spam folder for confirmation email
- Test form in Formspree dashboard

### Images not showing?

- Check file names match exactly (case-sensitive)
- Verify images are in `assets/images/` folder
- Check file paths in HTML

### Styles not loading?

- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Confirm the Tailwind CDN script is present in the `<head>` of each HTML file
- Check the browser console for network errors blocking the CDN

-----

## Maintenance

### Making Updates

**Method 1: GitHub Web Interface**

1. Navigate to file on GitHub
1. Click pencil icon
1. Make changes
1. Commit changes
1. Wait 1-2 minutes for deployment

**Method 2: Git Command Line**

1. Edit files locally
1. `git add .`
1. `git commit -m "Description of changes"`
1. `git push`
1. Wait 1-2 minutes for deployment

### Monitoring

- **Form submissions**: Check Formspree dashboard
- **Site traffic**: Add Google Analytics (optional)
- **Uptime**: GitHub Pages has 99.9% uptime

-----

## Support

If you need help:

1. Check this guide again
1. Review README.md
1. Check GitHub repository Issues tab
1. Email: willem.van.heemstra@resilience-inc.global

-----

## Checklist

- [ ] GitHub repository created
- [ ] Files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] Formspree account created
- [ ] Contact form configured with Formspree endpoint
- [ ] Thank you page URL updated
- [ ] Contact form tested and working
- [ ] Email notifications received
- [ ] Professional photo added
- [ ] Colors customized (optional)
- [ ] Pricing updated (if needed)
- [ ] SEO files updated
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

-----

**Congratulations!** Your professional website is now live. 🎉

Share it with potential clients and on your LinkedIn profile!

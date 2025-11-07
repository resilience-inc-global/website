# ⚡ QUICK START - Resilience Inc Website

## 5-Minute Setup

### 1️⃣ Create GitHub Repository (2 minutes)

1. Go to github.com (create account if needed)
1. Click **+** → **New repository**
1. Name: `website`
1. Make it **Public**
1. Click **Create repository**

### 2️⃣ Upload Files (1 minute)

1. Download/unzip this website folder
1. On your new GitHub repository, click “uploading an existing file”
1. Drag ALL files from website folder
1. Click **Commit changes**

### 3️⃣ Enable GitHub Pages (1 minute)

1. Go to **Settings** → **Pages**
1. Under “Build and deployment”, select **GitHub Actions**
1. Wait 2-3 minutes
1. Visit: `https://resilience-inc-global.github.io/website/`

### 4️⃣ Setup Contact Form (1 minute)

1. Go to [formspree.io/register](https://formspree.io/register)
1. Create account and verify email
1. Click **+ New Form**
1. Name: “Contact”, Email: `wvanheemstra@icloud.com`
1. Copy your form endpoint (looks like: `formspree.io/f/abc123`)
1. Edit `contact.html` on GitHub:
- Click file → pencil icon
- Find line 37: `action="https://formspree.io/f/xanyrgov"`
- Replace with YOUR endpoint
- Scroll down, commit changes
1. Also update line 122 with your actual GitHub Pages URL

### ✅ Done!

Your site is now live. Test the contact form to make sure emails come through.

-----

## Next Steps (Optional)

- [ ] Add your professional photo to `assets/images/`
- [ ] Update the placeholder photo in `index.html` (line 93)
- [ ] Customize brand colors in the Tailwind config snippet inside each HTML `<head>`
- [ ] Test contact form
- [ ] Share on LinkedIn!

-----

## Need Help?

See **SETUP_GUIDE.md** for detailed instructions or **README.md** for technical documentation.

**Email:** wvanheemstra@icloud.com

# Custom Domain Setup Guide

## 🌐 Using Your Own Domain Name

If you want to use a custom domain (like `resilience-inc.global` or `www.resilience-inc.global`) instead of the GitHub Pages URL, follow these steps.

-----

## Step 1: Buy a Domain

Purchase a domain from:

- **Namecheap** (recommended) - namecheap.com
- **Google Domains** - domains.google
- **GoDaddy** - godaddy.com
- **Cloudflare** - cloudflare.com

**Cost:** Usually $10-15 per year

-----

## Step 2: Configure DNS Settings

Go to your domain provider’s DNS management page and add these records:

### Option A: Using www subdomain (Recommended)

**CNAME Record:**

- **Type:** CNAME
- **Host/Name:** www
- **Value/Points to:** resilience-inc-global.github.io
- **TTL:** 3600 (or default)

**A Records for root domain (optional redirect):**
Add 4 A records:

- **Type:** A
- **Host/Name:** @ (or leave blank)
- **Value:** Add each of these IPs separately:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### Option B: Using apex domain only (no www)

**A Records:**
Add 4 A records:

- **Type:** A
- **Host/Name:** @ (or leave blank)
- **Value:** Add each of these IPs separately:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

-----

## Step 3: Create CNAME File

1. **Rename** `CNAME.example` to just `CNAME` (no file extension)
1. **Edit** the file and remove all comments
1. **Add** your domain name on a single line

### Examples:

**For www subdomain:**

```
www.resilience-inc.global
```

**For apex domain:**

```
resilience-inc.global
```

**Important:** Only include ONE domain name, nothing else!

-----

## Step 4: Upload CNAME File

Upload the `CNAME` file to the **root** of your GitHub repository:

```
resilience-inc/
├── index.html
├── contact.html
├── CNAME          ← Here (same level as index.html)
└── assets/
```

-----

## Step 5: Configure GitHub Pages

1. Go to your repository **Settings** → **Pages**
1. Under “Custom domain”, enter your domain
1. Click **Save**
1. Wait for DNS check (may take a few minutes)
1. Once verified, check **“Enforce HTTPS”**

-----

## ⏰ Wait for DNS Propagation

- DNS changes take **24-48 hours** to fully propagate worldwide
- You can check status at: whatsmydns.net
- GitHub may show “DNS check in progress” - this is normal

-----

## ✅ Verification

Once complete, your site will be accessible at:

- `https://resilience-inc.com` (or your domain)
- `https://www.resilience-inc.com`

Both HTTP and non-www will automatically redirect to HTTPS with www (if configured)

-----

## 🆘 Troubleshooting

**Problem: “Domain is improperly configured”**

- Wait 24-48 hours for DNS propagation
- Verify your DNS records are correct
- Check you’re using the right GitHub username

**Problem: “HTTPS not available”**

- Uncheck and re-check “Enforce HTTPS”
- Wait for GitHub to provision SSL certificate (up to 24 hours)
- Ensure DNS is fully propagated

**Problem: “Page not found”**

- Verify CNAME file is in repository root
- Check the domain in GitHub Pages settings matches CNAME file
- Ensure site has deployed successfully (check Actions tab)

-----

## 💡 Pro Tips

1. **Use www subdomain** - It’s more flexible and recommended by GitHub
1. **Wait 48 hours** before troubleshooting DNS issues
1. **Enable HTTPS** as soon as it’s available
1. **Test thoroughly** after setup on different devices
1. **Update contact.html** form redirect URL to use your custom domain

-----

## 📧 Need Help?

If you have issues:

- Check GitHub’s custom domain docs: docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
- Contact your domain provider’s support
- Email: wvanheemstra@icloud.com

-----

## ⚠️ Important Notes

- **Don’t use a custom domain until your site is fully working** on the GitHub Pages URL first
- Custom domains are **optional** - GitHub Pages URL works perfectly fine
- SSL certificates are **free** with GitHub Pages
- You can change or remove your custom domain anytime

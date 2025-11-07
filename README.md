# Resilience Inc - Cloud & Security Engineering

Professional website for Willem van Heemstra’s cloud and security engineering consultancy.

## 🌐 Live Site

Once deployed: `https://resilience-inc-global.github.io/website/`

## 📋 Features

- **Modern, Responsive Design**: Mobile-first approach that looks great on all devices
- **Contact Form**: Integrated with Formspree to send enquiries directly to your email
- **Automated Deployment**: GitHub Actions automatically deploys to GitHub Pages on push
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Minimal dependencies, optimized assets
- **Professional Layout**: Inspired by modern B2B service websites

## 🚀 Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `website`
1. Make it public (required for free GitHub Pages)
1. Don’t initialize with README (we already have one)

### 2. Upload Files

```bash
# In your terminal, navigate to the website folder
cd website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Resilience Inc website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/resilience-inc-global/website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
1. Click **Settings** → **Pages**
1. Under “Build and deployment”:
- Source: Select **GitHub Actions**
1. Your site will be available at: `https://resilience-inc-global.github.io/website/`

### 4. Configure Contact Form

The contact form uses Formspree. To set it up:

1. Go to [Formspree.io](https://formspree.io/) and create a free account
1. Create a new form
1. Copy your form endpoint (looks like: `https://formspree.io/f/xanyrgov`)
1. Update `contact.html` line 37:
   
   ```html
   <form id="contact-form" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
   ```
1. The form will automatically send to `wvanheemstra@icloud.com`

**Alternative**: Use [Formspark](https://formspark.io/) or [Formsubmit](https://formsubmit.co/) for similar functionality.

### 5. Customize Content

#### Add Your Photo

1. Replace the placeholder in `index.html` (around line 93) with an actual image:
   
   ```html
   <div class="about-image">
       <img src="assets/images/willem-profile.jpg" alt="Willem van Heemstra">
   </div>
   ```
1. Add your photo to `assets/images/` folder

#### Update the Thank You Page URL

In `contact.html`, line 122, update the URL:

```html
<input type="hidden" name="_next" value="https://resilience-inc-global.github.io/website/thank-you.html">
```

## 📁 Project Structure

```
website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── assets/
│   ├── js/
│   │   └── main.js             # JavaScript for navigation and forms
│   └── images/                 # Your images go here
├── index.html                  # Main landing page
├── contact.html                # Contact form page
├── thank-you.html              # Form submission confirmation
├── README.md                   # This file
└── .gitignore                  # Files to exclude from git
```

## 🎨 Customization Guide

### Colors & Typography

Tailwind CSS powers all styling. Update the configuration snippet in each HTML file (inside the `<head>`):

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

You can also add plugins or additional utility extensions there—for example typography, aspect-ratio, or custom fonts.

### Services & Pricing

Edit the service cards in `index.html` (starting around line 126).

### Content

All text content is in the HTML files - easy to find and edit.

## 🔧 Maintenance

### Update Content

1. Edit HTML files locally
1. Commit and push changes
1. GitHub Actions automatically deploys

### Test Locally

Simply open `index.html` in your browser. For full testing with form functionality:

```bash
# Using Python 3
python3 -m http.server 8000

# Using PHP
php -S localhost:8000

# Then visit: http://localhost:8000
```

## 📧 Contact Form Setup (Detailed)

### Option 1: Formspree (Recommended)

- Free tier: 50 submissions/month
- No backend code needed
- Spam protection included
- Setup: Create account → Create form → Copy endpoint

### Option 2: Formspark

- Free tier: 50 submissions/month
- Similar to Formspree
- Setup: [formspark.io](https://formspark.io/)

### Option 3: Formsubmit

- Completely free
- No registration needed
- Change action to: `https://formsubmit.co/wvanheemstra@icloud.com`
- Add captcha with: `<input type="hidden" name="_captcha" value="true">`

## 🌍 Custom Domain (Optional)

To use your own domain (e.g., resilience-inc.global):

1. Buy domain from provider (Namecheap, Google Domains, etc.)
1. Create `CNAME` file in root directory with your domain:
   
   ```
   resilience-inc.global
   ```
1. Configure DNS with your provider:
- Add CNAME record: `www` → `resilience-inc-global.github.io`
- Add A records for apex domain to GitHub IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
1. Enable HTTPS in GitHub Pages settings

## 🔒 Security

- All form submissions go through HTTPS
- Formspree provides spam protection
- No sensitive data stored on GitHub
- Regular dependency updates through Dependabot (optional)

## 📊 Analytics (Optional)

Add Google Analytics or similar:

1. Get tracking code
1. Add before closing `</head>` tag in all HTML files
1. Commit and push

## 🐛 Troubleshooting

### Site not deploying?

- Check GitHub Actions tab for errors
- Ensure repository is public
- Verify Pages is enabled in Settings

### Form not working?

- Check Formspree endpoint is correct
- Verify email address in Formspree dashboard
- Check browser console for errors

### Images not showing?

- Check file paths are relative: `assets/images/photo.jpg`
- Ensure images are committed to repository

## 📝 License

This website is for Willem van Heemstra / Resilience Inc. Feel free to use this template for your own business with appropriate modifications.

## 🤝 Support

For questions about this website:

- Email: wvanheemstra@icloud.com
- Create an issue in the GitHub repository

## 🎯 Next Steps

1. ✅ Set up GitHub repository
1. ✅ Enable GitHub Pages
1. ✅ Configure Formspree
1. ⬜ Add your professional photo
1. ⬜ Customize colors to match your brand
1. ⬜ Update pricing if needed
1. ⬜ Test contact form
1. ⬜ Share your new website!

-----

**Built with:** HTML5, Tailwind CSS, JavaScript, GitHub Pages, Formspree

**Last Updated:** November 2025

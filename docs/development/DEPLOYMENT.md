# 🚀 Portfolio Website Deployment Guide

## Quick Start Checklist

### Before Deployment:
1. **Personalize Your Content:**
   - [ ] Replace `[Ihr Name]` with your actual name in all HTML files
   - [ ] Update email address: `your.email@example.com`
   - [ ] Add your social media links (LinkedIn, GitHub, etc.)
   - [ ] Update the portfolio URL in `js/qr-generator.js` (line 4)

2. **Add Your Project Images:**
   - [ ] Add screenshots to `images/` folder
   - [ ] Update image paths in project HTML files
   - [ ] Ensure images are optimized (recommended: WebP format, <500KB each)

3. **Customize Project Content:**
   - [ ] Update GitHub repository links
   - [ ] Add live demo URLs
   - [ ] Personalize project descriptions and technologies

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)
```bash
# 1. Create a new repository on GitHub
# 2. Upload your files or push via Git
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 3. Enable GitHub Pages in repository settings
# Your site will be live at: https://yourusername.github.io/portfolio
```

### Option 2: Vercel (Professional & Fast)
1. Visit [vercel.com](https://vercel.com) and sign up
2. Connect your GitHub account
3. Import your repository
4. Deploy automatically
5. Get custom domain: `yourname.vercel.app`

### Option 3: Netlify (Feature-Rich)
1. Visit [netlify.com](https://netlify.com) and sign up
2. Drag & drop your project folder
3. Or connect to GitHub for automatic deployments
4. Get custom domain: `yourname.netlify.app`

## Post-Deployment Tasks

### Update QR Code Generator
After deployment, update the default URL in `js/qr-generator.js`:
```javascript
this.defaultUrl = 'https://your-actual-domain.com';
```

### SEO Optimization
- [ ] Update all `<title>` tags with your actual name
- [ ] Add your name to meta descriptions
- [ ] Consider adding Open Graph tags for social media sharing

### Performance Optimization
- [ ] Compress images (use tools like TinyPNG)
- [ ] Test mobile responsiveness
- [ ] Check loading speed with PageSpeed Insights

## Testing Your Live Site

After deployment, test these features:
- [ ] All navigation links work
- [ ] Project detail pages load correctly
- [ ] QR code generator functions properly
- [ ] Contact form works (if you added backend functionality)
- [ ] Mobile responsiveness on real devices

## Domain Setup (Optional)

### Custom Domain
If you want a custom domain like `yourname.com`:
1. Purchase domain from provider (Namecheap, GoDaddy, etc.)
2. Configure DNS settings to point to your hosting platform
3. Update DNS records as instructed by your hosting provider

### Professional Email
Consider setting up: `contact@yourname.com` to match your domain

---

**🎯 Your portfolio is ready to impress Mediendesigninformatik admissions committees!**

Need help with any of these steps? The portfolio is fully functional and deployment-ready as-is.

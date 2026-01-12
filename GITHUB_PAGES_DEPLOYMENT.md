# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## ✅ Pre-Deployment Checklist

- [x] ✅ robots.txt fixed - Now properly formatted
- [x] ✅ sitemap.xml fixed - Only includes actual pages
- [x] ✅ GitHub Actions workflow configured
- [x] ✅ .gitignore updated - Build artifacts excluded

## 📋 Deployment Steps

### Step 1: Verify Your Repository

1. Make sure your repository is named `khilansakariya.github.io` (this is important!)
2. Ensure you're on the correct branch (`main` or `master`)

### Step 2: Commit and Push Your Changes

```bash
# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Fix robots.txt and sitemap.xml, prepare for deployment"

# Push to GitHub
git push origin main
```

**Note:** If your default branch is `master` instead of `main`, use:
```bash
git push origin master
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/khilansakariya/khilansakariya.github.io`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### Step 4: Deploy via GitHub Actions

The deployment will happen automatically when you push to the repository!

1. After pushing, go to the **Actions** tab in your repository
2. You'll see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the deployment progress
4. Wait for the workflow to complete (green checkmark ✅)

### Step 5: Verify Deployment

Once deployment is complete:

1. Your site will be available at: `https://khilansakariya.github.io`
2. It may take a few minutes for DNS to propagate
3. Check if your site is live:
   - Visit the URL
   - Test all pages (Home, Archive)
   - Verify robots.txt: `https://khilansakariya.github.io/robots.txt`
   - Verify sitemap.xml: `https://khilansakariya.github.io/sitemap.xml`

## 🔄 Updating Your Site

To update your site in the future:

```bash
# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main
```

The GitHub Actions workflow will automatically rebuild and redeploy your site!

## 🛠️ Troubleshooting

### Issue: Workflow not running
- **Solution:** Make sure GitHub Pages is set to use "GitHub Actions" as the source
- Check that the workflow file exists at `.github/workflows/deploy.yml`

### Issue: Build fails
- **Solution:** Check the Actions tab for error messages
- Common issues:
  - Missing dependencies (check `package.json`)
  - TypeScript errors (run `npm run build` locally first)
  - Missing environment variables (if any)

### Issue: Site shows 404
- **Solution:** Wait 5-10 minutes for DNS propagation
- Check that the repository name matches `khilansakariya.github.io` exactly
- Verify the workflow completed successfully

### Issue: robots.txt or sitemap.xml not updating
- **Solution:** Make sure you've committed the changes to `src/app/robots.ts` and `src/app/sitemap.ts`
- The build process generates these files automatically

## 📁 What Gets Deployed?

The GitHub Actions workflow will:
1. ✅ Install Node.js dependencies
2. ✅ Build your Next.js project (`npm run build`)
3. ✅ Upload the `out/` folder to GitHub Pages
4. ✅ Deploy automatically

## 🔍 Verify Deployment Files

After deployment, verify these URLs work:
- ✅ `https://khilansakariya.github.io/` - Homepage
- ✅ `https://khilansakariya.github.io/archive` - Archive page
- ✅ `https://khilansakariya.github.io/resume.pdf` - Resume
- ✅ `https://khilansakariya.github.io/robots.txt` - Robots file
- ✅ `https://khilansakariya.github.io/sitemap.xml` - Sitemap

## 🎉 You're All Set!

Your portfolio website is now configured for automatic deployment to GitHub Pages. Every time you push changes, your site will automatically update!

---

**Last Updated:** January 2025  
**Status:** Ready for Deployment ✅


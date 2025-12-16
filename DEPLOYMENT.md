# GitHub Pages Deployment Setup

## ✅ What's Been Configured

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on every push to `main` branch
   - Uses official GitHub Pages actions for deployment
   - Includes your GEMINI_API_KEY from GitHub secrets

2. **Vite Config** (`vite.config.ts`)
   - Already configured with base URL: `/Dheeraj070/`

3. **Package.json**
   - Added `deploy` script for manual deployment
   - Added `gh-pages` package

## 🚀 Setup Instructions

### Step 1: Install Dependencies
Open a terminal (not PowerShell) and run:
```bash
npm install
```

### Step 2: Initialize Git & Push to GitHub
If you haven't already:
```bash
git init
git add .
git commit -m "Initial commit with GitHub Pages deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Dheeraj070.git
git push -u origin main
```

### Step 3: Configure GitHub Repository Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. (Optional) If you need the GEMINI_API_KEY:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `GEMINI_API_KEY`
   - Value: Your API key

### Step 4: Enable GitHub Actions
1. Go to **Actions** tab in your repository
2. If prompted, enable GitHub Actions

## 🎯 How It Works

- **Automatic Deployment**: Every time you push to the `main` branch, GitHub Actions will:
  1. Check out your code
  2. Install dependencies
  3. Build your project
  4. Deploy to GitHub Pages

- **Your Site URL**: `https://YOUR_USERNAME.github.io/Dheeraj070/`

## 📝 Manual Deployment (Optional)

If you want to deploy manually from your local machine:
```bash
npm run deploy
```

## 🔄 Making Updates

Simply push your changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

GitHub Actions will automatically build and deploy!

## 📊 Monitor Deployment

Check deployment status:
1. Go to **Actions** tab in your GitHub repository
2. View the latest workflow run
3. Once complete (green checkmark), your site is live!

## ⚠️ Troubleshooting

If deployment fails:
- Check the Actions tab for error logs
- Ensure your `main` branch name matches the workflow file
- Verify GitHub Pages is enabled in repository settings
- Make sure all dependencies are in package.json

#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Deploying Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building project..."
NODE_ENV=production npm run build:github

# Navigate to build output
cd dist/public

# Initialize git if not already
if [ ! -d .git ]; then
    git init
    git checkout -b gh-pages
fi

# Add all files
git add -A

# Commit
git commit -m "Deploy Portfolio Website v1.5 - $(date)"

# Add remote if not exists
if ! git remote | grep -q origin; then
    git remote add origin https://github.com/maxaufknax/Portfolio-Website.git
fi

# Push to gh-pages branch
git push -f origin gh-pages

echo "✅ Deployment complete!"
echo "🌐 Website will be available at: https://maxaufknax.github.io/Portfolio-Website/"

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages repository (`yonmilk.github.io`) that serves as a personal blog. The repository automatically deploys static content to `https://yonmilk.github.io/` when changes are pushed to the main branch.

## Blog Architecture

This blog is designed to:
- Function as a static site that deploys automatically via GitHub Pages
- Serve content without requiring a backend server
- Support blog posts, pages, and static assets

## Deployment

- **Automatic**: Any push to the main branch triggers automatic deployment
- **Static Only**: All content must be static (HTML, CSS, JS, images)
- **No Build Process**: Files are served directly unless using Jekyll or GitHub Actions

## Recommended Blog Setup Options

1. **Jekyll** (GitHub's native support):
   - Zero-configuration deployment
   - Built-in blog structure with `_posts/` directory
   - Markdown support with front matter
   - Themes via `_config.yml`

2. **Static Site Generator with GitHub Actions**:
   - Hugo, Next.js, Gatsby, or similar
   - Custom build workflow in `.github/workflows/`
   - Build output committed to `gh-pages` branch or `docs/` folder

3. **Pure Static HTML/CSS/JS**:
   - Direct file serving
   - Manual blog post management
   - Custom JavaScript for dynamic features

## Current Implementation

This blog uses a static HTML/CSS approach with Apple Newsroom-inspired design:

- **Structure**: Single-page layout with article grid
- **Styling**: Apple-style typography, card layouts, and responsive design  
- **Images**: Placeholder images that should be replaced with actual content
- **Deployment**: Direct file serving via GitHub Pages

## File Structure

```
/
├── index.html          # Main blog page
├── styles.css          # Apple Newsroom-inspired styling
└── CLAUDE.md          # This file
```

## Development Workflow

1. Edit `index.html` to add new blog posts to the articles grid
2. Update placeholder images with actual content images
3. Modify `styles.css` for design adjustments
4. Test locally by opening `index.html` in a browser
5. Push to main branch for automatic deployment
6. Monitor deployment at https://yonmilk.github.io/

## Adding New Posts

To add a new blog post:
1. Add a new `<article class="article-card">` element to the articles grid
2. Update the image src, title, category, excerpt, and date
3. Consider making important posts `featured` by adding the `featured` class
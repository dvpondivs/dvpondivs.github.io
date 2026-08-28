# dvpondivs.github.io
Static 11ty application hosted by GitHub Pages

## Design
- **Eleventy v3** - Fast static site generation with ES modules
- **TailwindCSS v4** - Utility-first CSS framework
- **Alpine.js** - Lightweight JavaScript for interactivity
- **Pagefind** - Static search with zero configuration
- **eleventy-img** - Automatic image optimization (AVIF, WebP, JPEG)
- **Phosphor Icons** - 6,000+ icons with multiple weights
- **Speculation Rules** - Instant page loads with prefetching
- **Accessibility** - WCAG 2.1 AA compliant with automated testing
- **SEO Ready** - Sitemap, RSS feed, meta tags, Open Graph
- **LLM Ready** - llms.txt and llms-full.txt for AI assistants

## Resources
* [Learn Eleventy](https://www.freecodecamp.org/news/learn-eleventy)
* [Hosting 11ty on GitHub Pages](https://quinndombrowski.com/blog/2022/05/07/hosting-eleventy-on-github-pages)

## Guide

### Prerequisites

- Node.js 24 or higher (see `.nvmrc`)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/dvpondivs/dvpondivs.github.io.git
cd dvpondivs.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:8080 to view your site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run clean` | Remove `public` folder |

## Project Structure

```
dvpondivs.github.io/
├── src/
│   ├── _data/                 # Global data files
│   │   ├── build.js           # Build info (git hash, timestamp)
│   │   ├── metadata.yaml      # Site metadata
│   │   ├── header.yaml        # Navigation config
│   │   ├── footer.yaml        # Footer configuration
│   │   └── socials.yaml       # Social media links
│   ├── _includes/
│   │   ├── layouts/           # Page layouts
│   │   │   ├── base.njk       # Base HTML layout
│   │   │   ├── page.njk       # Standard page layout
│   │   │   ├── game.njk       # Game post layout
│   │   │   ├── legal.njk      # Legal pages layout
│   │   │   └── error.njk      # Error pages layout
│   │   ├── partials/          # Reusable partials
│   │   │   ├── header.njk
│   │   │   ├── footer.njk
│   │   │   └── metatags.njk
│   │   └── _components/       # Nunjucks component macros
│   │       └── index.njk
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css       # Entry point
│   │   │   ├── _base.css      # CSS variables, reset
│   │   │   ├── _typography.css
│   │   │   ├── _buttons.css
│   │   │   ├── _forms.css
│   │   │   ├── _utilities.css
│   │   │   ├── _pagefind.css
│   │   │   └── _high-contrast.css
│   │   └── js/
│   │       ├── main.js
│   │       └── components/
│   │           └── contrast-toggle.js
│   ├── authors/               # Author profiles
│   ├── blog/                  # Blog posts
│   ├── legal/                 # Legal pages
│   ├── pages/                 # Site pages
│   └── static/                # Static files (favicons, etc.)
├── config/                    # Eleventy configuration
│   ├── collections.js
│   ├── filters.js
│   ├── shortcodes.js
│   ├── transforms.js
│   └── plugins.js
└── eleventy.config.js
```

## Components

Import and use Nunjucks macros in your templates:

```nunjucks
{% from "_components/index.njk" import button, card, badge, authorCard %}

{# Buttons #}
{{ button({ text: "Get Started", url: "/contact/", variant: "primary" }) }}
{{ button({ text: "Learn More", variant: "secondary" }) }}
{{ button({ text: "Cancel", variant: "outline" }) }}

{# Cards #}
{{ card({
  title: "Post Title",
  description: "Description text",
  image: "/assets/images/photo.jpg",
  url: "/blog/post/",
  date: page.date,
  author: "john-doe"
}) }}

{# Badges #}
{{ badge({ text: "New", variant: "primary" }) }}
```

### Button Variants

| Class             | Description             |
|-------------------|-------------------------|
| `.btn`            | Primary lime button     |
| `.btn--secondary` | Light background        |
| `.btn--outline`   | Transparent with border |
| `.btn--ghost`     | No background or border |

Sizes: `.btn--sm`, `.btn--md`, `.btn--lg`

## Shortcodes

### Current Year

```nunjucks
{% year %}
```

## Configuration

### Site Metadata

Edit `src/_data/metadata.yaml`:

```yaml
title: "Your Site Name"
description: "Your site description for SEO"
url: "https://yoursite.com"
language: "en"
author: "Your Name"
email: "hello@example.com"
twitter: "@yourhandle"
image: "/assets/images/og-image.png"
themeColor: "#65a30d"
```

### Navigation

Edit `src/_data/header.yaml`:

```yaml
navigation:
  - label: "Home"
    url: "/"
  - label: "About"
    url: "/about/"
  - label: "Blog"
    url: "/blog/"
```

### Footer

Edit `src/_data/footer.yaml` to configure footer columns and links.

## Search

Pagefind provides instant static search. It runs automatically after build and indexes all pages.

The search UI is at `/search/`.

## Generated Files

| File             | Description                           |
|------------------|---------------------------------------|
| `/sitemap.xml`   | XML sitemap for search engines        |
| `/sitemap.xsl`   | Visual sitemap stylesheet             |
| `/robots.txt`    | Robots directives                     |
| `/feed.xml`      | RSS feed for blog posts               |
| `/llms.txt`      | LLM-friendly site index               |
| `/llms-full.txt` | Full content export for LLMs          |
| `/_headers`      | Security headers (Netlify/Cloudflare) |
| `/_redirects`    | Redirect rules (Netlify/Cloudflare)   |

## Front Matter Options

```yaml
---
title: "Page Title"
description: "Page description for SEO"
image: "/assets/images/og-image.jpg"
noindex: true              # Exclude from sitemap
llms_exclude: true         # Exclude from llms.txt
---
```

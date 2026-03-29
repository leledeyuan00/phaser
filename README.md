# PHASER — Project Page

> **PHASER: Phase-Aware Self-Recovering Imitation Learning for Force-Guided Deformable Object Manipulation**

Project page built on the [Nerfies](https://nerfies.github.io/) template. Hosted on [GitHub Pages](https://pages.github.com/).

---

## 🚀 Quick Start

### Deploy to GitHub Pages

1. Create a new GitHub repository named `PHASER`
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial project page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/PHASER.git
   git push -u origin main
   ```
3. Go to **Settings → Pages → Source** → select `main` branch → Save
4. Your page will be live at `https://YOUR_USERNAME.github.io/PHASER/`

### Local Preview

Simply open `index.html` in your browser — no build step required.

---

## ✏️ How to Customize

All edits happen in **`index.html`**. Search for `TODO` comments to find every placeholder.

### Checklist

| Item | What to do |
|---|---|
| **Title & Meta** | Update `<title>` and `<meta>` tags at the top |
| **Authors** | Replace author names, URLs, affiliations in the hero section |
| **Resource Buttons** | Update `href` for Paper, arXiv, Video, Code buttons |
| **Teaser** | Replace the placeholder with your teaser image/video |
| **Abstract** | Replace the abstract text |
| **Video** | Uncomment and set your YouTube/Bilibili embed URL |
| **Video Carousel** | Uncomment the carousel section and add demo videos |
| **Method** | Replace method description and figure |
| **Results** | Replace result figures and captions |
| **BibTeX** | Update the citation entry |
| **Footer** | Update PDF and GitHub icon links |
| **Analytics** | Add your Google Analytics tag (optional) |
| **Favicon** | Replace `./static/images/favicon.svg` with your own |

### Adding Images & Videos

```
static/
├── images/
│   ├── favicon.svg          ← Replace with your favicon
│   ├── teaser.png           ← Your teaser figure
│   ├── method.png           ← Method/pipeline diagram
│   ├── result1.png          ← Result figures
│   ├── result2.png
│   ├── result3.png
│   └── result4.png
└── videos/
    ├── teaser.mp4           ← Teaser video (optional)
    ├── demo1.mp4            ← Demo result videos (for carousel)
    ├── demo2.mp4
    └── ...
```

### Enabling the Video Carousel

Uncomment the `<!-- VIDEO CAROUSEL -->` section in `index.html` and add your `.mp4` files.

---

## 📁 File Structure

```
PHASER/
├── index.html               ← Main page (edit this!)
├── static/
│   ├── css/
│   │   └── index.css        ← Custom styles
│   ├── js/
│   │   └── index.js         ← Carousel, copy-bibtex, etc.
│   ├── images/              ← Your figures here
│   │   └── favicon.svg
│   └── videos/              ← Your videos here
├── README.md
└── LICENSE
```

**Dependencies loaded via CDN** (no local copies needed):
- [Bulma](https://bulma.io/) — CSS framework
- [Bulma Carousel](https://github.com/Wikiki/bulma-carousel) — Video carousel
- [Font Awesome](https://fontawesome.com/) — Icons
- [Academicons](https://jpswalsh.github.io/academicons/) — Academic icons (arXiv etc.)

> **Want local copies instead?** Download from the original
> [Nerfies repo](https://github.com/nerfies/nerfies.github.io)
> and put them in `static/css/` and `static/js/`, then update the
> `<link>` and `<script>` tags in `index.html`.

---

## 🔗 Credits

- Template: [Nerfies](https://nerfies.github.io/) by Keunhong Park et al.
- Licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)

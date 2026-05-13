# Tim O'Gorman — Portfolio (Demo)

A single-page portfolio demo for sports/editorial photographer **Tim O'Gorman**.

## View it on a phone

The live demo (rendered straight from this branch — no build, no Pages setup needed):

**https://raw.githack.com/fahim-777/photog/claude/photographer-portfolio-demo-bZrQV/index.html**

Backup mirrors (in case the primary CDN is cold):

- https://cdn.statically.io/gh/fahim-777/photog/claude/photographer-portfolio-demo-bZrQV/index.html
- https://htmlpreview.github.io/?https://github.com/fahim-777/photog/blob/claude/photographer-portfolio-demo-bZrQV/index.html

For a cleaner share URL (`fahim-777.github.io/photog/`), enable GitHub Pages:
Settings → Pages → Source: branch `claude/photographer-portfolio-demo-bZrQV`, folder `/`.

Mobile-friendly, dark editorial aesthetic, filterable gallery, lightbox,
animated hero, contact form.

## What's here

- `index.html` — markup
- `styles.css` — styles (mobile-first, no framework)
- `script.js` — nav, filter, lightbox, scroll reveal

## Notes for the real build

The demo uses stock Unsplash photography as placeholders — every image swaps
out 1:1 once Tim sends his shots. The contact form is wired to a visual
confirmation only; production would hit a Formspree / serverless endpoint
or a CRM.

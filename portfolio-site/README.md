# Tiego Morallane — Scrollcraft Portfolio Redesign

**Status:** source complete; production and preview publishing not yet completed.

A lightweight, recruiter-first portfolio microsite using the original Nate Herk [Scrollcraft](https://github.com/nateherkai/scroll-craft) JavaScript/CSS runtime, semantic HTML and page-local CSS/JS.

## How to preview it

```bash
cd portfolio-site
python3 -m http.server 8080
```

Open http://localhost:8080 in your browser. No bundler, backend, environment variables, or payments required.

## Publish on any static host

Deploy **this `portfolio-site/` directory as the site root** (not the parent repository root). It contains `index.html`, `site.css`, `site.js`, `scrollcraft.css`, `scrollcraft.js` and `favicon.svg`. No build command or output directory is needed. For Vercel, choose framework `Other` and root directory `portfolio-site`. For a subfolder-based deploy, the relative asset paths still work when `index.html` is served from that directory.

**Never reassign `tiegomorallane.com` before testing the preview.** The currently live site's deployment owner and project weren't established by available connectors. A new Vercel project creation attempt returned HTTP 403 on 5 November 2026, so no live-site change is claimed.

## The new experience

- Full-screen layered hero showing documents, the workflow core, and a reviewable output.
- Scroll-pinned proposition connecting behavioural economics, commercial judgement, and hands-on building.
- Commercial results with clear attribution, not attributed to AI products.
- AptTick interactive product journey examples (explicitly labelled illustrations; not live screenshots).
- Panning selected-work collection and selectable operational-bottleneck diagnostic.
- Strong email CTA and links to case-study evidence.
- Typography-only logo treatment and minimalist icon.
- Responsive layout, keyboard-operable buttons and reduced-motion CSS fallback.

## Evidence and asset discipline

AptTick's synthetic test learner AI coaching, role-play, feedback and persistence were observed on 26 October 2026, as recorded in `../LIVE_DEMO_RUNBOOK.md`. Other product statuses come from repository case studies. No invented Loom link, learner outcome, accreditation, paid-fulfilment result, external testimonial, product screenshot or unverifiable client claim is included.

## Review checklist before production

1. Desktop first viewport, pinned argument, AptTick example, horizontal rail and footer.
2. Mobile 390×844 and 360×640; inspect overflows, sticky header and tap targets.
3. Test AI Coach / Simulation / Feedback tabs, each operational bottleneck and keyboard arrow navigation.
4. Test `prefers-reduced-motion`, keyboard focus and external links.
5. Inspect browser console and network for missing resources; test final production root.
6. Add finished video when the user has captured actual AptTick screen and own voice-over.

## License / attribution

`scrollcraft.js` and `scrollcraft.css` are copied unmodified from Nate Herk's Scrollcraft project. They are distributed under its MIT license, included as `NATE_HERK_SCROLLCRAFT_LICENSE`. The authored page markup, styling and interactions are project-specific.

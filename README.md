# Svengali — Plain HTML/CSS/JS with Vite + Shoelace + Splide

## Install & Run
```bash
npm i
npm run dev      # http://localhost:5173
npm run build    # outputs to /dist with hashed assets
npm run preview  # serve the built site
```

### Add your media
Put real files in `public/`:
- `public/videos/loop.mp4`, `public/videos/loop.webm`, `public/videos/trailer.mp4`
- `public/images/hero-poster.jpg`, `public/images/slide1.jpg`, `public/images/slide2.jpg`, `public/images/slide3.jpg`

## Notes
- Shoelace is local with `setBasePath('/assets')` and runtime assets copied to `/dist/assets` via `vite-plugin-static-copy`.
- Splide slider (`@splidejs/splide`) is initialized in `src/js/modules/slider.js`.
- FAQ, Reveal on scroll, Smooth-scroll, and Video modal are all in small vanilla JS modules.
- Cache headers for CDN are in `public/_headers` (Netlify/Cloudflare Pages).

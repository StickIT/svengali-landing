// vite.config.js - 55 minutes ago • 1 author (You)
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  plugins: [
    // Copy Shoelace runtime assets (icons, etc.) into dist/assets
    viteStaticCopy({
      targets: [
        { src: 'node_modules/@shoelace-style/shoelace/dist/assets/*', dest: '' },
        // Copy fonts from public/fonts to dist/assets/fonts
        { src: 'public/fonts/*', dest: 'assets/fonts' },
        // { src: 'node_modules/@shoelace-style/shoelace/dist/assets/icons/*.svg', dest: 'shoelace/assets/icons'}
      ]
    })
  ]
})
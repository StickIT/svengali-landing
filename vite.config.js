// vite.config.js
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
        // { src: 'node_modules/@shoelace-style/shoelace/dist/assets', dest: '' },
        // { src: 'node_modules/@shoelace-style/shoelace/dist/assets/icons/*.svg', dest: 'shoelace/assets/icons'}.
        { src: 'public/fonts/*', dest: 'assets/fonts' }
      ]
    })
  ]
})

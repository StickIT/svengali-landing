// // vite.config.js
// import { defineConfig } from 'vite'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// export default defineConfig({
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     emptyOutDir: true,
//   },
//   plugins: [
//     // Copy Shoelace runtime assets (icons, etc.) into dist/assets
//     viteStaticCopy({
//       targets: [
//         // { src: 'node_modules/@shoelace-style/shoelace/dist/assets', dest: '' },
//         // { src: 'node_modules/@shoelace-style/shoelace/dist/assets/icons/*.svg', dest: 'shoelace/assets/icons'}.
//         { src: 'public/fonts/*', dest: 'fonts' },
//       ]
//     })
//   ]
// })

// vite.config.js
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { writeFileSync } from 'fs'
import path from 'path'

// Plugin pour générer _headers automatiquement
const generateHeadersPlugin = () => ({
  name: 'generate-headers',
  writeBundle() {
    const headersContent = `# Cache des assets avec hash pour 1 an
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache des fonts pour 1 an
/fonts/*
  Cache-Control: public, max-age=31536000, immutable

# Cache des images pour 1 an  
/images/*
  Cache-Control: public, max-age=31536000, immutable

# Cache des vidéos pour 1 an
/video/*
  Cache-Control: public, max-age=31536000, immutable

# Pas de cache pour le HTML
/*.html
  Cache-Control: no-cache, no-store, must-revalidate

# Cache court pour les autres fichiers
/*
  Cache-Control: public, max-age=3600`

    const headersPath = path.resolve('dist', '_headers')
    writeFileSync(headersPath, headersContent)
    console.log('✅ Fichier _headers généré pour Cloudflare Pages!')
  }
})

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    
    // ⭐ ESSENTIEL : Hash dans les noms de fichiers pour le cache busting
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[extname]'
      }
    }
  },
  
  // Headers pour le développement
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600'
    }
  },
  
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/fonts/*', dest: 'fonts' },
      ]
    }),
    
    // ⭐ NOUVEAU : Plugin pour générer _headers
    generateHeadersPlugin()
  ]
})

// vite.config.js
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { writeFileSync, readFileSync, mkdirSync } from 'fs'
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
    generateHeadersPlugin(),

    // ⭐ Génère dist/en/index.html et dist/ja/index.html à partir de la racine index.html
    {
      name: 'generate-localized-html',
      apply: 'build',
      writeBundle() {
        // IMPORTANT: clone from the built HTML so asset URLs are correct
        const rootIndexPath = path.resolve('dist', 'index.html')
        let html = ''
        try {
          html = readFileSync(rootIndexPath, 'utf8')
        } catch (e) {
          console.warn('⚠️  dist/index.html introuvable pour la génération localisée')
          return
        }

        // Charger les locales
        const locales = {}
        try {
          locales.en = JSON.parse(readFileSync(path.resolve('src/locales/en.json'), 'utf8'))
          locales.ja = JSON.parse(readFileSync(path.resolve('src/locales/ja.json'), 'utf8'))
        } catch (e) {
          console.warn('⚠️  Locales non chargées, prerender limité aux balises head')
        }

        // Utilitaires de traduction
        const getByPath = (obj, p) => p.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)

        // Prérendu de quelques clés marquées data-i18n / alt / title et HTML riche via data-i18n-html
        const prerenderContent = (markup, lang) => {
          const dict = locales[lang]
          if (!dict) return markup

          let out = markup

          // Sanitize très simple (whitelist) pour contenu riche fourni par locales
          const sanitizeHtml = (html) => {
            // Autoriser balises inoffensives courantes et attributs limités
            // 1) Supprime tous les event handlers et javascript:
            html = html.replace(/on\w+\s*=\s*"[^"]*"/gi, '')
            html = html.replace(/javascript:/gi, '')
            // 2) Nettoyage avec whitelist et conservation des balises fermantes
            // IMPORTANT: inclure les balises de bloc utilisées par les contenus enrichis (ex: <p>, <ul>, <li>)
            const allowedTags = ['b','strong','i','em','u','sup','sub','span','a','br','p','ul','ol','li']
            html = html.replace(/<\/?([a-z0-9-]+)([^>]*)>/gi, (m, tag, attrs) => {
              const lower = tag.toLowerCase()
              const isClosing = m.startsWith('</')
              if (!allowedTags.includes(lower)) return ''
              if (isClosing) return `</${lower}>`
              // Filtrer attributs autorisés
              const allowedAttrs = ['class','title','aria-label','href','target','rel']
              let filtered = (attrs || '').replace(/\s+([a-z0-9-:]+)=("[^"]*"|'[^']*')/gi, (mm, attr, val) => {
                return allowedAttrs.includes(attr.toLowerCase()) ? ` ${attr}=${val}` : ''
              })
              // Forcer sécurité pour <a>
              if (lower === 'a') {
                // ensure rel contains noopener noreferrer
                let relMatch = /\srel=("([^"]*)"|'([^']*)')/i.exec(filtered)
                const relVal = relMatch ? (relMatch[2] || relMatch[3] || '') : ''
                const needed = ['noopener','noreferrer']
                const relSet = new Set(relVal.split(/\s+/).filter(Boolean).concat(needed))
                const newRel = Array.from(relSet).join(' ')
                if (relMatch) {
                  filtered = filtered.replace(/\srel=("[^"]*"|'[^']*')/i, ` rel="${newRel}"`)
                } else {
                  filtered += ` rel="${newRel}"`
                }
                // default target if present
                if (/\starget=/.test(filtered) && !/\starget=("_blank"|'_blank')/i.test(filtered)) {
                  filtered = filtered.replace(/\starget=("[^"]*"|'[^']*')/i, ' target="_blank"')
                }
              }
              return `<${lower}${filtered}>`
            })
            return html
          }

          // data-i18n (texte simple, sans enfants)
          out = out.replace(/(<[^>]*data-i18n="([^"]+)"[^>]*>)([^<]*)(<\/[^>]+>)/g, (m, open, key, text, close) => {
            const val = getByPath(dict, key)
            return val !== undefined ? `${open}${String(val)}${close}` : m
          })

          // data-i18n-alt
          out = out.replace(/(<[^>]*data-i18n-alt="([^"]+)"[^>]*alt=")([^"]*)("[^>]*>)/g, (m, pre, key, text, post) => {
            const val = getByPath(dict, key)
            return val !== undefined ? `${pre}${String(val)}${post}` : m
          })

          // data-i18n-title
          out = out.replace(/(<[^>]*data-i18n-title="([^"]+)"[^>]*title=")([^"]*)("[^>]*>)/g, (m, pre, key, text, post) => {
            const val = getByPath(dict, key)
            return val !== undefined ? `${pre}${String(val)}${post}` : m
          })

          // data-i18n-html (remplacer le innerHTML par contenu riche localisé, après sanitation)
          // Implémentation robuste avec gestion de l'imbrication du même tag (ex: <span> dans <span>)
          const replaceDataI18nHtml = (markup) => {
            const openRe = /<([a-zA-Z0-9:-]+)([^>]*?)\sdata-i18n-html="([^"]+)"([^>]*)>/g
            let result = ''
            let lastIndex = 0
            let m
            while ((m = openRe.exec(markup)) !== null) {
              const tag = m[1]
              const key = m[3]
              const openStart = m.index
              const openEnd = openRe.lastIndex

              // Chercher la fermeture correspondante avec gestion de profondeur (indexOf)
              const openToken = `<${tag}`
              const closeToken = `</${tag}>`
              let depth = 1
              let searchIdx = openEnd
              while (depth > 0) {
                const nextOpen = markup.indexOf(openToken, searchIdx)
                const nextClose = markup.indexOf(closeToken, searchIdx)
                if (nextClose === -1) break // mal formé
                if (nextOpen !== -1 && nextOpen < nextClose) {
                  depth += 1
                  searchIdx = nextOpen + openToken.length
                } else {
                  depth -= 1
                  searchIdx = nextClose + closeToken.length
                }
              }
              const closeEnd = searchIdx
              const innerStart = openEnd
              const innerEnd = closeEnd - closeToken.length
              if (depth !== 0 || innerEnd < innerStart) {
                // Sécurité: si mal formé, on copie tel quel
                continue
              }
              const val = getByPath(dict, key)
              const safe = val === undefined ? null : sanitizeHtml(String(val))
              result += markup.slice(lastIndex, innerStart)
              result += safe !== null ? safe : markup.slice(innerStart, innerEnd)
              result += closeToken
              lastIndex = closeEnd
            }
            result += markup.slice(lastIndex)
            return result
          }

          out = replaceDataI18nHtml(out)

          // Balises meta principales déjà gérées via head ci-dessous; ici on laisse tel quel
          return out
        }

        // Supprimer les attributs data-i18n* du markup final pour obtenir un HTML propre
        const stripI18nAttrs = (markup) => markup
          .replace(/\sdata-i18n(?:-[a-z-]+)?(?:="[^"]*")?/g, '')

        // Fonction utilitaire pour créer une variante localisée (head + prérendu simple)
        const makeVariant = (lang, urlBase) => {
          let out = html
          // html lang
          out = out.replace(/<html\s+lang="[^"]+"/i, `<html lang="${lang}"`)
          // canonical
          out = out.replace(/<link\s+rel="canonical"[^>]*href="[^"]*"[^>]*>/i, `<link rel="canonical" href="${urlBase}/${lang}/">`)
          // og:url
          out = out.replace(/<meta\s+property="og:url"[^>]*content="[^"]*"[^>]*>/i, `<meta property="og:url" content="${urlBase}/${lang}/">`)
          // Prérendre le contenu marqué
          out = prerenderContent(out, lang)
          // Nettoyer les attributs data-i18n*
          out = stripI18nAttrs(out)
          return out
        }

        const outDir = path.resolve('dist')
        const urlBase = 'https://www.svengali.jp'

        // Écrire EN
        const enDir = path.join(outDir, 'en')
        mkdirSync(enDir, { recursive: true })
        const enHtml = makeVariant('en', urlBase)
        writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8')

        // Écrire JA
        const jaDir = path.join(outDir, 'ja')
        mkdirSync(jaDir, { recursive: true })
        const jaHtml = makeVariant('ja', urlBase)
        writeFileSync(path.join(jaDir, 'index.html'), jaHtml, 'utf8')

        console.log('✅ Pages localisées générées: dist/en/index.html, dist/ja/index.html')
      }
    }
  ]
})

import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'favicon.png', 'logo.svg'],
      manifest: {
        name: 'jayEatCake',
        short_name: 'jay',
        start_url: '../public/',
        description: 'jay eat cake site pma',
        theme_color: '#ffa500',
        icons: [
          {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "16x16",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "32x32",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "144x144",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "150x150",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "192x192",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "512x512",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "192x192",
                "purpose": "any"
            },
            {
                "src": "img/icons/favicon.png",
                "type": "image/png",
                "sizes": "512x512",
                "purpose": "any"
            },
            {
              "src": "img/icons/favicon.png",
              "type": "image/png",
              "sizes": "60x60",
              "purpose": "any"
            },
            {
              "src": "img/icons/favicon.png",
              "type": "image/png",
              "sizes": "76x76",
              "purpose": "any"
            },
            {
              "src": "img/icons/favicon.png",
              "type": "image/png",
              "sizes": "120x120",
              "purpose": "any"
            },
            {
              "src": "img/icons/favicon.png",
              "type": "image/png",
              "sizes": "152x152",
              "purpose": "any"
            },
            {
              "src": "img/icons/favicon.png",
              "type": "image/png",
              "sizes": "180x180",
              "purpose": "any"
            },
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

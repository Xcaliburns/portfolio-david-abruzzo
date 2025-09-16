import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Configuration pour GitHub Pages
  base: '/portfolio-david-abruzzo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
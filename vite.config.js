import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      path: 'path-browserify',
      // fs: 'vite-plugin-node-polyfills/dist/virtual/fs',
      url: 'url-polyfill',
    },
  },
  plugins: [react()],
  base: '/EMS/',
})

######vite.config.js 셋팅 방법#####

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/absproxy/5173/',
  server: {
    host: true,
    allowedHosts: ['ai.freemanyoo.com'],
    origin: 'https://ai.freemanyoo.com',
    hmr: {
      protocol: 'wss',
      host: 'ai.freemanyoo.com',
    },
  },
})
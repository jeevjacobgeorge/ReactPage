import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ReactPage/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
  }
})

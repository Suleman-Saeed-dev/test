import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `test` with your actual repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/test/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/testin/',  // <-- add this line (your repo name)
  plugins: [react()],
})

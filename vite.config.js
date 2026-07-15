import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works whether it's hosted at
// https://username.github.io/repo-name/ or any other subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})

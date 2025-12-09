import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // This forces Vite to always use the React inside this folder, 
    // ignoring the one in your root folder.
    dedupe: ['react', 'react-dom'], 
  },
})
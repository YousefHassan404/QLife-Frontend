import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose the server to your local network
    port: 5173, // Optional: Change the default port (5173 is the default)
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the browser
  },
  build: {
    target: 'esnext', // Use the latest JavaScript features
    sourcemap: true, // Enable source maps for easier debugging
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle dependencies for faster development
  },
});

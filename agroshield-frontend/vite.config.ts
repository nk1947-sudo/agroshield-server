import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
    }
  },
  server: {
    port: 3000,
    open: true, // Automatically opens the app in the browser
  },
  build: {
    outDir: 'dist', // Ensure the output directory is set to "dist"
    sourcemap: true, // Useful for debugging
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
})

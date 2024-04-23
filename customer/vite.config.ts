// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: {
      key: path.resolve(__dirname, 'localhost.key'), // Path to your SSL key file
      cert: path.resolve(__dirname, 'localhost.crt'), // Path to your SSL certificate file
    },
  },
});

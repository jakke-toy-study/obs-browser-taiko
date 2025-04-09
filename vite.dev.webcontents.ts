import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        webContents: resolve(__dirname, 'webContents/index.html'),
      },
      output: {
        dir: 'dist/webContents',
        entryFileNames: '[name].js',
        format: 'esm',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
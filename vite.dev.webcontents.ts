import { defineConfig } from "vite";
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: './',
  plugins:[
    react(), 
    svgr({ svgrOptions: {svgo: false, typescript: false, dimensions: true}})
  ],
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
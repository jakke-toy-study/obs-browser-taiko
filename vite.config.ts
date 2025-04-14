import { defineConfig } from "vite";
import { resolve } from 'path';
import { builtinModules } from 'module';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: './',
  plugins:[
    react(), 
    svgr({
      include: "**/*.svg?react"
    }),
  ],
  build: {
    outDir: '.vite/',
    assetsDir: './assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.ts'),
        preload: resolve(__dirname, 'src/preload.ts'),
        index: resolve(__dirname, 'index.html'),
        webContents: resolve(__dirname, 'webContents/index.html'),
      },
      external: [
        'electron',
        'http'
      ],
      output: {
        entryFileNames: '[name].js',
        format: 'esm',
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      "rendererArea": resolve(__dirname, './src/rendererArea'),
      "mainArea": resolve(__dirname, './src/mainArea'),
    },
  },
});
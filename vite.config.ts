import { defineConfig } from "vite";
import { resolve } from 'path';
import { builtinModules } from 'module';

export default defineConfig({
  base: './',
  build: {
    outDir: '.vite/',
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
    },
  },
});
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    base: '/4urneyRoadmap/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist', // Output to 'dist' folder
    },
  };
});


import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Dictionary-ts/', // Make sure this matches your GitHub repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Make sure this points to your root index.html
    },
  },
});
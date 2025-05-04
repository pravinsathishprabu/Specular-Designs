import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Specular-Designs/', // Set the base path to match your repository name
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist'
  },
});

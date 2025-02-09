import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const _plugins = [
  react(),
  imagetools({
    defaultDirectives: () => {
      return new URLSearchParams({
        format: 'webp',
      });
    },
  }),
];

export default defineConfig({
  base: '/',
  plugins: _plugins,
  build: {
    outDir: 'build',
  },
});

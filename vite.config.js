import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/components': {
        target: 'https://components-api.hetprajapati80.workers.dev',
        changeOrigin: true,
        secure: false, // If the API is HTTP and not HTTPS
        rewrite: (path) => path.replace(/^\/components/, '/components'),
      },
    },
  },
});

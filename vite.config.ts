// Vite configuration file
// It configures the Vite dev server and plugins (like React and ESLint, e.t.c)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/src/types
export default defineConfig({
  server: {
    hmr: {
      overlay: false, // 👈 disables browser overlay
    },
  },
  plugins: [
    react(),
    eslint({
      emitWarning: true, // show warnings in terminal
      emitError: true, // show errors in terminal
      failOnWarning: false, // don't fail dev server
      failOnError: false,   // don't fail dev server
      lintOnStart: false,  // <-- IMPORTANT: don't lint everything on startup
    }),
  ],
});



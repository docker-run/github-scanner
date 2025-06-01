import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import codegen from 'vite-plugin-graphql-codegen';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      modules: resolve(__dirname, 'src/modules'),
    },
  },
  plugins: [react(), codegen()],
})

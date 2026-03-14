import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/oi-architecture/',
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'node',
    globals: true,
  },
})

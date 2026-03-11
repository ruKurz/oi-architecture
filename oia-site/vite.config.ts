import { defineConfig } from 'vite'

export default defineConfig({
  base: '/oi-architecture/',
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'node',
    globals: true,
  },
})

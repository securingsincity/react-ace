import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: './example',
  build: {
    outDir: '../example/static',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'example/index.html'),
        split: resolve(__dirname, 'example/split.html'),
        diff: resolve(__dirname, 'example/diff.html')
      }
    }
  },
  server: {
    port: 9000,
    host: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
})
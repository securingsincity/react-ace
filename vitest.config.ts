import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    coverage: {
      reporter: ['html', 'text', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'lib/',
        'example/',
        '*.config.*',
        '*.d.ts'
      ]
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
})
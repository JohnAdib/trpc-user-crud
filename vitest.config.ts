import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@app/*': path.resolve(__dirname, './app/*'),
      '@server/*': path.resolve(__dirname, './server/*'),
      '@components/*': path.resolve(__dirname, './components/*'),
      '@interfaces': path.resolve(__dirname, './interfaces'),
      '@db': path.resolve(__dirname, './db'),
      '@/*': path.resolve(__dirname, './src/*'),
      '~/trpc/*': path.resolve(__dirname, './trpc/*')
    }
  }
})

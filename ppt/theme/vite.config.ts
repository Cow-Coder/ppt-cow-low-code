import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: '/ppt-cow-low-code/',
  plugins: [svgLoader()],
})

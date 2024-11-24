import type { Config } from 'tailwindcss'
import tailwindPrimeui from 'tailwindcss-primeui'

const config: Config = {
  content: [
    'index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
  ],
  themes: {
    extend: {}
  },
  plugins: [tailwindPrimeui]
}

export default config

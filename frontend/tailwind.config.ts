import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

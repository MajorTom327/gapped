import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(_dirname, "./src"),
    },
  },
})
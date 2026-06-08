import path from "path" // Módulo nativo do Node para lidar com caminhos de arquivos
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Aqui você define que o "@" aponta para a pasta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

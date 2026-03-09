import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import eslint from "vite-plugin-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createAlias = (dir) => path.resolve(__dirname, `src/${dir}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      fastRefresh: true,
    }),
    eslint()
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": createAlias(""), // src
      "@components": createAlias("components"), // src/components
      "~img": createAlias("assets/images"), // src/assets/images
      "#types": createAlias("types"), // src/types
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // use relative paths so it works on GitHub Pages project sites
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  build: {
    outDir: "docs", // optional: deploy from /docs on the main branch
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

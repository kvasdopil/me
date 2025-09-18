import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? "/",
  // Use homepage from package.json for proper routing
  build: {
    outDir: "dist",
  },
});

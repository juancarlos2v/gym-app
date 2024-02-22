import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ],
  build: {
    outDir: "../src/main/resources/static",
    watch: {
      include: "src/**",
      exclude: "node_modules/**, .git/**, dist/**, .vscode/**",
    },
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

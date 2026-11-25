import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    outDir: "../custom_components/calorie_tracker/www",
    emptyOutDir: true,
    lib: {
      entry: resolve(here, "src/panel.tsx"),
      formats: ["es"],
      fileName: () => "calorie-tracker-panel.js",
    },
  },
});

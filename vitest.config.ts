import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    coverage: {
      reporter: ["html", "text", "lcov"],
      exclude: [
        "node_modules/",
        "dist/",
        "lib/",
        "example/",
        "*.config.*",
        "*.d.ts"
      ]
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  }
});

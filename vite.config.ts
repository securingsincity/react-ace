import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      mode === "production" ? "production" : "development"
    )
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "ReactAce",
      fileName: format =>
        mode === "production" ? `react-ace.min.js` : `react-ace.js`,
      formats: ["umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        exports: "named"
      }
    },
    commonjsOptions: {
      include: [/lib/, /node_modules/]
    },
    outDir: "dist",
    sourcemap: true,
    minify: mode === "production"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  }
}));

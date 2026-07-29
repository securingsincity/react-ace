import { defineConfig, type UserConfig } from "tsdown";

// JSX is transformed to classic React.createElement via tsconfig.json ("jsx": "react")
// to keep supporting pre-17 React peers.

const umdBase: UserConfig = {
  entry: { "react-ace": "src/index.ts" },
  format: "umd",
  outDir: "dist",
  target: "es2017",
  platform: "browser",
  sourcemap: true,
  globalName: "ReactAce",
  deps: {
    neverBundle: ["react", "react-dom"],
    alwaysBundle: [/^ace-builds/, "diff-match-patch", "fast-equals", "prop-types"]
  },
  outputOptions: {
    globals: { react: "React", "react-dom": "ReactDOM" },
    exports: "named",
    entryFileNames: "react-ace.js"
  },
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  clean: false,
  report: false
};

export default defineConfig([
  {
    entry: [
      "src/index.ts",
      "src/ace.tsx",
      "src/split.tsx",
      "src/diff.tsx",
      "src/editorOptions.ts",
      "src/types.ts"
    ],
    format: "cjs",
    unbundle: true,
    dts: true,
    outDir: "lib",
    target: "es2020",
    platform: "neutral",
    sourcemap: true,
    deps: { neverBundle: true },
    outputOptions: { exports: "named" },
    outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
    report: false
  },
  { ...umdBase, minify: false },
  {
    ...umdBase,
    outputOptions: { ...umdBase.outputOptions, entryFileNames: "react-ace.min.js" },
    minify: true
  }
]);

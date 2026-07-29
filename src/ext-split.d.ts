// ace-builds only declares the extensionless specifier; mirror it for the
// ".js" form required by Node ESM resolution.
declare module "ace-builds/src-noconflict/ext-split.js" {
  const _exports: typeof import("ace-builds-internal/split");
  export = _exports;
}

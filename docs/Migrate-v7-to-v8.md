
## 1) Uninstall `brace` and install `ace-builds`

```sh
npm uninstall brace
npm install react-ace@8.0.0 ace-builds
```

## 2) migrate modes and themes

For example replace

```js
import 'brace/mode/html'
import 'brace/theme/monokai'
import 'brace/snippets/html'
```

with

```js
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/snippets/html'
```

## 3) You may need to configure the ace-build workers 

See the discussion here: https://github.com/securingsincity/react-ace/issues/725

If autocomplete or validation features are not working or you see an error message in the console regarding the ace-build worker, you may need to configure it to load properly using webpack or point to a CDN copy of the worker. 

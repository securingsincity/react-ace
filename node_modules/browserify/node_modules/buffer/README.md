# buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url] [![gratipay][gratipay-image]][gratipay-url]

#### The buffer module from [node.js](http://nodejs.org/), for the browser.

[![saucelabs][saucelabs-image]][saucelabs-url]

[travis-image]: https://img.shields.io/travis/feross/buffer.svg?style=flat
[travis-url]: https://travis-ci.org/feross/buffer
[npm-image]: https://img.shields.io/npm/v/buffer.svg?style=flat
[npm-url]: https://npmjs.org/package/buffer
[downloads-image]: https://img.shields.io/npm/dm/buffer.svg?style=flat
[gratipay-image]: https://img.shields.io/gittip/feross.svg?style=flat
[gratipay-url]: https://www.gittip.com/feross
[saucelabs-image]: https://saucelabs.com/browser-matrix/buffer.svg
[saucelabs-url]: https://saucelabs.com/u/buffer

With [browserify](http://browserify.org), simply `require('buffer')` or use the `Buffer` global and you will get this module.

The goal is to provide an API that is 100% identical to
[node's Buffer API](http://nodejs.org/api/buffer.html). Read the
[official docs](http://nodejs.org/api/buffer.html) for the full list of properties,
instance methods, and class methods that are supported.

## features

- Manipulate binary data like a boss, in all browsers -- even IE6!
- Super fast. Backed by Typed Arrays (`Uint8Array`/`ArrayBuffer`, not `Object`)
- Extremely small bundle size (**5.04KB minified + gzipped**, 35.5KB with comments)
- Excellent browser support (IE 6+, Chrome 4+, Firefox 3+, Safari 5.1+, Opera 11+, iOS, etc.)
- Preserves Node API exactly, with one important difference (see below)
- `.slice()` returns instances of the same type (Buffer)
- Square-bracket `buf[4]` notation works, even in old browsers like IE6!
- Does not modify any browser prototypes or put anything on `window`
- Comprehensive test suite


## install

To use this module directly (without browserify), install it:

```bash
npm install buffer
```

This module was previously called **native-buffer-browserify**, but please use **buffer**
from now on.


## usage

The module's API is identical to node's `Buffer` API. Read the
[official docs](http://nodejs.org/api/buffer.html) for the full list of properties,
instance methods, and class methods that are supported.

As mentioned above, `require('buffer')` or use the `Buffer` global with
[browserify](http://browserify.org) and this module will automatically be included
in your bundle. Almost any npm module will work in the browser, even if it assumes that
the node `Buffer` API will be available.

To depend on this module explicitly (without browserify), require it like this:

```js
var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
```

To require this module explicitly, use `require('buffer/')` which tells the node.js module
lookup algorithm (also used by browserify) to use the **npm module** named `buffer`
instead of the **node.js core** module named `buffer`!


## how does it work?

The `Buffer` constructor returns instances of `Uint8Array` that are augmented with function properties for all the `Buffer` API functions. We use `Uint8Array` so that square bracket notation works as expected -- it returns a single octet. By augmenting the instances, we can avoid modifying the `Uint8Array` prototype.


## differences

#### IMPORTANT: always use `Buffer.isBuffer` instead of `instanceof Buffer`

The Buffer constructor returns a `Uint8Array` (with all the Buffer methods added as
properties on the instance) for performance reasons, so `instanceof Buffer` won't work. In
node, you can use either `Buffer.isBuffer` or `instanceof Buffer` to check if an object
is a `Buffer`. But, in the browser you must use `Buffer.isBuffer` to detect the special
`Uint8Array`-based Buffers.

#### Minor: `buf.slice()` does not modify parent buffer's memory in old browsers

If you only support modern browsers (specifically, those with typed array support), then
this issue does not affect you.

In node, the `slice()` method returns a new `Buffer` that shares underlying memory with
the original Buffer. When you modify one buffer, you modify the other. [Read more.](http://nodejs.org/api/buffer.html#buffer_buf_slice_start_end)

This works correctly in browsers with typed array support (\* with the exception of Firefox older than version 30). Browsers that lack typed arrays get an alternate buffer implementation based on `Object` which has no mechanism to point separate `Buffer`s to the same underlying slab of memory.

\* *Firefox older than version 30 gets the `Object` implementation -- not the typed arrays one -- because of [this
bug](https://bugzilla.mozilla.org/show_bug.cgi?id=952403) (now fixed!) that made it impossible to add properties to a typed array.*


## tracking the latest node api

This module tracks the Buffer API in the latest (unstable) version of node.js. The Buffer
API is considered **stable** in the
[node stability index](http://nodejs.org/docs/latest/api/documentation.html#documentation_stability_index),
so it is unlikely that there will ever be breaking changes.
Nonetheless, when/if the Buffer API changes in node, this module's API will change
accordingly.

## performance

See perf tests in `/perf`.

`BrowserBuffer` is the browser `buffer` module (this repo). `Uint8Array` is included as a
sanity check (since `BrowserBuffer` uses `Uint8Array` under the hood, `Uint8Array` will
always be at least a bit faster). Finally, `NodeBuffer` is the node.js buffer module,
which is included to compare against.

```
# Chrome 38

BrowserBuffer#bracket-notation x 11,457,464 ops/sec ±0.86% (66 runs sampled) bundle.js:5262
Uint8Array#bracket-notation x 10,824,332 ops/sec ±0.74% (65 runs sampled) bundle.js:5262
Fastest is BrowserBuffer#bracket-notation

BrowserBuffer#concat x 450,532 ops/sec ±0.76% (68 runs sampled) bundle.js:5267
Uint8Array#concat x 1,368,911 ops/sec ±1.50% (62 runs sampled) bundle.js:5267
Fastest is Uint8Array#concat

BrowserBuffer#copy(16000) x 903,001 ops/sec ±0.96% (67 runs sampled) bundle.js:5261
Uint8Array#copy(16000) x 1,422,441 ops/sec ±1.04% (66 runs sampled) bundle.js:5261
Fastest is Uint8Array#copy(16000)

BrowserBuffer#copy(16) x 11,431,358 ops/sec ±0.46% (69 runs sampled) bundle.js:5261
Uint8Array#copy(16) x 13,944,163 ops/sec ±1.12% (68 runs sampled) bundle.js:5261
Fastest is Uint8Array#copy(16)

BrowserBuffer#new(16000) x 106,329 ops/sec ±6.70% (44 runs sampled) bundle.js:5253
Uint8Array#new(16000) x 131,001 ops/sec ±2.85% (31 runs sampled) bundle.js:5253
Fastest is Uint8Array#new(16000)

BrowserBuffer#new(16) x 1,554,491 ops/sec ±1.60% (65 runs sampled) bundle.js:5253
Uint8Array#new(16) x 6,623,930 ops/sec ±1.66% (65 runs sampled) bundle.js:5253
Fastest is Uint8Array#new(16)

BrowserBuffer#readDoubleBE x 112,830 ops/sec ±0.51% (69 runs sampled) bundle.js:5274
DataView#getFloat64 x 93,500 ops/sec ±0.57% (68 runs sampled) bundle.js:5274
Fastest is BrowserBuffer#readDoubleBE

BrowserBuffer#readFloatBE x 146,678 ops/sec ±0.95% (68 runs sampled) bundle.js:5274
DataView#getFloat32 x 99,311 ops/sec ±0.41% (67 runs sampled) bundle.js:5274
Fastest is BrowserBuffer#readFloatBE

BrowserBuffer#readUInt32LE x 843,214 ops/sec ±0.70% (69 runs sampled) bundle.js:5274
DataView#getUint32 x 103,024 ops/sec ±0.64% (67 runs sampled) bundle.js:5274
Fastest is BrowserBuffer#readUInt32LE

BrowserBuffer#slice x 1,013,941 ops/sec ±0.75% (67 runs sampled) bundle.js:5257
Uint8Array#subarray x 1,903,928 ops/sec ±0.53% (67 runs sampled) bundle.js:5257
Fastest is Uint8Array#subarray

BrowserBuffer#writeFloatBE x 61,387 ops/sec ±0.90% (67 runs sampled) bundle.js:5231
DataView#setFloat32 x 141,249 ops/sec ±0.40% (66 runs sampled) bundle.js:5231
Fastest is DataView#setFloat32

# Firefox 33

"BrowserBuffer#bracket-notation x 20,800,421 ops/sec ±1.84% (60 runs sampled)" bundle.js:5262
"Uint8Array#bracket-notation x 20,826,235 ops/sec ±2.02% (61 runs sampled)" bundle.js:5262
"Fastest is BrowserBuffer#bracket-notation,Uint8Array#bracket-notation"

"BrowserBuffer#concat x 153,076 ops/sec ±2.32% (61 runs sampled)" bundle.js:5267
"Uint8Array#concat x 1,255,674 ops/sec ±8.65% (52 runs sampled)" bundle.js:5267
"Fastest is Uint8Array#concat"

"BrowserBuffer#copy(16000) x 1,105,312 ops/sec ±1.16% (63 runs sampled)" bundle.js:5261
"Uint8Array#copy(16000) x 1,615,911 ops/sec ±0.55% (66 runs sampled)" bundle.js:5261
"Fastest is Uint8Array#copy(16000)"

"BrowserBuffer#copy(16) x 16,357,599 ops/sec ±0.73% (68 runs sampled)" bundle.js:5261
"Uint8Array#copy(16) x 31,436,281 ops/sec ±1.05% (68 runs sampled)" bundle.js:5261
"Fastest is Uint8Array#copy(16)"

"BrowserBuffer#new(16000) x 52,995 ops/sec ±6.01% (35 runs sampled)" bundle.js:5253
"Uint8Array#new(16000) x 87,686 ops/sec ±5.68% (45 runs sampled)" bundle.js:5253
"Fastest is Uint8Array#new(16000)"

"BrowserBuffer#new(16) x 252,031 ops/sec ±1.61% (66 runs sampled)" bundle.js:5253
"Uint8Array#new(16) x 8,477,026 ops/sec ±0.49% (68 runs sampled)" bundle.js:5253
"Fastest is Uint8Array#new(16)"

"BrowserBuffer#readDoubleBE x 99,871 ops/sec ±0.41% (69 runs sampled)" bundle.js:5274
"DataView#getFloat64 x 285,663 ops/sec ±0.70% (68 runs sampled)" bundle.js:5274
"Fastest is DataView#getFloat64"

"BrowserBuffer#readFloatBE x 115,540 ops/sec ±0.42% (69 runs sampled)" bundle.js:5274
"DataView#getFloat32 x 288,722 ops/sec ±0.82% (68 runs sampled)" bundle.js:5274
"Fastest is DataView#getFloat32"

"BrowserBuffer#readUInt32LE x 633,926 ops/sec ±1.08% (67 runs sampled)" bundle.js:5274
"DataView#getUint32 x 294,808 ops/sec ±0.79% (64 runs sampled)" bundle.js:5274
"Fastest is BrowserBuffer#readUInt32LE"

"BrowserBuffer#slice x 349,425 ops/sec ±0.46% (69 runs sampled)" bundle.js:5257
"Uint8Array#subarray x 5,965,819 ops/sec ±0.60% (65 runs sampled)" bundle.js:5257
"Fastest is Uint8Array#subarray"

"BrowserBuffer#writeFloatBE x 59,980 ops/sec ±0.41% (67 runs sampled)" bundle.js:5231
"DataView#setFloat32 x 317,634 ops/sec ±0.63% (68 runs sampled)" bundle.js:5231
"Fastest is DataView#setFloat32"

# Safari 8

[Log] BrowserBuffer#bracket-notation x 10,279,729 ops/sec ±2.25% (56 runs sampled) (bundle.js, line 5262)
[Log] Uint8Array#bracket-notation x 10,030,767 ops/sec ±2.23% (59 runs sampled) (bundle.js, line 5262)
[Log] Fastest is BrowserBuffer#bracket-notation,Uint8Array#bracket-notation (bundle.js, line 5265)

[Log] BrowserBuffer#concat x 144,138 ops/sec ±1.38% (65 runs sampled) (bundle.js, line 5267)
[Log] Uint8Array#concat x 4,950,764 ops/sec ±1.70% (63 runs sampled) (bundle.js, line 5267)
[Log] Fastest is Uint8Array#concat (bundle.js, line 5270)

[Log] BrowserBuffer#copy(16000) x 1,058,548 ops/sec ±1.51% (64 runs sampled) (bundle.js, line 5261)
[Log] Uint8Array#copy(16000) x 1,409,666 ops/sec ±1.17% (65 runs sampled) (bundle.js, line 5261)
[Log] Fastest is Uint8Array#copy(16000) (bundle.js, line 5264)

[Log] BrowserBuffer#copy(16) x 6,282,529 ops/sec ±1.88% (58 runs sampled) (bundle.js, line 5261)
[Log] Uint8Array#copy(16) x 11,907,128 ops/sec ±2.87% (58 runs sampled) (bundle.js, line 5261)
[Log] Fastest is Uint8Array#copy(16) (bundle.js, line 5264)

[Log] BrowserBuffer#new(16000) x 101,663 ops/sec ±3.89% (57 runs sampled) (bundle.js, line 5253)
[Log] Uint8Array#new(16000) x 22,050,818 ops/sec ±6.51% (46 runs sampled) (bundle.js, line 5253)
[Log] Fastest is Uint8Array#new(16000) (bundle.js, line 5256)

[Log] BrowserBuffer#new(16) x 176,072 ops/sec ±2.13% (64 runs sampled) (bundle.js, line 5253)
[Log] Uint8Array#new(16) x 24,385,731 ops/sec ±5.01% (51 runs sampled) (bundle.js, line 5253)
[Log] Fastest is Uint8Array#new(16) (bundle.js, line 5256)

[Log] BrowserBuffer#readDoubleBE x 41,341 ops/sec ±1.06% (67 runs sampled) (bundle.js, line 5274)
[Log] DataView#getFloat64 x 322,280 ops/sec ±0.84% (68 runs sampled) (bundle.js, line 5274)
[Log] Fastest is DataView#getFloat64 (bundle.js, line 5277)

[Log] BrowserBuffer#readFloatBE x 46,141 ops/sec ±1.06% (65 runs sampled) (bundle.js, line 5274)
[Log] DataView#getFloat32 x 337,025 ops/sec ±0.43% (69 runs sampled) (bundle.js, line 5274)
[Log] Fastest is DataView#getFloat32 (bundle.js, line 5277)

[Log] BrowserBuffer#readUInt32LE x 151,551 ops/sec ±1.02% (66 runs sampled) (bundle.js, line 5274)
[Log] DataView#getUint32 x 308,278 ops/sec ±0.94% (67 runs sampled) (bundle.js, line 5274)
[Log] Fastest is DataView#getUint32 (bundle.js, line 5277)

[Log] BrowserBuffer#slice x 197,365 ops/sec ±0.95% (66 runs sampled) (bundle.js, line 5257)
[Log] Uint8Array#subarray x 9,558,024 ops/sec ±3.08% (58 runs sampled) (bundle.js, line 5257)
[Log] Fastest is Uint8Array#subarray (bundle.js, line 5260)

[Log] BrowserBuffer#writeFloatBE x 17,518 ops/sec ±1.03% (63 runs sampled) (bundle.js, line 5231)
[Log] DataView#setFloat32 x 319,751 ops/sec ±0.48% (68 runs sampled) (bundle.js, line 5231)
[Log] Fastest is DataView#setFloat32 (bundle.js, line 5234)

# Node 0.11.14

BrowserBuffer#bracket-notation x 10,489,828 ops/sec ±3.25% (90 runs sampled)
Uint8Array#bracket-notation x 10,534,884 ops/sec ±0.81% (92 runs sampled)
NodeBuffer#bracket-notation x 10,389,910 ops/sec ±0.97% (87 runs sampled)
Fastest is Uint8Array#bracket-notation,BrowserBuffer#bracket-notation

BrowserBuffer#concat x 487,830 ops/sec ±2.58% (88 runs sampled)
Uint8Array#concat x 1,814,327 ops/sec ±1.28% (88 runs sampled)
NodeBuffer#concat x 1,636,523 ops/sec ±1.88% (73 runs sampled)
Fastest is Uint8Array#concat

BrowserBuffer#copy(16000) x 1,073,665 ops/sec ±0.77% (90 runs sampled)
Uint8Array#copy(16000) x 1,348,517 ops/sec ±0.84% (89 runs sampled)
NodeBuffer#copy(16000) x 1,289,533 ops/sec ±0.82% (93 runs sampled)
Fastest is Uint8Array#copy(16000)

BrowserBuffer#copy(16) x 12,782,706 ops/sec ±0.74% (85 runs sampled)
Uint8Array#copy(16) x 14,180,427 ops/sec ±0.93% (92 runs sampled)
NodeBuffer#copy(16) x 11,083,134 ops/sec ±1.06% (89 runs sampled)
Fastest is Uint8Array#copy(16)

BrowserBuffer#new(16000) x 141,678 ops/sec ±3.30% (67 runs sampled)
Uint8Array#new(16000) x 161,491 ops/sec ±2.96% (60 runs sampled)
NodeBuffer#new(16000) x 292,699 ops/sec ±3.20% (55 runs sampled)
Fastest is NodeBuffer#new(16000)

BrowserBuffer#new(16) x 1,655,466 ops/sec ±2.41% (82 runs sampled)
Uint8Array#new(16) x 14,399,926 ops/sec ±0.91% (94 runs sampled)
NodeBuffer#new(16) x 3,894,696 ops/sec ±0.88% (92 runs sampled)
Fastest is Uint8Array#new(16)

BrowserBuffer#readDoubleBE x 109,582 ops/sec ±0.75% (93 runs sampled)
DataView#getFloat64 x 91,235 ops/sec ±0.81% (90 runs sampled)
NodeBuffer#readDoubleBE x 88,593 ops/sec ±0.96% (81 runs sampled)
Fastest is BrowserBuffer#readDoubleBE

BrowserBuffer#readFloatBE x 139,854 ops/sec ±1.03% (85 runs sampled)
DataView#getFloat32 x 98,744 ops/sec ±0.80% (89 runs sampled)
NodeBuffer#readFloatBE x 92,769 ops/sec ±0.94% (93 runs sampled)
Fastest is BrowserBuffer#readFloatBE

BrowserBuffer#readUInt32LE x 710,861 ops/sec ±0.82% (92 runs sampled)
DataView#getUint32 x 117,893 ops/sec ±0.84% (91 runs sampled)
NodeBuffer#readUInt32LE x 851,412 ops/sec ±0.72% (93 runs sampled)
Fastest is NodeBuffer#readUInt32LE

BrowserBuffer#slice x 1,673,877 ops/sec ±0.73% (94 runs sampled)
Uint8Array#subarray x 6,919,243 ops/sec ±0.67% (90 runs sampled)
NodeBuffer#slice x 4,617,604 ops/sec ±0.79% (93 runs sampled)
Fastest is Uint8Array#subarray

BrowserBuffer#writeFloatBE x 66,011 ops/sec ±0.75% (93 runs sampled)
DataView#setFloat32 x 127,760 ops/sec ±0.72% (93 runs sampled)
NodeBuffer#writeFloatBE x 103,352 ops/sec ±0.83% (93 runs sampled)
Fastest is DataView#setFloat32
```


## credit

This was originally forked from [buffer-browserify](https://github.com/toots/buffer-browserify).


## license

MIT. Copyright (C) [Feross Aboukhadijeh](http://feross.org), and other contributors. Originally forked from an MIT-licensed module by Romain Beauxis.

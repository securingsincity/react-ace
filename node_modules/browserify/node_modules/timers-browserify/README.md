# Overview

Adds support for the `timers` module to browserify.

## Wait, isn't it already supported in the browser?

The public methods of the `timers` module are:

* `setTimeout(callback, delay, [arg], [...])`
* `clearTimeout(timeoutId)`
* `setInterval(callback, delay, [arg], [...])`
* `clearInterval(intervalId)`

and indeed, browsers support these already.

## So, why does this exist?

The `timers` module also includes some private methods used in other built-in
Node.js modules:

* `enroll(item, delay)`
* `unenroll(item)`
* `active(item)`

These are used to efficiently support a large quantity of timers with the same
timeouts by creating only a few timers under the covers.

Node.js also offers the `immediate` APIs, which aren't yet available cross-browser, so we polyfill those:

* `setImmediate(callback, [arg], [...])`
* `clearImmediate(immediateId)`

# License

[MIT](http://jryans.mit-license.org/)

import { jsdom } from 'jsdom';

global.document = jsdom('<div id="app"></div>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  appName: 'other',
  userAgent: 'node.js',
  platform: 'node.js',
};

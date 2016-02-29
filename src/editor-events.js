
const Events = [
  'change',
  'focus',
  'blur',
  'copy',
  'paste',
];

function capitalize(string) {
  return string.substring(0, 1).toUpperCase().concat(string.substring(1));
}

export function createListeners() {
  Events.forEach(method => {
    const onMethod = `on${capitalize(method)}`;
    if (this[onMethod]) return;
    this[onMethod] = (arg) => {
      if (this.props[onMethod]) {
        this.props[onMethod](arg);
      }
    };
  });
}

export function bindListeners(editor) {
  Events.forEach(method => {
    const onMethod = `on${capitalize(method)}`;
    editor.on(method, this[onMethod].bind(this));
  });
}



export default function setEditorProperties(editor, oldProps, nextProps) {
  if (nextProps.mode !== oldProps.mode) {
    editor.getSession().setMode('ace/mode/' + nextProps.mode);
  }

  if (nextProps.theme !== oldProps.theme) {
    editor.setTheme('ace/theme/' + nextProps.theme);
  }

  if (nextProps.fontSize !== oldProps.fontSize) {
    editor.setFontSize(nextProps.fontSize);
  }

  if (nextProps.wrapEnabled !== oldProps.wrapEnabled) {
    editor.getSession().setUseWrapMode(nextProps.wrapEnabled);
  }

  if (nextProps.minLines !== oldProps.minLines) {
    editor.setOption('minLines', nextProps.minLines);
  }

  if (nextProps.maxLines !== oldProps.maxLines) {
    editor.setOption('maxLines', nextProps.maxLines);
  }

  if (nextProps.readOnly !== oldProps.readOnly) {
    editor.setOption('readOnly', nextProps.readOnly);
  }

  if (nextProps.highlightActiveLine !== oldProps.highlightActiveLine) {
    editor.setOption('highlightActiveLine', nextProps.highlightActiveLine);
  }

  if (nextProps.tabSize !== oldProps.tabSize) {
    editor.setOption('tabSize', nextProps.tabSize);
  }

  if (nextProps.showPrintMargin !== oldProps.showPrintMargin) {
    editor.setShowPrintMargin(nextProps.showPrintMargin);
  }

  if (nextProps.showGutter !== oldProps.showGutter) {
    editor.renderer.setShowGutter(nextProps.showGutter);
  }
}

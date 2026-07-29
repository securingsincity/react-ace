import ace from "./ace";
import diff from "./diff";
import split from "./split";
export type { IAceEditorProps } from "./ace";
export type { IDiffEditorProps, IDiffEditorState } from "./diff";
export type { ISplitEditorProps } from "./split";
export type {
  IAceOptions,
  IAnnotation,
  ICommand,
  ICommandBindKey,
  ICommandManager,
  IEditorProps,
  IMarker
} from "./types";
export { split, diff };
export default ace;

# Changelog

## 8.0.0

_BREAKING CHANGES!!!_

- Removes brace as a dependency for ace-builds
- Updates all documentation
- Updates all examples

## 7.0.5

- Upgrades dev dependencies

## 7.0.4 (7.0.3 was busted)

- Upgrades dev dependencies
- Export types
- Remove babel polyfill

## 7.0.2

- Support node 11 in development
- Upgrade dev dependencies
- Add typings for EditorOptions/EditorEvents, remove index signatures #651
- Fix types #652

## 7.0.1

- Fix types #646

## 7.0.0

- Fully move to TypeScript interally
- Publish typings for the split and diff editor

## 6.6.0

- Upgrade dependencies

## 6.5.0

- Upgrade dependencies
- Do not clear active line and active word markers #604
- New 'placeholder' prop to specify placeholder text #603
- Added optional prop to disable navigating to end of file #602

## 6.4.0

- Upgrade types
- Upgrade webpack, sinon

## 6.3.2

- Move `husky` and `pretty-quick` to devDependencies

## 6.3.1

- Fix npm deployments
- Support ace.require to fallback to the CDN version of Ace.

## 6.2.2

- Upgrade dev dependencies (webpack,jsdom,react)
- In type definitions, move debounceChangePeriod from AceOptions

## 6.2.1

- Add editor to onFocus event as per issue #389
- Upgraded webpack
- Add exec argument in ts #535
- Prettier as part of the build

## 6.2.0

- Support for React 17
- Upgraded dependencies
- AceOptions interface adds debounceChangePeriod
- update types

## 6.1.4

- Fixes #479 Diff component does not refresh when value prop changes

## 6.1.3

- Fixes #300 where users were not able to set annotations for multiline text that is changed

## 6.1.2

- Additional Diff documentation
- Add className to diff
- Add Logo to docs
- upgrade dev dependencies

## 6.1.1

- Fixes typo in `console.warn`
- Adds style property to typings

## 6.1.0

- Onchange support in diff editor
- Debounce Prop support in split editor

## 6.0.0

- Adds Diff editor

## 5.10.0

- Upgraded many build dependencies
- Split editor adds UndoManager

## 5.9.0

- First value resets undo manager. Closes #339 and #223
- Updated split editor documentation

## 5.8.0

- Upgrade brace to 0.11
- More loose comparison for componentDidMount for default value. Closes #317. Thanks @VijayKrish93

## 5.7.0

- Adds debounce option for onChange event
- Add support onCursorChange event
- Adds editor as second argument to the onBlur

## 5.5.0

- Adds the onInput event

## 5.4.0

- #285: Added the possibility to change key bindings of existing commands. thanks to @FurcyPin

## 5.3.0

- Adds support for React 16 thanks to @layershifter
- Removes react and react-dom from build. thanks to @M-ZubairAhmed

## 5.2.1 and 5.2.2

- Remove Open Collective from build

## 5.2.0

- Add support for events in onBlur and onFocus callbacks
- Adds onValidate callback

## 5.1.2

- Resize on component did mount and component did update. Fixes #207 and #212.

## 5.1.1

- Fix TypeScript definitions for EditorProps

## 5.1.0

- Editor options do not get reverted due to default props #226
- Markers can be unset to an empty value #229
- Typescript update to set state to empty object instead of undefined

## 5.0.1

- Fixes file extension issue related to `5.0.0`.

## 5.0.0

- Support for a Split View Editor - see more about the Split View editor [here](https://github.com/securingsincity/react-ace/blob/master/docs/Split.md)
- Ace Editor will now warn on mispelled editor options
- All new documentation

## 4.4.0

- Ace's resize method will be called when the prop `width` changes

## 4.3.0

- Adds support for `onSelectionChange` event
- Add the `Event` as an optional argument to the `onChange` prop
- All new examples

## 4.2.2

- [bugfix] should not handle markers without any markers

## 4.2.1

- Use `prop-type` package instead of React.PropType

## 4.2.0

- Fix `ref` related error

## 4.1.6

- Reverse `PureComponent` use in AceEditor back to `Component`

## 4.1.5

- Add ability to set `scrollMargins`

## 4.1.4

- TypeScript Definitions

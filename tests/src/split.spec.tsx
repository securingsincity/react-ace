import SplitEditor from "../../src/split";
import { jest, expect } from "@jest/globals";
import { render as mount, screen } from "@testing-library/react";
import React from "react";
import { IAceEditor, IMarker } from "../../src/types";
describe("Split Component", () => {
  // Required for the document.getElementById used by Ace can work in the test environment

  describe("General", () => {
    let instance: SplitEditor | null = null;
    it("should render without problems with defaults properties", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
        />
      );
    });
    it("should get the ace library from the onBeforeLoad callback", () => {
      const beforeLoadCallback = jest.fn();
      mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onBeforeLoad={beforeLoadCallback}
        />
      );

      expect(beforeLoadCallback).toBeCalledTimes(1);
    });

    it("should trigger console warn if editorOption is called", () => {
      jest.resetModules();
      jest.spyOn(console, "warn");
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          enableBasicAutocompletion={true}
        />
      );
      expect(console.warn).toBeCalled();
    });

    it("should set the editor props to the Ace element", () => {
      const editorProperties = {
        react: "setFromReact",
        test: "setFromTest"
      };
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          editorProps={editorProperties}
        />
      );

      const editor = instance!.splitEditor;

      expect(editor.react).toEqual(editorProperties.react);
      expect(editor.test).toEqual(editorProperties.test);
    });

    it("should update the orientation on componentDidUpdate", () => {
      let orientation = "below";
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          orientation={orientation}
        />
      );

      // Read set value
      let editor = instance!.split;
      expect(editor.getOrientation()).toEqual(editor.BELOW);

      // Now trigger the componentDidUpdate
      orientation = "beside";
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          orientation={orientation}
        />
      );
      editor = instance!.split;
      expect(editor.getOrientation()).toEqual(editor.BESIDE);
    });

    it("should update the orientation on componentDidUpdate", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          ref={node => {
            instance = node!;
          }}
          splits={2}
        />
      );

      // Read set value
      let editor = instance!.split;
      expect(editor.getSplits()).toEqual(2);

      // Now trigger the componentDidUpdate
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={4}
        />
      );

      editor = instance!.split;
      expect(editor.getSplits()).toEqual(4);
    });

    it("should set the command for the Ace element", () => {
      const commandsMock = [
        {
          name: "myReactAceTest",
          bindKey: { win: "Ctrl-M", mac: "Command-M" },
          exec: () => {},
          readOnly: true
        },
        {
          name: "myTestCommand",
          bindKey: { win: "Ctrl-W", mac: "Command-W" },
          exec: () => {},
          readOnly: true
        }
      ];
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          commands={commandsMock}
        />
      );

      const editor = instance!.splitEditor;
      expect(editor.commands.commands.myReactAceTest).toEqual(commandsMock[0]);
      expect(editor.commands.commands.myTestCommand).toEqual(commandsMock[1]);
    });

    it("should change the command binding for the Ace element", () => {
      const commandsMock = [
        {
          bindKey: { win: "ctrl-d", mac: "command-d" },
          name: "selectMoreAfter",
          exec: "selectMoreAfter"
        }
      ];
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          commands={commandsMock}
        />
      );

      const editor = instance!.splitEditor;
      const expected = [editor.commands.commands.removeline, "selectMoreAfter"];
      expect(editor.commands.commandKeyBinding["ctrl-d"]).toEqual(expected);
    });

    it("should get the editor from the onLoad callback", () => {
      const loadCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onLoad={loadCallback}
        />
      );

      // Get the editor
      const editor = instance!.split;

      expect(loadCallback).toBeCalledWith(editor);
    });

    it.skip("should trigger the focus on mount", () => {
      const onFocusCallback = jest.fn();
      mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          focus={true}
          onFocus={onFocusCallback}
        />
      );

      // Read the focus
      expect(onFocusCallback).toBeCalledTimes(1);
    });

    it("should set editor to null on componentWillUnmount", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
        />
      );
      // expect(wrapper.getElement().editor).to.not.equal(null);

      // Check the editor is null after the Unmount
      wrapper.unmount();
      // expect(wrapper.get(0)).to.not.exist;
    });
  });

  describe("Events", () => {
    let instance;
    it("should call the onChange method callback", () => {
      const onChangeCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onChange={onChangeCallback}
        />
      );

      // Check is not previously called
      expect(onChangeCallback).not.toBeCalled();

      // Trigger the change event
      const expectText = "React Ace Test";
      instance!.splitEditor.setValue(expectText, 1);

      expect(onChangeCallback).toBeCalledWith([expectText, ""], {
        action: "insert",
        end: { column: 14, row: 0 },
        id: 1,
        lines: ["React Ace Test"],
        start: { column: 0, row: 0 }
      });
    });
    it("should call the onCopy method", () => {
      const onCopyCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onCopy={onCopyCallback}
        />
      );

      // Check is not previously called
      expect(onCopyCallback).not.toBeCalled();

      // Trigger the copy event
      const expectText = "React Ace Test";
      instance!.onCopy(expectText);

      expect(onCopyCallback).toBeCalledWith(expectText);
    });

    it("should call the onPaste method", () => {
      const onPasteCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onPaste={onPasteCallback}
        />
      );

      // Check is not previously called
      expect(onPasteCallback).not.toBeCalled();

      // Trigger the Paste event
      const expectText = "React Ace Test";
      instance!.onPaste(expectText);
      expect(onPasteCallback).toBeCalledWith(expectText);
    });

    it.skip("should call the onFocus method callback", () => {
      const onFocusCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onFocus={onFocusCallback}
        />
      );

      // Check is not previously called
      expect(onFocusCallback).not.toBeCalled();

      // Trigger the focus event
      instance!.split.focus();

      expect(onFocusCallback).toBeCalledTimes(1);
    });

    it("should call the onSelectionChange method callback", () => {
      const onSelectionChangeCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onSelectionChange={onSelectionChangeCallback}
          value={["some value", "another value"]}
        />
      );

      // Check is not previously called
      expect(onSelectionChangeCallback).not.toBeCalled();

      // Trigger the focus event
      instance!.splitEditor.getSession().selection.selectAll();

      expect(onSelectionChangeCallback).toBeCalledTimes(1);
    });

    it("should call the onCursorChange method callback", () => {
      const onCursorChangeCallback = jest.fn();

      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          value={["a"]}
          onCursorChange={onCursorChangeCallback}
        />
      );

      // The changeCursor event is called when the initial value is set
      expect(onCursorChangeCallback).toBeCalledTimes(1);

      // Trigger the changeCursor event
      instance!.splitEditor.getSession().selection.moveCursorTo(0, 0);

      expect(onCursorChangeCallback).toBeCalledTimes(2);
    });

    it("should call the onBlur method callback", () => {
      const onBlurCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onBlur={onBlurCallback}
        />
      );

      // Check is not previously called
      expect(onBlurCallback).not.toBeCalled();

      // Trigger the blur event
      instance!.onBlur();

      expect(onBlurCallback).toBeCalledTimes(1);
    });

    it("should not trigger a component error to call the events without setting the props", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
        />
      );

      // Check the if statement is checking if the property is set.
      instance!.onChange();
      instance!.onCopy("copy");
      instance!.onPaste("paste");
      instance!.onFocus();
      instance!.onBlur();
    });
  });
  describe("ComponentDidUpdate", () => {
    let instance;
    it("should update the editorOptions on componentDidUpdate", () => {
      const options = {
        printMargin: 80
      };
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          setOptions={options}
        />
      );

      // Read set value
      const editor = instance!.splitEditor;
      expect(editor.getOption("printMargin")).toEqual(options.printMargin);

      // Now trigger the componentDidUpdate
      const newOptions = {
        printMargin: 200,
        animatedScroll: true
      };
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          setOptions={newOptions}
        />
      );
      expect(editor.getOption("printMargin")).toEqual(newOptions.printMargin);
      expect(editor.getOption("animatedScroll")).toEqual(
        newOptions.animatedScroll
      );
    });
    it("should update the editorOptions on componentDidUpdate", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          minLines={1}
        />
      );

      // Read set value
      const editor = instance!.splitEditor;
      expect(editor.getOption("minLines")).toEqual(1);
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          minLines={2}
        />
      );

      expect(editor.getOption("minLines")).toEqual(2);
    });

    it("should update the mode on componentDidUpdate", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          mode="javascript"
        />
      );
      const oldMode = instance?.props.mode;
      // Read set value
      let newInstance;

      wrapper.rerender(
        <SplitEditor
          splits={2}
          mode={"elixir"}
          ref={node => {
            newInstance = node;
          }}
        />
      );
      const newMode = newInstance.props.mode;
      expect(oldMode).not.toEqual(newMode);
    });

    it("should update many props on componentDidUpdate", () => {
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          theme="github"
          keyboardHandler="vim"
          fontSize={14}
          wrapEnabled={true}
          showPrintMargin={true}
          showGutter={false}
          height="100px"
          width="200px"
        />
      );

      // Read set value
      const oldMode = instance.props;
      let newInstance;
      wrapper.rerender(
        <SplitEditor
          splits={2}
          theme="solarized"
          keyboardHandler="emacs"
          fontSize={14}
          wrapEnabled={false}
          showPrintMargin={false}
          showGutter={true}
          height="120px"
          width="220px"
          ref={node => {
            newInstance = node;
          }}
        />
      );
      expect(oldMode).not.toEqual(newInstance?.props);
    });

    it("should update the className on componentDidUpdate", () => {
      const className = "old-class";
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          className={className}
        />
      );

      // Read set value
      let editor = instance!.refEditor;
      expect(editor.className).toEqual(
        " ace_editor ace_hidpi ace-tm old-class"
      );

      // Now trigger the componentDidUpdate
      const newClassName = "new-class";
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          className={newClassName}
        />
      );

      editor = instance!.refEditor;
      expect(editor.className).toEqual(
        " new-class ace_editor ace_hidpi ace-tm"
      );
    });

    it("should update the value on componentDidUpdate", () => {
      const startValue = "start value";
      const anotherStartValue = "another start value";
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          value={[startValue, anotherStartValue]}
        />
      );

      // Read set value
      let editor = instance!.split.getEditor(0);
      let editor2 = instance!.split.getEditor(1);
      expect(editor.getValue()).toEqual(startValue);
      expect(editor2.getValue()).toEqual(anotherStartValue);

      // Now trigger the componentDidUpdate
      const newValue = "updated value";
      const anotherNewValue = "another updated value";
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          value={[newValue, anotherNewValue]}
        />
      );

      editor = instance!.splitEditor;
      editor2 = instance!.split.getEditor(1);
      expect(editor.getValue()).toEqual(newValue);
      expect(editor2.getValue()).toEqual(anotherNewValue);
    });
    it("should set up the markers", () => {
      const markers = [
        [
          {
            startRow: 3,
            type: "text",
            className: "test-marker"
          }
        ]
      ];
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          markers={markers as any}
        />
      );

      // Read the markers
      const editor = instance!.splitEditor;
      expect(editor.getSession().getMarkers()["3"].clazz).toEqual(
        "test-marker"
      );
      expect(editor.getSession().getMarkers()["3"].type).toEqual("text");
    });

    it("should update the markers", () => {
      const oldMarkers = [
        [
          {
            startRow: 4,
            type: "text",
            className: "test-marker-old"
          },
          {
            startRow: 7,
            type: "foo",
            className: "test-marker-old",
            inFront: true
          }
        ]
      ];
      const markers = [
        [
          {
            startRow: 3,
            type: "text",
            className: "test-marker-new",
            inFront: true
          },
          {
            startRow: 5,
            type: "text",
            className: "test-marker-new"
          }
        ]
      ];
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          markers={oldMarkers as any}
        />
      );

      // Read the markers
      const editor = instance!.splitEditor;
      expect(editor.getSession().getMarkers()["3"].clazz).toEqual(
        "test-marker-old"
      );
      expect(editor.getSession().getMarkers()["3"].type).toEqual("text");
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          markers={markers as any}
        />
      );
      const editorB = instance!.splitEditor;
      expect(editorB.getSession().getMarkers()["6"].clazz).toEqual(
        "test-marker-new"
      );
      expect(editorB.getSession().getMarkers()["6"].type).toEqual("text");
    });

    it("should update the markers", () => {
      const oldMarkers = [
        [
          {
            startRow: 4,
            type: "text",
            className: "test-marker-old"
          },
          {
            startRow: 7,
            type: "foo",
            className: "test-marker-old",
            inFront: true
          }
        ]
      ];
      const markers = [[]];
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          markers={oldMarkers as any}
        />
      );

      // Read the markers
      const editor = instance!.splitEditor;
      expect(editor.getSession().getMarkers()["3"].clazz).toEqual(
        "test-marker-old"
      );
      expect(editor.getSession().getMarkers()["3"].type).toEqual("text");
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          markers={markers}
        />
      );
      const editorB = instance!.splitEditor;
      expect(editorB.getSession().getMarkers()).toEqual({});
    });

    it("should add annotations", () => {
      const annotations = [
        {
          row: 3, // must be 0 based
          column: 4, // must be 0 based
          text: "error.message", // text to show in tooltip
          type: "error"
        }
      ];
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
        />
      );
      const editor = instance!.splitEditor;
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          annotations={annotations as any}
        />
      );

      expect(editor.getSession().getAnnotations()).toEqual(annotations[0]);
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          annotations={[]}
        />
      );
      expect(editor.getSession().getAnnotations()).toEqual([]);
    });

    it.skip("should trigger the focus on componentDidUpdate", () => {
      const onFocusCallback = jest.fn();
      const wrapper = mount(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          onFocus={onFocusCallback}
        />
      );

      // Read the focus
      expect(onFocusCallback).not.toBeCalled();

      // Now trigger the componentDidUpdate
      wrapper.rerender(
        <SplitEditor
          ref={node => {
            instance = node!;
          }}
          splits={2}
          focus={true}
          onFocus={onFocusCallback}
        />
      );
      expect(onFocusCallback).toBeCalledTimes(1);
    });
  });
});

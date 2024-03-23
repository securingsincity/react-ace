import AceEditor from "../../src/ace";
import {jest, expect} from '@jest/globals';
import { render as mount, screen} from '@testing-library/react'
import React from 'react';
import { IAceEditor, IMarker } from "../../src/types";
describe("Ace Component", () => {
  // Required for the document.getElementById used by Ace can work in the test environment
  let editor: IAceEditor | undefined;
  describe("General", () => {
    it("should render without problems with defaults properties", () => {
      mount(<AceEditor />);
    });

    it("should trigger console warn if editorOption is called", () => {
      jest.spyOn(console, "warn");
       mount(
        <AceEditor enableBasicAutocompletion={true} />,

      );
        expect(console.warn).toBeCalledWith(
          "ReactAce: editor option enableBasicAutocompletion was activated but not found. Did you need to import a related tool or did you possibly mispell the option?"
      )
    });

    it("should render without problems with defaults properties, defaultValue and keyboardHandler", () => {
      mount(
        <AceEditor keyboardHandler="vim" defaultValue={"hi james"} />,
      );
     expect(screen.findAllByText("hi james")).toBeTruthy();
    });

    it("should render editor options not default values", () => {

      mount(
        <AceEditor
          keyboardHandler="vim"
          setOptions={{
            tabSize: 2
          }}
          ref={node => {
            editor = node?.editor
          }}
        />
      );

      expect(editor?.getOption("tabSize")).toBe(2);
    });

    it("should get the ace library from the onBeforeLoad callback", () => {
      const beforeLoadCallback = jest.fn();
      mount(<AceEditor onBeforeLoad={beforeLoadCallback} />);

      expect(beforeLoadCallback).toBeCalledTimes(1)
    });

    it("should get the editor from the onLoad callback", () => {
      const loadCallback = jest.fn()
      mount(<AceEditor onLoad={loadCallback} />);


      expect(loadCallback).toBeCalledTimes(1)
    });

    it("should set the editor props to the Ace element", () => {
      const editorProperties = {
        react: "setFromReact",
        test: "setFromTest"
      };
      mount(
        <AceEditor editorProps={editorProperties}
        ref={node => {
          editor = node?.editor
        }} />,

      );


      expect(editor?.react).toEqual(editorProperties.react);
      expect(editor?.test).toEqual(editorProperties.test);
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
      mount(
        <AceEditor commands={commandsMock}  ref={node => {
          editor = node?.editor
        }} />
      );

      expect(editor?.commands.commands.myReactAceTest).toEqual(
        commandsMock[0]
      );
      expect(editor?.commands.commands.myTestCommand).toEqual(
        commandsMock[1]
      );
    });

    // it("should change the command binding for the Ace element", () => {
    //   const commandsMock = [
    //     {
    //       bindKey: { win: "ctrl-d", mac: "command-d" },
    //       name: "selectMoreAfter",
    //       exec: "selectMoreAfter"
    //     }
    //   ];
    //   mount(
    //     <AceEditor commands={commandsMock} ref={node => {
    //       editor = node?.editor
    //     }} />
    //   );

    //   const expected = [editor?.commands.commands.selectMoreAfter, "selectMoreAfter"];
    //   expect(editor?.commands.commands.commandKeyBinding["ctrl-d"]).toEqual(
    //     expected
    //   );
    // });

    it("should set up the placeholder text with no value set", () => {
      const placeholder = "Placeholder Text Here";
      const wrapper = mount(
        <AceEditor placeholder={placeholder} ref={node => {
          editor = node?.editor
        }}/>,
      );

      // Read the markers
      expect(editor?.renderer.placeholderNode).toBeTruthy()
      expect(editor?.renderer.placeholderNode?.textContent).toEqual(placeholder);
    });

    it("should not set up the placeholder text with value set", () => {
      const placeholder = "Placeholder Text Here";
      const wrapper = mount(
        <AceEditor placeholder={placeholder} ref={node => {
          editor = node?.editor
        }} value="Code here" />,
      );

      // Read the markers
      expect(editor?.renderer.placeholderNode).toBeFalsy;
    });

    it("should set up the markers", () => {
      const markers: IMarker[] = [
        {
          startRow: 3,
          endRow: 4,
          startCol: 1,
          endCol: 3,
          type: "text",
          className: "test-marker"
        }
      ];
      mount(<AceEditor markers={markers} ref={node => {
        editor = node?.editor
      }} />);

      // Read the markers
      expect(editor?.getSession().getMarkers()["3"].clazz).toEqual(
        "test-marker"
      );
      expect(editor?.getSession().getMarkers()["3"].type).toEqual("text");
    });

    it("should update the markers", () => {
      const oldMarkers = [
        {
          startRow: 4,
          type: "text",
          className: "test-marker-old"
        },
        {
          startRow: 7,
          inFront: true,
          type: "foo",
          className: "test-marker-old"
        }
      ];
      const markers = [
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
      ];
      const wrapper = mount(<AceEditor markers={oldMarkers as IMarker[]}
        ref={node => {
        editor = node?.editor
      }} />);

      // Read the markers
      expect(editor?.getSession().getMarkers()["3"].clazz).toEqual(
        "test-marker-old"
      );
      expect(editor?.getSession().getMarkers()["3"].type).toEqual("text");
      wrapper.rerender(<AceEditor markers={markers as IMarker[]} ref={node => {editor = node?.editor
      }}></AceEditor>)

      expect(editor?.getSession().getMarkers()["6"].clazz).toEqual(
        "test-marker-new"
      );
      expect(editor?.getSession().getMarkers()["6"].type).toEqual("text");
    });

    it("should clear the markers", () => {
      const oldMarkers = [
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
      ];
      const markers = [];
      const wrapper = mount(<AceEditor markers={oldMarkers as IMarker[]}
        ref={node => {editor = node?.editor
        }}
        />);

      // Read the markers
      expect(Object.keys(editor?.getSession().getMarkers()!)).toEqual([
        "1",
        "2",
        "3"
      ]);
      expect(editor?.getSession().getMarkers()["3"].clazz).toEqual(
        "test-marker-old"
      );
      expect(editor?.getSession().getMarkers()["3"].type).toEqual("text");
      wrapper.rerender( <AceEditor markers={markers} ref={node => {editor = node?.editor} }></AceEditor>);


      expect(Object.keys(editor?.getSession().getMarkers()!)).toEqual([
        "1",
        "2"
      ]);
    });

    it("should not remove active line and selected word highlight when clearing markers", () => {
      const newMarkers = [
        {
          startRow: 4,
          type: "text",
          className: "test-marker"
        }
      ];
      const wrapper = mount(
        <AceEditor highlightActiveLine markers={[]}  ref={node => {editor = node?.editor} }/>
      );

      const bgMarkers = editor?.getSession().getMarkers(false)!;
      expect(Object.keys(bgMarkers!)).toEqual(["1", "2"]);
      expect(bgMarkers["1"]).toHaveProperty("clazz", "ace_active-line");
      expect(bgMarkers["2"]).toHaveProperty("clazz", "ace_selected-word");

      wrapper.rerender(<AceEditor highlightActiveLine markers={newMarkers as IMarker[]}  ref={node => {editor = node?.editor} }/>);
      const bgMarkersNew = editor?.getSession().getMarkers(false)!;
      expect(Object.keys(bgMarkersNew)).toEqual(["1", "2", "3"]);
      expect(bgMarkersNew["1"]).toHaveProperty("clazz", "ace_active-line");
      expect(bgMarkersNew["2"]).toHaveProperty("clazz", "ace_selected-word");
      expect(bgMarkersNew["3"]).toHaveProperty("clazz", "test-marker");
    });

    it("should add annotations and clear them", () => {
      const annotations = [
        {
          row: 3, // must be 0 based
          column: 4, // must be 0 based
          text: "error.message", // text to show in tooltip
          type: "error"
        }
      ];
      const wrapper = mount(<AceEditor ref={node => {editor = node?.editor} }/>);
      wrapper.rerender(<AceEditor ref={node => {editor = node?.editor} } annotations={ annotations } />);
      expect(editor?.getSession().getAnnotations()).toEqual(annotations);
      wrapper.rerender(<AceEditor ref={node => {editor = node?.editor} } annotations={ undefined } />)
      expect(editor?.getSession().getAnnotations()).toEqual([]);
    });

  //   it("should add annotations with changing editor value", () => {
  //     // See https://github.com/securingsincity/react-ace/issues/300
  //     const annotations = [
  //       { row: 0, column: 0, text: "error.message", type: "error" }
  //     ];
  //     const initialText = `Initial
  //     text`;
  //     const modifiedText = `Modified
  //     text`;
  //     const wrapper = mount(
  //       <AceEditor annotations={[]} value={initialText} />,
  //       mountOptions
  //     );
  //     const editor = wrapper.instance().editor;
  //     wrapper.setProps({
  //       annotations: annotations,
  //       value: modifiedText
  //     });
  //     expect(editor.renderer.$gutterLayer.$annotations).to.have.length(1);
  //     expect(editor.renderer.$gutterLayer.$annotations[0]).toHaveProperty(
  //       "className"
  //     );
  //   });

  //   it("should keep annotations with changing editor value", () => {
  //     // See https://github.com/securingsincity/react-ace/issues/300
  //     const annotations = [
  //       { row: 0, column: 0, text: "error.message", type: "error" }
  //     ];
  //     const initialText = `Initial
  //     text`;
  //     const modifiedText = `Modified
  //     text`;
  //     const wrapper = mount(
  //       <AceEditor annotations={annotations} value={initialText} />,
  //       mountOptions
  //     );
  //     const editor = wrapper.instance().editor;
  //     wrapper.setProps({
  //       value: modifiedText
  //     });
  //     expect(editor.renderer.$gutterLayer.$annotations).to.have.length(1);
  //     expect(editor.renderer.$gutterLayer.$annotations[0]).toHaveProperty(
  //       "className"
  //     );
  //   });

  //   it("should set editor to null on componentWillUnmount", () => {
  //     const wrapper = mount(<AceEditor />, mountOptions);
  //     expect(wrapper.getElement().editor).to.not.equal(null);

  //     // Check the editor is null after the Unmount
  //     wrapper.unmount();
  //     expect(wrapper.get(0)).to.not.exist;
  //   });
  // });

  // //inspired from https://github.com/goodtimeaj/debounce-function/blob/master/test/unit/debounce-function.js
  // describe("Debounce function", () => {
  //   it("function arg should be called when after timeout", done => {
  //     const wrapper = mount(<AceEditor />, mountOptions);
  //     var flag = false;
  //     var func = wrapper.instance().debounce(function () {
  //       flag = true;
  //     }, 100);
  //     func();
  //     expect(flag).to.be.false;
  //     setTimeout(function () {
  //       expect(flag).to.be.true;
  //       done();
  //     }, 150);
  //   });

  //   it("timer should be reset on successive call", done => {
  //     const wrapper = mount(<AceEditor />, mountOptions);

  //     var flag = false;
  //     var func = wrapper.instance().debounce(function () {
  //       flag = true;
  //     }, 100);
  //     func();
  //     expect(flag).to.be.false;
  //     setTimeout(function () {
  //       expect(flag).to.be.false;
  //       func();
  //     }, 50);
  //     setTimeout(function () {
  //       expect(flag).to.be.false;
  //     }, 120);
  //     setTimeout(function () {
  //       expect(flag).to.be.true;
  //       done();
  //     }, 160);
  //   });

  //   it("function should be called only once per period", done => {
  //     const wrapper = mount(<AceEditor />, mountOptions);

  //     var flag1 = false;
  //     var flag2 = false;
  //     var func = wrapper.instance().debounce(function () {
  //       if (flag1) {
  //         flag2 = true;
  //       }
  //       flag1 = true;
  //     }, 100);

  //     func();
  //     expect(flag1).to.be.false;
  //     expect(flag2).to.be.false;
  //     setTimeout(function () {
  //       expect(flag1).to.be.false;
  //       expect(flag2).to.be.false;
  //       func();
  //       setTimeout(function () {
  //         expect(flag1).to.be.true;
  //         expect(flag2).to.be.false;
  //         func();
  //         setTimeout(function () {
  //           expect(flag1).to.be.true;
  //           expect(flag2).to.be.false;
  //           done();
  //         }, 90);
  //       }, 110);
  //     }, 50);
  //   });
  //   it("should keep initial value after undo event", () => {
  //     const onInput = () => {
  //       const editor = wrapper.instance().editor;
  //       editor.undo();
  //       expect(editor.getValue()).to.equal("foobar");
  //     };

  //     const wrapper = mount(
  //       <AceEditor value="foobar" onInput={onInput} />,
  //       mountOptions
  //     );
  //   });
  // });

  // describe("Events", () => {
  //   it("should call the onChange method callback", () => {
  //     const onChangeCallback = sinon.spy();
  //     const wrapper = mount(
  //       <AceEditor onChange={onChangeCallback} />,
  //       mountOptions
  //     );

  //     // Check is not previously called
  //     expect(onChangeCallback.callCount).to.equal(0);

  //     // Trigger the change event
  //     const expectText = "React Ace Test";
  //     wrapper.instance().editor.setValue(expectText, 1);

  //     expect(onChangeCallback.callCount).to.equal(1);
  //     expect(onChangeCallback.getCall(0).args[0]).to.equal(expectText);
  //     expect(onChangeCallback.getCall(0).args[1].action).to.eq("insert");
  //   });

  //   it("should limit call to onChange (debounce)", done => {
  //     const period = 100;
  //     const onChangeCallback = sinon.spy();
  //     const wrapper = mount(
  //       <AceEditor onChange={onChangeCallback} debounceChangePeriod={period} />,
  //       mountOptions
  //     );

  //     // Check is not previously called
  //     expect(onChangeCallback.callCount).to.equal(0);

  //     // Trigger the change event
  //     const expectText = "React Ace Test";
  //     const expectText2 = "React Ace Test2";
  //     wrapper.instance().editor.setValue(expectText, 1);
  //     wrapper.instance().editor.setValue(expectText2, 1);

  //     expect(onChangeCallback.callCount).to.equal(0);

  //     setTimeout(function () {
  //       expect(onChangeCallback.callCount).to.equal(1);
  //       expect(onChangeCallback.getCall(0).args[0]).to.equal(expectText2);
  //       expect(onChangeCallback.getCall(0).args[1].action).to.eq("insert");
  //       onChangeCallback.resetHistory();
  //       wrapper.instance().editor.setValue(expectText2, 1);
  //       wrapper.instance().editor.setValue(expectText, 1);
  //       expect(onChangeCallback.callCount).to.equal(0);
  //       setTimeout(function () {
  //         expect(onChangeCallback.callCount).to.equal(1);
  //         expect(onChangeCallback.getCall(0).args[0]).to.equal(expectText);
  //         expect(onChangeCallback.getCall(0).args[1].action).to.eq("insert");
  //         done();
  //       }, 100);
  //     }, 100);
  //   });

  //   it("should call the onCopy method", () => {
  //     const onCopyCallback = sinon.spy();
  //     const wrapper = mount(
  //       <AceEditor onCopy={onCopyCallback} />,
  //       mountOptions
  //     );

  //     // Check is not previously called
  //     expect(onCopyCallback.callCount).to.equal(0);

  //     // Trigger the copy event
  //     const expectText = "React Ace Test";
  //     wrapper.instance().onCopy({ text: expectText });

  //     expect(onCopyCallback.callCount).to.equal(1);
  //     expect(onCopyCallback.getCall(0).args[0]).to.equal(expectText);
  //   });

  //   it("should call the onPaste method", () => {
  //     const onPasteCallback = sinon.spy();
  //     const wrapper = mount(
  //       <AceEditor onPaste={onPasteCallback} />,
  //       mountOptions
  //     );

  //     // Check is not previously called
  //     expect(onPasteCallback.callCount).to.equal(0);

  //     // Trigger the Paste event
  //     const expectText = "React Ace Test";
  //     wrapper.instance().onPaste({ text: expectText });

  //     expect(onPasteCallback.callCount).to.equal(1);
  //     expect(onPasteCallback.getCall(0).args[0]).to.equal(expectText);
  //   });

  //   it.skip("should call the onFocus method callback", () => {
  //     const onFocusCallback = sinon.spy();
  //     const wrapper = mount(
  //       <AceEditor onFocus={onFocusCallback} />,
  //       mountOptions
  //     );

  //     // Check is not previously called
  //     expect(onFocusCallback.callCount).to.equal(0);

  //     // Trigger the focus event
  //     wrapper.instance().editor.focus();

  //     expect(onFocusCallback.callCount).to.equal(1);
  //     expect(onFocusCallback.args.length).to.equal(1);
  //   });

  //   it("should call the onSelectionChange method callback", done => {
  //     let onSelectionChange = function () {};
  //     const value = `
  //       function main(value) {
  //         console.log('hi james')
  //         return value;
  //       }
  //     `;
  //     const wrapper = mount(<AceEditor value={value} />, mountOptions);

  //     onSelectionChange = function (selection) {
  //       const content = wrapper
  //         .instance()
  //         .editor.session.getTextRange(selection.getRange());
  //       expect(content).to.equal(value);
  //       done();
  //     };
  //     wrapper.setProps({ onSelectionChange });
  //     wrapper.instance().editor.getSession().selection.selectAll();
  //   });

  //   it("should call the onCursorChange method callback", done => {
  //     let onCursorChange = function () {};
  //     const value = `
  //       function main(value) {
  //         console.log('hi james')
  //         return value;
  //       }
  //     `;

  //     const wrapper = mount(<AceEditor value={value} />, mountOptions);
  //     onCursorChange = function (selection) {
  //       expect(selection.getCursor()).toEqual({ row: 0, column: 0 });
  //       done();
  //     };
  //     wrapper.setProps({ onCursorChange });
  //     expect(
  //       wrapper.instance().editor.getSession().selection.getCursor()
  //     ).toEqual({ row: 5, column: 6 });
  //     wrapper.instance().editor.getSession().selection.moveCursorTo(0, 0);
  //   });

  //   it("should call the onBlur method callback", () => {
  //     const onBlurCallback = sinon.spy();
  //     const wrapper = mount(
  //       <AceEditor onBlur={onBlurCallback} />,
  //       mountOptions
  //     );

  //     // Check is not previously called
  //     expect(onBlurCallback.callCount).to.equal(0);

  //     // Trigger the blur event
  //     wrapper.instance().onBlur();

  //     expect(onBlurCallback.callCount).to.equal(1);
  //     expect(onBlurCallback.args.length).to.equal(1);
  //   });

  //   it("should not trigger a component error to call the events without setting the props", () => {
  //     const wrapper = mount(<AceEditor />, mountOptions);

  //     // Check the if statement is checking if the property is set.
  //     wrapper.instance().onChange();
  //     wrapper.instance().onCopy("copy");
  //     wrapper.instance().onPaste("paste");
  //     wrapper.instance().onFocus();
  //     wrapper.instance().onBlur();
  //   });
  // });

  // describe("ComponentDidUpdate", () => {
  //   it("should update the editorOptions on componentDidUpdate", () => {
  //     const options = {
  //       printMargin: 80
  //     };
  //     const wrapper = mount(<AceEditor setOptions={options} />, mountOptions);

  //     // Read set value
  //     const editor = wrapper.instance().editor;
  //     expect(editor.getOption("printMargin")).to.equal(options.printMargin);

  //     // Now trigger the componentDidUpdate
  //     const newOptions = {
  //       printMargin: 200,
  //       animatedScroll: true
  //     };
  //     wrapper.setProps({ setOptions: newOptions });
  //     expect(editor.getOption("printMargin")).to.equal(newOptions.printMargin);
  //     expect(editor.getOption("animatedScroll")).to.equal(
  //       newOptions.animatedScroll
  //     );
  //   });

  //   it("should update the editorOptions on componentDidUpdate", () => {
  //     const wrapper = mount(<AceEditor minLines={1} />, mountOptions);

  //     // Read set value
  //     const editor = wrapper.instance().editor;
  //     expect(editor.getOption("minLines")).to.equal(1);

  //     wrapper.setProps({ minLines: 2 });
  //     expect(editor.getOption("minLines")).to.equal(2);
  //   });

  //   describe("mode prop", () => {
  //     it("should update the mode on componentDidUpdate", () => {
  //       const wrapper = mount(<AceEditor mode="javascript" />, mountOptions);

  //       // Read set value
  //       const oldMode = wrapper.first("AceEditor").props();

  //       wrapper.setProps({ mode: "elixir" });
  //       const newMode = wrapper.first("AceEditor").props();
  //       expect(oldMode).to.not.deep.equal(newMode);
  //     });

  //     it("should accept an object mode", () => {
  //       const wrapper = mount(<AceEditor />, mountOptions);
  //       const session = wrapper.instance().editor.getSession();
  //       const sessionSpy = sinon.spy(session, "setMode");

  //       const mode = {
  //         path: "ace/mode/javascript"
  //       };
  //       wrapper.setProps({ mode: mode });
  //       expect(sessionSpy.withArgs(mode).callCount).to.equal(1);
  //     });
  //   });

  //   it("should update many props on componentDidUpdate", () => {
  //     const wrapper = mount(
  //       <AceEditor
  //         theme="github"
  //         keyboardHandler="vim"
  //         fontSize={14}
  //         wrapEnabled={true}
  //         showPrintMargin={true}
  //         showGutter={false}
  //         height="100px"
  //         width="200px"
  //       />,
  //       mountOptions
  //     );

  //     // Read set value
  //     const oldMode = wrapper.first("AceEditor").props();

  //     wrapper.setProps({
  //       theme: "solarized",
  //       keyboardHandler: "emacs",
  //       fontSize: 18,
  //       wrapEnabled: false,
  //       showPrintMargin: false,
  //       showGutter: true,
  //       height: "120px",
  //       width: "220px"
  //     });
  //     const newMode = wrapper.first("AceEditor").props();
  //     expect(oldMode).to.not.deep.equal(newMode);
  //   });

  //   it("should update the className on componentDidUpdate", () => {
  //     const className = "old-class";
  //     const wrapper = mount(<AceEditor className={className} />, mountOptions);

  //     // Read set value
  //     let editor = wrapper.instance().refEditor;
  //     expect(editor.className).to.equal(
  //       " ace_editor ace_hidpi ace-tm old-class"
  //     );

  //     // Now trigger the componentDidUpdate
  //     const newClassName = "new-class";
  //     wrapper.setProps({ className: newClassName });
  //     editor = wrapper.instance().refEditor;
  //     expect(editor.className).to.equal(
  //       " new-class ace_editor ace_hidpi ace-tm"
  //     );
  //   });

  //   it("should update the value on componentDidUpdate", () => {
  //     const startValue = "start value";
  //     const wrapper = mount(<AceEditor value={startValue} />, mountOptions);

  //     // Read set value
  //     let editor = wrapper.instance().editor;
  //     expect(editor.getValue()).to.equal(startValue);

  //     // Now trigger the componentDidUpdate
  //     const newValue = "updated value";
  //     wrapper.setProps({ value: newValue });
  //     editor = wrapper.instance().editor;
  //     expect(editor.getValue()).to.equal(newValue);
  //   });

  });
});

import { SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Container } from "../components/Container";
import Header from "../components/Header";
import { Main } from "../components/Main";
import dynamic from "next/dynamic";
import { Select } from "@chakra-ui/select";
import { languages, themes } from "../components/constants";
import {
  Checkbox,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";

const ReactAce = dynamic(() => import("../components/ReactAce"), {
  ssr: false
});

const Index = () => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("monokai");
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [showPrintMargin, setShowPrintMargin] = useState(true);
  const [showGutter, setShowGutter] = useState(true);
  const [highlightActiveLine, setHighlightActiveLine] = useState(true);
  const [enableBasicAutocompletion, setEnableBasicAutocompletion] = useState(
    false
  );
  const [enableLiveAutocompletion, setEnableLiveAutocompletion] = useState(
    false
  );
  const [enableSnippets, setEnableSnippets] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  return (
    <>
      <Header />
      <Container height="100vh">
        <Main>
          <Text>Main editor</Text>
          <SimpleGrid columns={3} spacing={30}>
            <VStack align="flex-start" justify="flex-start">
              <Select
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
              <Select value={theme} onChange={e => setTheme(e.target.value)}>
                {themes.map(themeOption => (
                  <option key={themeOption} value={themeOption}>
                    {themeOption}
                  </option>
                ))}
              </Select>
              <NumberInput
                value={fontSize}
                onChange={_valueAsString => {
                  setFontSize(Number.parseInt(_valueAsString, 10));
                }}
                min={10}
                max={32}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Checkbox
                isChecked={showPrintMargin}
                onChange={e => {
                  setShowPrintMargin(e.target.checked);
                }}
              >
                Show Print Margin
              </Checkbox>
              <Checkbox
                isChecked={showGutter}
                onChange={e => setShowGutter(e.target.checked)}
              >
                Show Gutter
              </Checkbox>
              <Checkbox
                isChecked={showLineNumbers}
                onChange={e => setShowLineNumbers(e.target.checked)}
              >
                Show Line Numbers
              </Checkbox>
              <Checkbox
                isChecked={highlightActiveLine}
                onChange={e => setHighlightActiveLine(e.target.checked)}
              >
                Highlight Active Line
              </Checkbox>
              <Checkbox
                isChecked={enableBasicAutocompletion}
                onChange={e => setEnableBasicAutocompletion(e.target.checked)}
              >
                Enable Basic Autocompletion
              </Checkbox>
              <Checkbox
                isChecked={enableLiveAutocompletion}
                onChange={e => setEnableLiveAutocompletion(e.target.checked)}
              >
                Enable Live Autocompletion
              </Checkbox>
              <Checkbox
                isChecked={enableSnippets}
                onChange={e => setEnableSnippets(e.target.checked)}
              >
                Enable Snippets
              </Checkbox>
            </VStack>
            <ReactAce
              language={language}
              theme={theme}
              setText={setText}
              value={text}
              showGutter={showGutter}
              showPrintMargin={showPrintMargin}
              highlightActiveLine={highlightActiveLine}
              enableBasicAutocompletion={enableBasicAutocompletion}
              enableLiveAutocompletion={enableLiveAutocompletion}
              enableSnippets={enableSnippets}
              showLineNumbers={showLineNumbers}
              fontSize={fontSize}
            />
            <ReactAce
              language="javascript"
              theme="monokai"
              readOnly
              fontSize={16}
              value={`<AceEditor
  placeholder="${"this.state.placeholder"}"
  mode="${language}"
  theme="${theme}"
  name="blah2"
  onLoad={this.onLoad}
  onChange={this.onChange}
  fontSize={${"this.state.fontSize"}}
  showPrintMargin={${"this.state.showPrintMargin"}}
  showGutter={${"this.state.showGutter"}}
  highlightActiveLine={${"this.state.highlightActiveLine"}}
  value={\`${text}\`}
  setOptions={{
  enableBasicAutocompletion: ${"this.state.enableBasicAutocompletion"},
  enableLiveAutocompletion: ${"this.state.enableLiveAutocompletion"},
  enableSnippets: ${"this.state.enableSnippets"},
  showLineNumbers: ${"this.state.showLineNumbers"},
  tabSize: 2,
  }} />`}
            />
          </SimpleGrid>
        </Main>
      </Container>
    </>
  );
};

export default Index;

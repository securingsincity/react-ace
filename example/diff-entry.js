import React from "react";
import { createRoot } from "react-dom/client";
import App from "./diff";
const root = createRoot(document.getElementById("example"));
root.render(React.createElement(App));

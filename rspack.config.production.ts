"use strict";

const baseConfig = require("./rspack.config.base");

const config = Object.assign({}, baseConfig);
config.mode = "production";
config.output.filename = "react-ace.min.js";
module.exports = config;

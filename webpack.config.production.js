"use strict";

const baseConfig = require("./webpack.config.base");

const config = Object.assign({}, baseConfig);
config.mode = "production";
module.exports = config;

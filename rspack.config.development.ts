const baseConfig = require("./rspack.config.base");

const config = Object.assign({}, baseConfig);
config.mode = "development";
module.exports = config;

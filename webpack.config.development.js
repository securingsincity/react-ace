const baseConfig = require("./webpack.config.base");

const config = Object.assign({}, baseConfig);
config.mode = "development";
module.exports = config;

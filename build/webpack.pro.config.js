const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 每次构建清空base目录

module.exports = {
  plugins: [new CleanWebpackPlugin()],
};

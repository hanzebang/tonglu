const path = require("path");
const paths = require("react-scripts/config/paths");
const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  // 修改path目录
  paths.appBuild = path.join(path.dirname(paths.appBuild), "docs");
  config.output.path = paths.appBuild;

  return alias(configPaths("./tsconfig.paths.json"))(config);
};

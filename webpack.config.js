export default function (webpackEnv) {
  webpackEnv.alias.clear().merge(require("./aliases.config"));
}

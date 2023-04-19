const presets = [
  ["@babel/preset-env", { targets: { esmodules: true, browsers: ["last 2 versions"] } }],
  ["@babel/preset-react"],
  "@babel/typescript",
];
// const plugins = ["@emotion"].filter(Boolean);

module.exports = { presets };

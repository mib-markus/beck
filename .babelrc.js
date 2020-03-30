const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          styles: "./styles"
        },
        cwd: "babelrc"
      }
    ],
    ["transform-define", env],
    [
      "wrap-in-js",
      {
        extensions: ["css$", "scss$"]
      }
    ]
  ],
  ignore: []
};

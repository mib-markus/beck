const path = require("path");
const glob = require("glob");
const debug = process.env.NODE_ENV !== "production";
// const withPlugins = require('next-compose-plugins');
const optimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  exportPathMap: function() {
    return {
      "/": { page: "/" }
      // "/about": { page: "/about" },
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? "/beck/" : "",
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              outputStyle: "compressed", // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
});

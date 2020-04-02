const debug = process.env.NODE_ENV !== 'production'
const withImages = require('next-images')

module.exports = withImages({
  assetPrefix: !debug ? '/beck/' : '',
  exportPathMap: function() {
    return {
      "/": { page: "/" }
      // "/about": { page: "/about" },
    };
  },
  webpack(config, options) {
    return config
  }
})
const debug = process.env.NODE_ENV !== 'production'




module.exports = {
  assetPrefix: !debug ? '/beck/' : '',
  exportPathMap: function() {
    return {
      "/": { page: "/" }
      // "/about": { page: "/about" },
    };
  },
}
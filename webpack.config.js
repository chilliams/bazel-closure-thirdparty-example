module.exports = (env, argv) => ({
  mode: argv.mode,
  output: {
    filename: argv.name,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          filename: 'vendor.[contenthash].js',
          chunks: 'all',
        },
      },
    },
  },
});

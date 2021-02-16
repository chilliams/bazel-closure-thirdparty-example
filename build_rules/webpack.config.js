const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
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
    plugins: [
      new webpack.DllReferencePlugin({
        manifest: require('../' + env.vendor + '/vendor-manifest.json'),
      }),
    ],
  };
};

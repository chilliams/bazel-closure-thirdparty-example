const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const outputPath = path.join(process.cwd(), argv.outputPath);

  return {
    entry: {
	  vendor: [
        'react',
        'react-dom',
      ],
    },
    output: {
	  filename: '[name].js',
	  library: '[name]_[fullhash]',
    },
    plugins: [
	  new webpack.DllPlugin({
	    path: path.join(outputPath, '[name]-manifest.json'),
	    name: '[name]_[fullhash]',
	  }),
    ],
  };
};

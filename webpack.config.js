const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		main: '/src/main.js',
		test: '/src/test.js',
		skyid_client: '/src/skyid_client.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]/[name].js'
	},
	optimization: {
		// minimize: true,
		minimize: false,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	}
}
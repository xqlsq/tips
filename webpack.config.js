const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin');
const webpack = require('webpack');
module.exports = function(configPath, port) {
	return {
		entry: [
			'webpack-hot-middleware/client.js',
			configPath + "/index.js",
		],
		devtool: "inline-source-map",
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: configPath + '/index.html'
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),
			new OpenBrowserWebpackPlugin({ url: 'http://localhost:' + port })
		],
		output: {
			filename: "[name].bundle.js",
			path: path.resolve(__dirname, "build"),
			publicPath: "/"
		}
	};
};

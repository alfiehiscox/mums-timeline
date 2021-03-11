const HTMLWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const path = require('path');

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader']},
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{ test: /\.(png|jpe?g|gif)$/i, use: 'file-loader'}
		]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'bundle.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './app/index.html'
		})
	],
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}

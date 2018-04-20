const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//mode: "development",
	entry: [
		'webpack/hot/only-dev-server',
		'./src/index',
	],
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		})
	],
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader'],
			include: path.join(__dirname,'src')
		}, { 
			test: /\.css$/,
			loaders: ['style-loader','css-loader']
		},{
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader? limit=10000&mimetype=application/font-woff'
		},{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
		},{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
		},{
			test: /\.png$/,
			loader: "url-loader?limit=100000"
		},{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader'
		},{
			test: /\.jpg$/,
			loader: "file-loader"
		}]
	}
};

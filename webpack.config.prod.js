const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//mode: "production",
	entry: './src/index.js',
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'js/[name].js?[hash]',
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "css/[name].css?[hash]",
			disable: false,
			allChunks: true
		}),
		new HtmlWebpackPlugin({template: './src/index.html',inject: 'body'})
	],
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader'],
			include: path.join(__dirname,'src')
		},{ 
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader: "css-loader",
					options: {
						sourceMap: true
					}
				},
			})
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

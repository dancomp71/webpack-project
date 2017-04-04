var path = require("path");
module.exports = {
	context: path.resolve("js"),
	entry: ["./utils", "./app.js"],
	output: {
		// destination directory /js
		path: __dirname + "/js",
		
		// generate bundle.js in /js path
		filename: "bundle.js",
		
		// server from from localhost:8080/js
		publicPath: "/js/"
	},
	devServer: {
		contentBase: "public"
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			},
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			}
		],
	},

	resolve: {
		extensions: ['.js', '.es6']
	}
}

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var webpack = require('webpack'); //to access built-in plugins
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: process.env.NODE_ENV == 'production' ? '[name].[contenthash].css' : '[name].css',
    disable: process.env.NODE_ENV === "development"
});

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

var config = {
    entry: {
        app: './src/app.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
      //if env is production, use hash
      filename: process.env.NODE_ENV == 'production' ? '[name].bundle.[hash].js' : '[name].bundle.js'
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','react', 'stage-3']
                }
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: extractSass.extract('style-loader', 'css-loader')
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
        }
      ]
    },
    devtool: process.env.NODE_ENV == 'production' ? '' : '#eval-source-map',
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
          '@': resolve('src')
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'ReactJianShu',
            template: './index.html'
        }),
        extractSass
    ]
  };
  
  module.exports = config;
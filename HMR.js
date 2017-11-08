var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    publicPath        : config.output.publicPath,
    hot               : true,
    inline            : true,//启动inline
    noInfo            : true,
    historyApiFallback: true,
    contentBase: './dist'
}).listen(8080, '127.0.0.1', function (err, res) {
    if (err) console.log(err);
    console.log('At 3000');
});
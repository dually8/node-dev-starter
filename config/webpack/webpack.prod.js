var merge = require('webpack-merge');
var webpack = require('webpack');

var commonConfig = require('./webpack.common');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var prodConfig = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJsPlugin()
    ]
});

module.exports = prodConfig;

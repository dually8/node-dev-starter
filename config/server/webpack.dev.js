var merge = require('webpack-merge');

var commonConfig = require('./webpack.common');

var devConfig = merge(commonConfig, {
    devtool: 'inline-source-map'
});

module.exports = devConfig;

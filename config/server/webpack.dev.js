var fs = require('fs');
var merge = require('webpack-merge');

var commonConfig = require('./webpack.common');

function bundleModules() {
    var modules = {};
    fs.readdirSync(path.resolve(__dirname, '../../node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { modules[mod] = `commonjs ${mod}`; });
    return modules;
}

var devConfig = merge(commonConfig, {
    devtool: 'inline-source-map',
    externals: bundleModules()
});

module.exports = devConfig;

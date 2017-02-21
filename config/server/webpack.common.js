var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var fs = require('fs');

function bundleModules() {
    var modules = {};
    fs.readdirSync(path.resolve(__dirname, '../../node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { modules[mod] = `commonjs ${mod}`; });
    return modules;
}

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    externals: bundleModules(),
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'babel-loader?presets[]=es2015!awesome-typescript-loader',
                exclude: [
                    /node_modules/,
                    /\.spec\.ts$/,
                    /config/
                ]
            }
        ]
    },
    node: {
        __dirname: false
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/routes/index/index.html'
            }
        ])
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    target: 'node'
}

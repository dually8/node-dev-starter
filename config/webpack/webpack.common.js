var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
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

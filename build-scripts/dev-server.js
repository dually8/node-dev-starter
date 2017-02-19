import express from 'express';
import path from 'path';
import chalk from 'chalk';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.babel';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

console.log(chalk.green('Starting Dev Server...'));

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(chalk.green(`Dev Server started on port: ${port}`));
        open(`http://localhost:${port}`);
    }
});

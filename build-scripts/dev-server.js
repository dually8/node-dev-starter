import chalk from 'chalk';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.babel';

import { Application } from '../src/app';

/* eslint-disable no-console */

const port = 3000;
const compiler = webpack(config);
const app = new Application().app;

console.log(chalk.green('Starting Dev Server...'));

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(chalk.green(`Dev Server started on port: ${port}`));
        open(`http://localhost:${port}`);
    }
});

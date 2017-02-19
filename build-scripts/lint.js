import chalk from 'chalk';
import chokidar from 'chokidar';
import { exec } from 'child_process';

/* eslint-disable no-console */

const tsWatcher = chokidar.watch('src/**/*.ts', {
    persistent: true
});

const jsWatcher = chokidar.watch(['build-scripts/*.js', 'config/*.js', './*.js'], {
    persistent: true
});

function tsListener(path) {
    const cmd = `tslint ${path}`;

    exec(`${cmd}` , (err, stderr) => {
        err ? console.error(chalk.red(stderr)) : console.log(chalk.blue(`${path}: clean`));
    });
}

function jsListener(path) {
    const cmd = `eslint ${path}`;

    exec(`${cmd}` , (err, stderr) => {
        err ? console.error(chalk.red(stderr)) : console.log(chalk.blue(`${path}: clean`));
    });
}

tsWatcher.on('add', tsListener);
tsWatcher.on('change', tsListener);
jsWatcher.on('add', jsListener);
jsWatcher.on('change', jsListener);

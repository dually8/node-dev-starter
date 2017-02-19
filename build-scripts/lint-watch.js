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

    exec(`${cmd}` , (err, stdout) => {
        console.log(chalk.red(stdout));
    });
}

function jsListener(path) {
    const cmd = `eslint ${path}`;

    exec(`${cmd}` , (err, stdout) => {
        console.log(chalk.red(stdout));
    });
}

console.log(chalk.green('Running linters...'));
tsWatcher.on('add', tsListener);
tsWatcher.on('change', tsListener);
jsWatcher.on('add', jsListener);
jsWatcher.on('change', jsListener);

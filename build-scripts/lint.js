import chalk from 'chalk';
import { exec } from 'child_process';
import glob from 'glob';

/* eslint-disable no-console */

function tsListener(err, files) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        const cmd = `tslint ${files.join(' ')}`;
        exec(cmd, (procErr, stdout) => {
            console.log(chalk.red(stdout));
        });
    }
}

function jsListener(err, files) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        const cmd = `eslint ${files.join(' ')}`;
        exec(cmd, (procErr, stdout) => {
            console.log(chalk.red(stdout));
        });
    }
}

glob('src/*.ts', tsListener);

glob('{build-scripts, config}/*.js', jsListener)
glob('*.js', jsListener)

import chalk from 'chalk';
import { exec } from 'child_process';

/* eslint-disable no-console */

const cmd = 'nsp check';

console.log(chalk.green('Running security check...'));
exec(cmd, (err, stdout, stderr) => {
    err ? console.log(stderr) : console.log(chalk.blue(stdout));
});

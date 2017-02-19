import chalk from 'chalk';
import { exec } from 'child_process';

/* eslint-disable no-console */

const cmd = 'lt --port 3000';

console.log(chalk.green('Starting localtunnel...'));
exec(cmd, (err, stdout, stderr) => {
    err ? console.error(stderr) : console.log(chalk.blue(stdout));
});

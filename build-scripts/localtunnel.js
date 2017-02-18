var chalk = require('chalk');
var exec = require('child_process').exec;

var cmd = 'lt --port 3000';

console.log(chalk.green('Starting localtunnel...'));
exec(cmd, function (err, stdout, stderr) {
    err ? console.error(stderr) : console.log(chalk.blue(stdout));
});

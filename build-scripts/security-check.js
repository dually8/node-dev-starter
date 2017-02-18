var chalk = require('chalk');
var exec = require('child_process').exec;

var cmd = 'nsp check';

console.log(chalk.green('Running security check...'));
exec(cmd, function (err, stdout, stderr) {
    err ? console.log(stderr) : console.log(chalk.blue(stdout));
});

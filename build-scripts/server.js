var express = require('express');
var path = require('path');
var open = require('open');
var chalk = require('chalk');

var port = 3000;
var app = express();

console.log(chalk.green('Starting Dev Server'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(chalk.green('Dev Server started on port: ' + port));
        open('http://localhost:' + port);
    }
});

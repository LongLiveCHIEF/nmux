
var fs = require("fs");
var pkg = require("../package.json");
var nmux = module.exports;
// use nconf for nmux conf utility
nmux.conf  = require("commander");
nmux.conf.version(require("../package.json").version);

var commands = fs.readdirSync('./');



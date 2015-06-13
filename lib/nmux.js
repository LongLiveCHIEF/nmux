
var fs = require("fs");
var pkg = require("../package.json");
var nmux = {};
// use nconf for nmux conf utility
nmux.conf = require("commander");
nmux.conf.version(require("../package.json").version);

// sets up commands
fs.readdir('./', function(){
	if(err) throw err;

	files.forEach(function(file) {
		if(file !== "nmux.js") {
			var cmd = require('./' + file);
			nmux.conf.command(cmd.name, cmd.desc);
		}
	});
});

module.exports = nmux;

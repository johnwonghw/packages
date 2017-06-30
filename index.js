var chalk = require("chalk");

var message = chalk.redBright.bgCyanBright("Hello ") + chalk.bgBlack.underline.white("World");
console.log(message);
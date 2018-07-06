var exec = require('child_process').exec;
var child;

let im = require("./lib/imagick");

child = exec("convert -version", function (error, stdout, stderr) {
    if (error !== null) {
        console.log('imagemagick is not installed! Please install imagemagick from https://www.imagemagick.org/');
        process.exit(1);
    }
});

console.log('exporting module');
module.exports = im;
console.log('done');
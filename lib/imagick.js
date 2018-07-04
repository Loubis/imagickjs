const _composit = require('./composit');
const _convert = require('./convert');

var exec = require('child_process').exec;
var child;

function _imagick(picture) {

    let commandStack = [];

    // put init picture into MIFF stream
    commandStack.push("magick convert " + picture + " MIFF:-")

    // callback function to get constructed commands by the method chains
    let callbackFunction = function (param) {
        commandStack.push(param);
    }

    // function objects
    this.compare = function (param1) { return new _compare(param1, this, callbackFunction); }

    this.composit = function (param1) { return new _composit(param1, this, callbackFunction) }

    this.conjure = function (param1) { return new _conjure(param1, this, callbackFunction); }

    this.convert = function (param1) { return new _convert(this, callbackFunction); }

    this.identify = function (param1) { return new _indentify(param1, this, callbackFunction); }

    this.mogrify = function (param1) { return new _mogrify(param1, this, callbackFunction); }

    this.montage = function (param1) { return new _montage(param1, this, callbackFunction); }

    this.stream = function (param1) { return new _stream(param1, this, callbackFunction); }

    // final write function
    this.write = function (targetName) {
        // convert MIFF pipe to target file
        commandStack.push("magick convert - " + targetName);

        // exec imagemagick command in console
        child = exec(commandStack.join(" | "), function (error, stdout, stderr) {
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    }
}

// init function
function imagick(param) {
    return new _imagick(param);
}

module.exports = imagick;

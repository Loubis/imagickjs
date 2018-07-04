const _composit = require('./composit');
const _convert = require('./convert');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

function _imagick(picture) {

    let commandStack = [];
    commandStack.push("magick convert " + picture + " MIFF:-")

    let callbackFunction = function (param) {
        commandStack.push(param);
    }

    this.compare = function (param1) { return new _compare(param1, this, callbackFunction); }

    this.composit = function (param1) { return new _composit(param1, this, callbackFunction) }

    this.conjure = function (param1) { return new _conjure(param1, this, callbackFunction); }

    this.convert = function (param1) { return new _convert(param1, this, callbackFunction); }

    this.identify = function (param1) { return new _indentify(param1, this, callbackFunction); }

    this.mogrify = function (param1) { return new _mogrify(param1, this, callbackFunction); }

    this.montage = function (param1) { return new _montage(param1, this, callbackFunction); }

    this.stream = function (param1) { return new _stream(param1, this, callbackFunction); }

    this.write = function (targetName) {
        // convert MIFF pipe to target file
        commandStack.push("magick convert - " + targetName);

        // exec imagemagick command in console
        console.log(commandStack.join(" | "));
        child = exec(commandStack.join(" | "), function (error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
            sys.print('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    }
}

function imagick(param) {
    return new _imagick(param);
}

module.exports = imagick;

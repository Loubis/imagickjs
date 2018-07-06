const _compare = require('./compare');
const _composit = require('./composit');
const _conjure = require('./conjure');
const _convert = require('./convert');
const _identify = require('./identify');
const _mogrify = require('./mogrify');
const _montage = require('./montage');
const _stream = require('./stream');

const execSync = require('child_process').execSync;

function _imagick(picture) {

    let commandStack = [];

    // put init picture into MIFF stream
    commandStack.push("convert " + picture + " MIFF:-")

    // callback function to get constructed commands by the method chains
    let callbackFunction = function (param) {
        commandStack.push(param);
    }

    // function objects
    this.compare = function (param1) { return new _compare(param1, this, callbackFunction); }
    this.composit = function (param1) { return new _composit(param1, this, callbackFunction) }
    this.conjure = function (param1) { return new _conjure(param1, this, callbackFunction); }
    this.convert = function () { return new _convert(this, callbackFunction); }
    this.identify = function (param1) { return new _identify(param1, this, callbackFunction); }
    this.mogrify = function (param1) { return new _mogrify(param1, this, callbackFunction); }
    this.montage = function (param1) { return new _montage(param1, this, callbackFunction); }
    this.stream = function (param1) { return new _stream(param1, this, callbackFunction); }

    // final write function
    this.write = function (targetName) {
        // convert MIFF pipe to target file
        commandStack.push("convert - " + targetName);
        // exec imagemagick command in console   
        code = execSync(commandStack.join(" | "));
    }
}

// init function
function imagick(param) {
    return new _imagick(param);
}

module.exports = imagick;

const _composit = require('./composit');
const _convert = require('./convert');

function imagick() {

    let stack = [];

    let callbackFunction = function (param) {
        stack.push(param);
    }

    this.compare = function (param1) { return new _compare(param1, this, callbackFunction); }

    this.composit = function (param1) { return new _composit(param1, this, callbackFunction) }

    this.conjure = function (param1) { return new _conjure(param1, this, callbackFunction); }

    this.convert = function (param1) { return new _convert(param1, this, callbackFunction); }

    this.identify = function (param1) { return new _indentify(param1, this, callbackFunction); }

    this.mogrify = function (param1) { return new _mogrify(param1, this, callbackFunction); }

    this.montage = function (param1) { return new _montage(param1, this, callbackFunction); }

    this.stream = function (param1) { return new _stream(param1, this, callbackFunction); }

    this.write = function() {
        console.log("collecting stack");
        console.log(stack);
    }
}

module.exports = new imagick();

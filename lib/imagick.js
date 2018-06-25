const _composit = require('./composit');
const _convert = require('./convert');

function imagick() {

    let stack = [];

    let callbackFunction = function (param) {
        stack.push(param);
    }

    this.composit = function (param1) {
        return new _composit(param1, this, callbackFunction)
    }
    this.convert = function (param2) {
        return new _convert(param2, this, callbackFunction)
    }

    this.write = function () {
        console.log("collecting stack");
        console.log(stack);
    }
}

module.exports = new imagick();

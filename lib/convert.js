function _convert(parent, callback) {
    // reference to parent object
    let parentObj = parent;

    let commandStack = [];
    commandStack.push("magick convert -")

    this.background = function (color) {
        commandStack.push("-background " + color);
        return this;
    }

    this.flatten = function () {
        commandStack.push("-flatten");
        return this;
    }

    this.strip = function () {
        commandStack.push("-strip");
        return this;
    }

    this.resize = function (arg) {
        commandStack.push("-resize " + arg);
        return this;
    }

    this.quality = function (arg) {
        commandStack.push("-quality " + arg);
        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback(commandStack.join(" ") + " MIFF:-");
        return parentObj;
    }

    // TODO add missing parameters
}

module.exports = _convert;
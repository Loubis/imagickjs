function _composit(picture, parent, callback) {
    // reference to parent object
    let parentObj = parent;

    let commandStack = [];

    commandStack.push("magick composite");

    this.gravity = function (param) {
        commandStack.push("-gravity " + param);
        return this;
    }

    this.end = function () {
        callback(commandStack.join(" ") + " - " + picture + " MIFF:-");
        return parentObj;
    }

    // TODO add missing parameters
}

module.exports = _composit;

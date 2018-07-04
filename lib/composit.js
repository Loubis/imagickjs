function _composit(picture, parent, callback) {
    // reference to parent object
    let parentObj = parent;



    let commandStack = [];

    commandStack.push("magick composite");

    this.affine = function (param) {
        // return to reference from itself
        return this;
    }

    this.alpha = function (param) {
        // return to reference from itself
        return this;
    }

    this.blend = function (param) {
        // return to reference from itself
        return this;
    }

    this.border = function (param) {
        // return to reference from itself
        return this;
    }

    this.bordercolor = function (param) {
        // return to reference from itself
        return this;
    }

    this.channel = function (param) { 
        // return to reference from itself
        return this;
    }

    this.colors = function (param) {
        // return to reference from itself
        return this;
    }

    this.colorspace = function (param) {
        // return to reference from itself
        return this;
    }

    this.comment = function (param) {
        // return to reference from itself
        return this;
    }

    this.compose = function (param) {
        // return to reference from itself
        return this;
    }

    this.geometry = function (param) {
        // return to reference from itself
        return this;
    }

    this.gravity = function (param) {
        commandStack.push("-gravity " + param);
        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback(commandStack.join(" ") + " - " + picture + " MIFF:-");
        return parentObj;
    }
}

module.exports = _composit;

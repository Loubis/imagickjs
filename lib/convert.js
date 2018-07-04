function _convert(pictureTarget, parent, callback) {
    // reference to parent object
    let parentObj = parent;

    let commandStack = [];
    commandStack.push("magick convert -")

    this.adaptiveBlur = function(param) {
        return this;
    }

    this.adaptiveResize = function(param) {
        return this;
    }

    this.adaptiveSharpen = function(param) {
        return this;
    }

    this.adjoin = function(param) {
        return this;
    }

    this.affine = function(param) {
        return this;
    }

    this.alpha = function(param) {
        return this;
    }

    this.annotate = function(param) {
        return this;
    }

    this.antialias = function(param) {
        return this;
    }

    this.append = function(param) {
        return this;
    }

    this.authenticate = function(param) {
        return this;
    }

    this.background = function(color) {
        commandStack.push("-background " + color);
        return this;
    }

    this.flatten = function() {
        commandStack.push("-flatten");
        return this;
    }


    this.resize = function (param) {

        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback(commandStack.join(" ") + " MIFF:-");
        return parentObj;
    }
}

module.exports = _convert;
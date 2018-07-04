function _composit(param, parent, callback) {
    // reference to parent object
    this.parentObj = parent;

    let commandStack = [];

    commandStack.push("composite ");

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

    this.compose = function (param) {
        // return to reference from itself
        return this;
    }
    
    this.compose = function (param) {
        // return to reference from itself
        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback("callback 1");
        return this.parentObj;
    }
}

module.exports = _composit;

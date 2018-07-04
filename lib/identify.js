function _identfy(param, parent, callback) {
    // reference to parent object
    this.parentObj = parent;

    this.test = function (param) {
        console.log(param);
        // return to reference from itself
        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback("callback 1");
        return this.parentObj;
    }
}

module.exports = _identfy;

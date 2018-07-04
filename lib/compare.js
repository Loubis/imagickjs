function _compare(param, parent, callback) {
    // reference to parent object
    let parentObj = parent;

    this.test = function (param) {
        console.log(param);
        // return to reference from itself
        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback("callback 1");
        return parentObj;
    }
}

module.exports = _compare;

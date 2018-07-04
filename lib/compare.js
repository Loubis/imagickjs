function _compare(param, parent, callback) {
    // reference to parent object
    let parentObj = parent;

    this.end = function () {
        // return to reference of parent object
        callback("callback 1");
        return parentObj;
    }

    // TODO add missing parameters
}

module.exports = _compare;

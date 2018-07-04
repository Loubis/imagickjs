function _conjure(param, parent, callback) {
    // reference to parent object
    let parentObj = parent;

    this.end = function () {
        // return to reference of parent object
        return parentObj;
    }

    // TODO add missing parameters
}

module.exports = _conjure;
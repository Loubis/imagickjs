function _conjure(param, parent, callback) {
    // reference to parent object
    this.parentObj = parent;
    
    let par = param

    console.log(this.att);

    this.end = function () {
        // return to reference of parent object
        return this.parentObj;
    }
}

module.exports = _convert;
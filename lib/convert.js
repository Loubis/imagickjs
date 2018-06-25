function _convert(param, parent, callback) {
    // reference to parent object
    this.parentObj = parent;
    let par = param
    // printing att
    console.log(this.att);

    this.resize = function (par) {
        console.log(par);
        // return to reference from itself
        return this;
    }

    this.end = function () {
        // return to reference of parent object
        callback("callback 2");
        return this.parentObj;
    }
}

module.exports = _convert;
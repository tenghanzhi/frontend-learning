export const intersect = (a, b) => {
    var _this = this;
    a = this.unique(a);
    return this.map(a, function(o) {
        return _this.contains(b, o) ? o : null;
    });
}

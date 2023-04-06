export const union = (a, b) => {
    var newArr = a.concat(b);
    return this.unique(newArr);
}
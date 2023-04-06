/**
 * Hexadecimal color to RGB \ RGBA string
 * @param {String} val hexadecimal color value
 * @param {Number} opa Opacity, value 0 ~ 1
 * @return {String} RGB or RGBA color value after conversion
 */
export const colorToRGB = (val, opa) => {

    var pattern = /^(#?)[a-fA-F0-9]{6}$/; // Hexadecimal color value verification rules
    var isOpa = typeof opa == 'number'; // Check if opacity is set

    if (!pattern.test(val)) { // If the value does not fit the rules, return a null character
        return '';
    }

    var v = val.replace(/#/, ''); // If there is "#", remove "#" first
    var rgbArr = [];
    var rgbStr = '';

    for (var i = 0; i < 3; i++) {
        var item = v.substring(i * 2, i * 2 + 2);
        var num = parseInt(item, 16);
        rgbArr.push(num);
    }

    rgbStr = rgbArr.join();
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
    return rgbStr;
}
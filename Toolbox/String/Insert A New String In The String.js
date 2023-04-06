/**
 * Insert a new string in the string
 * @param {string} soure: source character
 * @param {string} index: The position of the inserted character
 * @param {string} newStr: The character to be inserted
 * @returns {string} returns the newly generated characters
 */
export const insertStr = (soure, index, newStr) => {
    var str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}
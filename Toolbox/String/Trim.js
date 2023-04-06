/**
 * Trim
 * @param  {str}
 * @param  {type} 
 * type:  1: Any space  2: Space before and after  3: Space before 4: Space after
 * @return {String}
 */
export const trim = (str, type) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}
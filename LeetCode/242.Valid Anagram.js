var isAnagram = function (s, t) {
    return [...s].sort().join('') === [...t].sort().join('')
};
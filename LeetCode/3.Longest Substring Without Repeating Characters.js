var lengthOfLongestSubstring = function (s) {
    let left = 0
    let res = 0
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= left) left = map.get(s[i]) + 1
        res = Math.max(res, i - left + 1)
        map.set(s[i], i)
    }
    return res
};
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sortedStrs = [...strs[i]].sort().join("");
        if (map.has(sortedStrs)) map.get(sortedStrs).push(strs[i])
        else map.set(sortedStrs, [strs[i]])

    }
    return Array.from(map.values());
};
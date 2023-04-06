var longestCommonPrefix = function (strs) {
    let ans = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] !== strs[i][j]) break
        }
        ans = ans.substring(0, j)
    }
    return ans
};
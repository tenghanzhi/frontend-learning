var isPalindrome = function (x) {
    let temp = x.toString()
    let half = Math.floor(temp.length / 2)
    for (let i = 0; i < half; i++) {
        if (temp[i] !== temp[temp.length - i - 1]) return false
    }
    return true
};
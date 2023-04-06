var romanToInt = function (s) {
    const dic = new Map()
    dic.set('I', 1)
    dic.set('V', 5)
    dic.set('X', 10)
    dic.set('L', 50)
    dic.set('C', 100)
    dic.set('D', 500)
    dic.set('M', 1000)

    let answer = 0
    const l = s.length

    for (let i = 0; i < l; i++) {
        const value = dic.get(s[i])
        if (i < l && value < dic.get(s[i + 1])) answer -= value
        else answer += value
    }

    return answer
};
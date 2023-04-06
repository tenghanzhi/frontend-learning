var isValid = function (s) {
    const stack = []

    if (s.length % 2 !== 0) return false

    for (item of s) {
        switch (item) {
            case '{':
            case '[':
            case '(':
                stack.push(item)
                break

            case ')':
                if (stack.pop() !== '(') return false
                break

            case ']':
                if (stack.pop() !== '[') return false
                break

            case '}':
                if (stack.pop() !== '{') return false
                break
        }
    }

    return !stack.length
};
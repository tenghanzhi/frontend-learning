/**
 * Check whether the "a" array contains the "b" array
 */
export const getArrRepeat = (arr1, arr2) => arr1.filter((item, index) => arr2.includes(item))

// indexOf() (推荐)
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。
var str = '123'
console.log(str.indexOf('3') !== -1) //true

// search()
// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1。
var str = '123'
console.log(str.search('3') !== -1) //true

// match()
//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
var str = '123'
var reg = RegExp(/3/)
if (str.match(reg)) {
    // cases
}

// test()
var str = '123'
var reg = RegExp(/3/)
console.log(reg.test(str)) //true

// exec()
var str = '123'
var reg = RegExp(/3/)
if (reg.exec(str)) {
    // cases
}
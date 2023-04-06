////////////////
// Validation //
////////////////

// 1. Email
export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

// 2. Phone number
export const isMobile = (s) => {
  return /^1[0-9]{10}$/.test(s)
}

// 3. Telephone number
export const isPhone = (s) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 4. Url
export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s)
}

// 5. String
export const isString = (o) => {
  return Object.prototype.toString.call(o) === '[object String]'
}

// 6. Number
export const isNumber = (o) => {
  return Object.prototype.toString.call(o) === '[object Number]'
}

// 7. Boolean
export const isBoolean = (o) => {
  return Object.prototype.toString.call(o) === '[object Boolean]'
}

// 8. Function
export const isFunction = (o) => {
  return Object.prototype.toString.call(o) === '[object Function]'
}

// 9. Null
export const isNull = (o) => {
  return Object.prototype.toString.call(o) === '[object Null]'
}

// 10. Undefined
export const isUndefined = (o) => {
  return Object.prototype.toString.call(o) === '[object Undefined]'
}

// 11. Object
export const isObj = (o) => {
  return Object.prototype.toString.call(o) === '[object Object]'
}

// 12. Array
export const isArray = (o) => {
  return Object.prototype.toString.call(o) === '[object Array]'
}

// 13. Date
export const isDate = (o) => {
  return Object.prototype.toString.call(o) === '[object Date]'
}

// 14. RegExp
export const isRegExp = (o) => {
  return Object.prototype.toString.call(o) === '[object RegExp]'
}

// 15. Error
export const isError = (o) => {
  return Object.prototype.toString.call(o) === '[object Error]'
}

// 16. Symbol
export const isSymbol = (o) => {
  return Object.prototype.toString.call(o) === '[object Symbol]'
}

// 17. Promise
export const isPromise = (o) => {
  return Object.prototype.toString.call(o) === '[object Promise]'
}

// 18. Set
export const isSet = (o) => {
  return Object.prototype.toString.call(o) === '[object Set]'
}
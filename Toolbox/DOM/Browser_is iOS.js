export const isIos = () => {
    var uA = navigator.userAgent;
    if (uA.indexOf('Android') > -1 || uA.indexOf('Linux') > -1) {
      return false
    } else if (uA.indexOf('iPhone') > -1) {
      return true
    } else if (uA.indexOf('iPad') > -1) {
      return false
    } else if (uA.indexOf('Windows Phone') > -1) {
      return false
    } else {
      return false
    }
  }
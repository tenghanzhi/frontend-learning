export const isWeiXin = () => {
    return navigator.userAgent.toLowerCase().match(/microMessenger/i) == 'micromessenger'
  }
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(navigator.userAgent.toLowerCase());
  }
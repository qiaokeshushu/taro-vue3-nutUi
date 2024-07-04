import { getAccountInfoSync } from "@tarojs/taro";
export const getEnv = () => {
  // 字节小程序不支持 getAccountInfoSync方法
  const envVersion = getAccountInfoSync().miniProgram.envVersion;
  return envVersion;
}
export const getBaseUrl = () => {
  if (getEnv() === 'develop') {
    //开发环境
    return 'https://api.m.jd.com'
  } else if (getEnv() === 'trial') {
    // 体验版环境
    return 'https://api.m.jd.com'
  }
  //正式环境
  return 'https://api.m.jd.com'
}
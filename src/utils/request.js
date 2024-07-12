import Taro from "@tarojs/taro";
import { getBaseUrl } from "./env";

export const axios = (url, method, data) => {
  return new Promise((resolve, reject) => {
    //获取token
    // const user = userStore();
    // const { token } = storeToRefs(user);
    Taro.request({
      url: `${getBaseUrl()}${url}`,
      data,
      method,
      timeout: 200000,
      header: {
        "content-type": "application/json", // 默认值
        Authorization: `Bearer ${token.value}`,
      },
      success: (res) => {
        if (res.statusCode == 200 && res.data.code == 200) {
          resolve(res.data);
        } else {
          if (res.data.code === 401) {
            Taro.login({
              success(res) {
                // console.log(res.code);
                // login({
                //   code: res.code,
                // }).then((res) => {
                //   const user = userStore();
                //   user.setToken(res.data.access_token);
                //   user.getUserInfoFn();
                // });
              },
            });
          }

          reject(res);
        }
      },
      fail: (err) => {
        // Taro.showToast({
        //   title: "请求失败",
        //   icon: "error",
        // });
        reject(err);
      },
    });
  });
};
export const get = (url, data) => axios(url, "GET", data);
export const post = (url, data) => axios(url, "POST", data);
export const del = (url, data) => axios(url, "DELETE", data);
export const put = (url, data) => axios(url, "PUT", data);

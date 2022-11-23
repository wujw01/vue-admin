import axios from "axios";
import store from "@/store/index";
import { Message } from "element-ui";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

let config = {
  // 正式环境地址
  baseURL: "http://39.108.158.138:8080",
  timeout: 30 * 1000 // Timeout
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      config.headers["Authorization"] = store.state.user.token;
    }
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 相应拦截
_axios.interceptors.response.use(
  response => {
    if (response.status === 200 && !response.data["success"]) {
      if (response.data["success"] != undefined) {
        Message({
          showClose: true,
          message: response.data.msg,
          type: "error"
        });
      }
    }
    return response;
  },
  error => {
    let msg = " ";
    switch (error.response["status"]) {
      case 500:
      case 501:
        msg = "后台错误";
        break;
      case 502:
        msg = "后台重启";
        break;
      case 404:
        msg = "接口不存在";
        break;
      case 401:
        msg = "你没有该权限";
        break;
      case 400:
        msg = error.response.data.msg;
        break;
      default:
        msg = "未知错误";
    }
    Message({
      showClose: true,
      message: error.response["status"] + msg,
      type: "error"
    });
    return Promise.reject(error);
  }
);
export default _axios;

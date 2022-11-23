import Http from "@/plugins/http";
import Store from "@/store/index";
import initData from "@/api/initData.js";
/**
 * 用户登录
 */
export const userLogIn = (from, router) => {
  Http.post("/admin/system/login", from).then(res => {
    if (res.success) {
      Store.dispatch("setUserInfo", res.result);
      Store.dispatch("setToken", res.result.token);
      // Store.dispatch("setUserMenu", res.result.menus);

      Store.dispatch("setUserMenu", initData.menuData());

      // 执行跳转
      router.push({
        name: "home"
      });
    }
  });
};

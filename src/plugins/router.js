import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 注册路由
export default new Router({
  mode: "hash",
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: resolve => require(["@/components/login"], resolve)
    },
    {
      path: "/",
      name: "admin",
      component: resolve => require(["@/components/admin"], resolve),
      children: [
        {
          path: "/home",
          name: "home",
          component: resolve => require(["@/views/home"], resolve)
        },
        {
          path: "/sys/menu",
          name: "sysMenu",
          component: resolve => require(["@/views/sys/menu"], resolve)
        },
        {
          path: "/sys/users",
          name: "sysUsers",
          component: resolve => require(["@/views/sys/users"], resolve)
        },
        {
          path: "/404",
          name: "404",
          component: resolve => require(["@/views/sys/error/404"], resolve)
        },
        {
          path: "*",
          redirect: "404"
        }
      ]
    }
  ]
});

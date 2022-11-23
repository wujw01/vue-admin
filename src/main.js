import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import store from "./store";
import "@/style/index.scss";
import "@/plugins/element";
import "@/utils/rem";
Vue.config.productionTip = false;

// 全局守卫 验证token是否存在
router.beforeEach((to, from, next) => {
  if (store.state.user.token || to.path != "/login") {
    next();
  } else {
    next("/login");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

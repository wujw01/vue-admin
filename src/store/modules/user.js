/* 菜单 */
export const SET_TOKEN = "SET_TOKEN";
/* 登陆人信息 */
export const SET_USER_INFO = "SET_USER_INFO";
/* 用户菜单 */
export const SET_USER_MENU = "SET_USER_MENU";
export default {
  state: {
    // 令牌
    token: null,
    // 用户登录信息
    userInfo: {},
    // 用户菜单
    userMenu: []
  },
  actions: {
    setUserInfo({ commit }, status) {
      commit(SET_USER_INFO, status);
    },
    setToken({ commit }, status) {
      commit(SET_TOKEN, status);
    },
    setUserMenu({ commit }, status) {
      commit(SET_USER_MENU, status);
    }
  },
  mutations: {
    [SET_TOKEN](state, status) {
      state.token = status;
    },
    [SET_USER_INFO](state, status) {
      state.userinfo = status;
    },
    [SET_USER_MENU](state, status) {
      state.userMenu = status;
    }
  }
};

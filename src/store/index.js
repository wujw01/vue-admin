import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ],
  getters
});

export default store;

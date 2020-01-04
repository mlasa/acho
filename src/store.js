import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
    objectEdit: null
  },
  mutations: {
    updateUser: (state, user) => {
      state.user = user;
    },
    updateToken: (state, token) => {
      state.token = token;
    },
    updateObjectEdit: (state, objectEdit) => {
      state.objectEdit = objectEdit;
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token,
    objectEdit: state => state.objectEdit
  }
});

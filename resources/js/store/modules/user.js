import axios from 'axios';

export const state = {
  me: '',
};

export const getters = {
  me: state => state.me,
};

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

export const actions = {
  me({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/me')
        .then(({ data }) => {
          commit('setMe', data);
          resolve(data);
        })
        .catch(({ response }) => reject(response));
    });
  },
};

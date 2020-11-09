import axios from 'axios';

export const state = {
  me: '',
};

export const getters = {};

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

export const actions = {
  me() {
    axios
      .get('/api/me')
      .then(result => {
        console.log(result);
      })
      .catch(err => {});
  },
};

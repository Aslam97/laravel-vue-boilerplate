import axios from 'axios';

export const state = {};

export const getters = {};

export const mutations = {};

export const actions = {
  csrf() {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/sanctum/csrf-cookie')
        .then(result => resolve(result))
        .catch(({ response }) => reject(response));
    });
  },

  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/login', payload)
        .then(result => resolve(result))
        .catch(({ response }) => reject(response));
    });
  },
};

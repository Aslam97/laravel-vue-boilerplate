import axios from 'axios';
import { localize } from 'vee-validate';

const { locale, locales } = window.__init__;

export const state = {
  locale: localStorage.getItem('locale') || locale,
  locales: locales,
};

export const getters = {
  locale: state => state.locale,
  locales: state => state.locales,
};

export const mutations = {
  setLocale(state, { locale }) {
    state.locale = locale;
  },
};

export const actions = {
  locale({ commit, dispatch }, { locale }) {
    commit('setLocale', { locale });
    dispatch('serverLocale', { locale });
    dispatch('veeValidateLocale', locale);

    localStorage.setItem('locale', locale);
  },

  serverLocale({}, payload) {
    return new Promise((resolve, reject) => {
      axios
        .patch('/api/locale', payload)
        .then(({ data }) => resolve(data))
        .catch(({ response }) => reject(response));
    });
  },

  veeValidateLocale({}, code) {
    return import(`vee-validate/dist/locale/${code}.json`).then(locale => {
      localize(code, locale);
    });
  },
};

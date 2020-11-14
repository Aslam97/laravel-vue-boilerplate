export const state = () => ({
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
});

export const getters = {
  darkMode: state => state.darkMode,
};

export const mutations = {
  setDarkMode(state, { mode }) {
    state.darkMode = mode;
  },
};

export const actions = {
  themeToggle({ commit }, payload) {
    localStorage.setItem('darkMode', payload);

    let mode = JSON.parse(localStorage.getItem('darkMode'));
    commit('setDarkMode', { mode });
  },
};

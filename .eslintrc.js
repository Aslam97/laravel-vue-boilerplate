module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
};

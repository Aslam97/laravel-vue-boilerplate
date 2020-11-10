import store from '@store';
import i18n, { loadMessages } from './vue-i18n';

const setLocale = locale => {
  if (i18n.locale !== locale) {
    loadMessages(locale);
    store.dispatch('lang/locale', { locale });
  }
};

export default setLocale;

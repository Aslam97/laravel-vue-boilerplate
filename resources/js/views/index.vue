<script>
import { mapGetters } from 'vuex';
import setLocale from '@utils/setLocale.js';

export default {
  computed: {
    ...mapGetters('user', ['me']),
  },

  mounted() {
    this.$store.dispatch('user/me');
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/csrf').then(() => {
        this.$store.dispatch('auth/logout').then(response => {
          // just to make sure if the server locale remain the same as the client locale
          const { locale } = response;

          if (this.$store.getters['lang/locale'] != locale) {
            setLocale(locale);
          }

          this.$router.push({ name: 'login' });
        });
      });
    },
  },
};
</script>

<template>
  <div>
    <pre>
      {{ me }}
    </pre>

    <BaseButton @click="logout()">
      Logout
    </BaseButton>

    <BaseLink :to="{ name: 'login' }">
      Login
    </BaseLink>
  </div>
</template>

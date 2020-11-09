<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', ['me']),
  },

  mounted() {
    this.$store.dispatch('user/me');
  },
};
</script>

<template>
  <pre>
    {{ me }}
  </pre>
</template>

<style lang="scss" module></style>

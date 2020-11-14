<script>
import { mapGetters } from 'vuex';
import Logo from '@components/logo.vue';
import LangButton from '@components/lang-button.vue';

export default {
  components: { LangButton, Logo },

  computed: mapGetters('theme', ['darkMode']),

  methods: {
    changeClass() {
      this.$store.dispatch('theme/themeToggle', !this.darkMode);
    },
  },
};
</script>

<template>
  <div
    :class="[$style.antialiased, $style['font-sans'], $style['text-gray-900']]"
  >
    <div
      :class="[
        $style.flex,
        $style['min-h-screen'],
        $style['flex-col'],
        $style['justify-center'],
        $style['items-center'],
      ]"
    >
      <Logo />
      <transition name="page" mode="out-in">
        <slot>
          <router-view :key="$route.fullPath" />
        </slot>
      </transition>
    </div>

    <LangButton />
    <BaseTheme :fixed="true" :darkMode="darkMode" :changeClass="changeClass" />
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
</style>

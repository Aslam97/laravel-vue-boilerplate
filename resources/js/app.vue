<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    layout() {
      return (
        (this.$route.meta && this.$route.meta.layout) ||
        require('@layouts/app').default
      );
    },

    ...mapGetters('theme', ['darkMode']),
  },

  watch: {
    darkMode(value) {
      this.setTheme(value);
    },
  },

  methods: {
    setTheme(darkMode) {
      if (darkMode) document.documentElement.className = 'themeDark';
      else document.documentElement.className = 'themeLight';
    },
  },

  created() {
    this.setTheme(this.darkMode);
  },
};
</script>

<template>
  <main id="app">
    <component :is="layout">
      <RouterView :key="$route.fullPath" />
    </component>
  </main>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

@import '~normalize.css/normalize.css';
@import '~nprogress/nprogress.css';
@import '@design/_transition.scss';

:root {
  --theme-ui-colors-background: #edf2f7;
  --theme-ui-colors-primary: #000;
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
}

.themeLight {
  --background-primary: #edf2f7;
  --background-secondary: #fff;
  --color-primary: #4a5568;
  --color-secondary: #4f5660;
  --text-input-background: #fff;
  --text-input-shadow: #e0e0e0;
  --text-input-color: rgba(0, 0, 0, 0.87);
  --checkbox-border: #e2e8f0;
}

.themeDark {
  --background-primary: #121212;
  --background-secondary: #1d1d1d;
  --color-primary: #fff;
  --color-secondary: #b9bbbe;
  --text-input-background: rgba(255, 255, 255, 0.09);
  --text-input-shadow: rgba(79, 84, 92, 0.02);
  --text-input-color: #fff;
  --checkbox-border: rgba(255, 255, 255, 0.7);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 14px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  box-sizing: border-box;
  overflow-y: scroll;
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

body {
  background-color: var(--background-primary);
}

a {
  color: inherit;
  text-decoration: inherit;
}
</style>

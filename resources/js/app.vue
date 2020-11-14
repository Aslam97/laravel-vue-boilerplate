<script>
export default {
  computed: {
    layout() {
      return (
        (this.$route.meta && this.$route.meta.layout) ||
        require('@layouts/app').default
      );
    },
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

a {
  color: inherit;
  text-decoration: inherit;
}
</style>

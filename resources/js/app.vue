<script>
export default {};
</script>

<template>
  <main id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <RouterView :key="$route.fullPath" />
  </main>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern
// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

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

<script>
export default {};
</script>

<template>
  <div
    :class="[$style.antialiased, $style['font-sans'], $style['text-gray-900']]"
  >
    <transition
      name="page"
      mode="out-in"
    >
      <slot>
        <router-view :key="$route.fullPath" />
      </slot>
    </transition>
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
</style>

<script>
export default {};
</script>

<template>
  <div
    :class="[$style.antialiased, $style['font-sans'], $style['text-gray-900']]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
</style>

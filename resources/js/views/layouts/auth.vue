<script>
export default {};
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
        $style['bg-gray-200'],
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
</style>

<script>
export default {};
</script>

<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  margin: 0 auto;
}
</style>

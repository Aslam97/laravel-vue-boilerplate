<script>
import Logo from '@components/logo.vue';
import LangButton from '@components/lang-button.vue';
export default {
  components: { LangButton, Logo },
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
        $style['bg-gray-200'],
      ]"
    >
      <Logo />
      <transition
        name="page"
        mode="out-in"
      >
        <slot>
          <router-view :key="$route.fullPath" />
        </slot>
      </transition>
    </div>

    <LangButton />
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
</style>

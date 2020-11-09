<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#fff',
    },
  },
};
</script>

<template>
  <div
    :class="$style.animation"
    aria-busy="true"
    aria-valuemax="100"
    aria-valuemin="0"
    role="progressbar"
    tabindex="0"
  >
    <div
      :class="$style.bullet"
      :style="{ backgroundColor: bgColor }"
    />
    <div
      :class="[$style.bullet, $style.animationDelay]"
      :style="{ backgroundColor: bgColor }"
    />
    <div
      :class="[$style.bullet, $style.animationDelayNext]"
      :style="{ backgroundColor: bgColor }"
    />
  </div>
</template>

<style lang="scss" module>
@keyframes animation {
  0% {
    opacity: 0.265;
    transform: scale(0.8, 0.8);
  }

  5% {
    opacity: 0.25;
  }

  50% {
    transform: scale(1, 1);
  }

  55% {
    opacity: 1;
  }

  100% {
    opacity: 0.265;
    transform: scale(0.8, 0.8);
  }
}

.animation {
  display: flex;
  flex-direction: row;
  outline: none;
  justify-content: center;

  .bullet {
    height: 6px;
    border-radius: 4px;
    opacity: 0.265;
    margin-right: 2px;
    margin-left: 2px;
    width: 6px;
    transform: scale(0.8, 0.8);
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-iteration-count: infinite;
    animation-name: animation;
  }
}

.animationDelay {
  animation-delay: 0.3s;
}

.animationDelayNext {
  animation-delay: 0.6s;
}
</style>

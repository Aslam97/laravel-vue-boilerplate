<script>
export default {
  props: {
    darkMode: Boolean,
    fixed: Boolean,
    changeClass: Function,
  },

  computed: {
    themeClass() {
      return this.fixed ? this.$style.psFixed : this.$style.psNormal;
    },
  },
};
</script>

<template>
  <button
    v-on:click.prevent="changeClass()"
    aria-label="switch theme button"
    :class="[
      $style.psAll,
      themeClass,
      {
        [$style.btnLight]: !darkMode,
        [$style.btnNight]: darkMode,
      },
    ]"
  >
    <div
      :class="{
        [$style.lightStart]: !darkMode,
        [$style.nightStart]: darkMode,
      }"
    ></div>
    <div
      :class="{
        [$style.lightEnd]: !darkMode,
        [$style.nightEnd]: darkMode,
      }"
    ></div>
  </button>
</template>

<style lang="scss" module>
.psAll {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease 0s;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: var(--background-primary);
}

.psNormal {
  opacity: 0.5;
  position: relative;
}

.psFixed {
  opacity: 0.7;
  position: fixed;
  top: 20px;
  left: 20px;
}

// BTN LIGHT
.btnLight .lightStart {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--theme-ui-colors-primary, #000);
  background: var(--theme-ui-colors-primary, #000);
  transform: scale(1);
  transition: all 0.45s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid var(--theme-ui-colors-primary, #000);
    border-radius: 50%;
    transform: translate(0, 0);
    opacity: 1;
    transition: transform 0.45s ease;
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 var(--theme-ui-colors-primary, #000),
      0 23px 0 var(--theme-ui-colors-primary, #000),
      23px 0 0 var(--theme-ui-colors-primary, #000),
      -23px 0 0 var(--theme-ui-colors-primary, #000),
      15px 15px 0 var(--theme-ui-colors-primary, #000),
      -15px 15px 0 var(--theme-ui-colors-primary, #000),
      15px -15px 0 var(--theme-ui-colors-primary, #000),
      -15px -15px 0 var(--theme-ui-colors-primary, #000);
    transform: scale(0);
    transition: all 0.35s ease;
  }
}

.btnLight .lightEnd {
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: var(--theme-ui-colors-background, #fafafa);
  transform: translate(0, 0);
  opacity: 1;
  transition: background 0.25s var(--ease-in-out-quad),
    color 0.25s var(--ease-in-out-quad), transform 0.45s ease;
}

// BTN NIGHT
.btnNight:hover {
  opacity: 1;
}

.btnNight .nightStart {
  position: relative;
  width: 24px;
  height: 24px;
  transform: scale(0.55);
  border-radius: 50%;
  background: var(--theme-ui-colors-background);
  transition: all 0.45s ease 0s;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    transform: translate(14px, -14px);
    opacity: 0;
    border-radius: 50%;
    transition: transform 0.45s ease 0s;
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 #fff, 0 23px 0 #fff, 23px 0 0 #fff, -23px 0 0 #fff,
      15px 15px 0 #fff, -15px 15px 0 #fff, 15px -15px 0 #fff, -15px -15px 0 #fff;
    transform: scale(1);
    border-radius: 50%;
    margin: -4px 0px 0px -4px;
    transition: all 0.35s ease 0s;
  }
}

.btnNight .nightEnd {
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  transform: translate(14px, -14px);
  opacity: 0;
  border-radius: 50%;
  border: 0;
}
</style>

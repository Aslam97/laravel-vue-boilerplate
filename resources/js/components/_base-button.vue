<template>
  <button
    :class="[$style.btn, $style.btnBlue]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style lang="scss" module>
.btn {
  display: inline-block;
  position: relative;
  cursor: pointer;
  min-height: 36px;
  min-width: 88px;
  line-height: 36px;
  vertical-align: middle;
  align-items: center;
  text-align: center;
  border-radius: 2px;
  box-sizing: border-box;
  user-select: none;
  outline: none;
  border: 0;
  padding: 0 6px;
  background: transparent;
  color: currentColor;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  font-style: inherit;
  font-variant: inherit;
  font-family: inherit;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.06);
    box-shadow: none;
    color: rgba(0, 0, 0, 0.26) !important;
    pointer-events: none;
  }
}

.btn {
  padding-left: 16px;
  padding-right: 16px;
  border: 0;
  border-radius: 8px;
  text-transform: none;
  letter-spacing: 0.25px;
  min-width: 60px;
}

.btnSm {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  line-height: 20px;
  min-height: 20px;
}

.btnMd {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
}

.btnBlue {
  background-color: #1a73e8;
  color: #fff !important;

  &:hover {
    background-color: #1765cc;
    box-shadow: none;
  }

  &:hover:disabled {
    background-color: rgba(0, 0, 0, 0.06);
    box-shadow: none;
  }
}
</style>

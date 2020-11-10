<script>
import { mapGetters } from 'vuex';
import setLocale from '@utils/setLocale.js';

export default {
  data: () => ({
    active: false,
  }),

  computed: {
    ...mapGetters('lang', ['locale', 'locales']),

    filterNotActiveLang() {
      return Object.keys(this.locales).filter(key => key !== this.locale)[0];
    },
  },

  methods: {
    loadLocale(locale) {
      this.active = false;

      setLocale(locale);
    },
  },
};
</script>

<template>
  <div
    :class="[
      $style.fixedLangBtn,
      $style.directionBottom,
      { [$style.active]: active },
    ]"
  >
    <a role="button" :class="$style.btnFloating" @click="active = !active">
      <img
        :src="require(`@assets/images/flags/${locale}-circle.svg`)"
        height="36"
        width="36"
        :alt="locale"
      />
    </a>
    <ul :class="$style.resetUL">
      <li>
        <a
          role="button"
          :class="$style.btnFloating"
          @click="loadLocale(filterNotActiveLang)"
        >
          <img
            :src="
              require(`@assets/images/flags/${filterNotActiveLang}-circle.svg`)
            "
            height="36"
            width="36"
            :alt="filterNotActiveLang"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.fixedLangBtn {
  position: fixed;
  right: 20px;
  top: 20px;
  margin-bottom: 0;
  z-index: 997;

  &.directionBottom {
    padding: 0 0 15px 0;
  }

  &.directionBottom ul {
    top: 45px;
    bottom: auto;
    display: flex;
    flex-direction: column-reverse;
  }

  &.directionBottom ul li {
    margin: 6px 0 0 0;
  }

  &.active ul {
    visibility: visible;
  }
}

.btnFloating {
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 36px;
  height: 36px;
  line-height: 36px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: middle;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.fixedLangBtn ul {
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  bottom: 64px;
  margin: 0;
  visibility: hidden;
}

.resetUL {
  padding-left: 0;
  list-style-type: none;
}
</style>

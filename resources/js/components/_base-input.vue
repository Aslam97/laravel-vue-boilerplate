<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },

    rules: {
      type: [String, Object],
      default: '',
    },

    name: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    vid: {
      type: String,
      default: undefined,
    },

    type: {
      type: String,
      default: 'text',
    },

    label: {
      type: Boolean,
      default: false,
    },

    autocomplete: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    currentValue: '',
  }),

  computed: {
    isRequired() {
      if (this.rules.includes('required')) return true;
      return false;
    },
  },

  watch: {
    value: {
      handler(after) {
        this.currentValue = after;
      },
      immediate: true,
    },
  },

  methods: {
    handleInput() {
      this.$emit('input', this.currentValue);
    },
  },
};
</script>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    :class="$style.formGroup"
    :rules="rules"
    :name="name"
    :vid="vid"
  >
    <label
      v-if="label"
      :for="name"
      :class="[$style.formLabel, $style['mb-2']]"
    >
      {{ name }}
      <span
        v-if="isRequired"
        :class="$style.formRequired"
      >*</span>
    </label>

    <input
      :id="name"
      v-model="currentValue"
      :type="type"
      :class="[$style.formControl, { [$style.isInvalid]: errors[0] }]"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="handleInput"
    >
    <span :class="$style.invalidFeedback">{{ errors[0] }}</span>

    <small :class="$style.formHelp">
      <slot name="form-help" />
    </small>
  </ValidationProvider>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';

.formGroup {
  display: block;
  margin-bottom: 1rem;
}

.formRequired {
  color: #ff5252;

  :after {
    content: ' ';
  }
}

.formControl {
  background-color: var(--text-input-background);
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--text-input-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
  max-width: 100%;
  outline: 0;
  padding: 8px;
  transition: box-shadow 0.15s;
  vertical-align: middle;
  box-shadow: inset 0 0 0 2px transparent,
    inset 0 0 0 1px var(--text-input-shadow);
  width: 100%;
  max-height: 36px;

  &:focus {
    box-shadow: 0 0 0 2px #1a73e8 inset;
  }

  &.isInvalid {
    box-shadow: inset 0 -2px 0 #ff5252, inset 0 0 0 1px var(--text-input-shadow);
  }

  &.isInvalid:focus {
    box-shadow: 0 0 0 2px #1a73e8 inset;
  }

  &.isInvalid ~ .invalidFeedback {
    display: block;
  }
}

.invalidFeedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  color: #ff5252;
  font-size: 11px;
  line-height: 16px;
}

.formHelp {
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  margin-top: 1rem;
}
</style>

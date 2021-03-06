<script>
export default {
  meta() {
    return {
      title: this.$t('auth.register.title'),
    };
  },

  data: () => ({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    tryingToRegister: false,
  }),

  methods: {
    onSubmit() {
      this.$store.dispatch('auth/csrf').then(() => {
        this.tryingToRegister = true;

        this.$store
          .dispatch('auth/register', this.$data)
          .then(() => {
            this.tryingToRegister = false;

            // Redirect to the originally requested page, or to the home page
            this.$router.push(
              this.$route.query.redirectFrom || { name: 'home' }
            );
          })
          .catch(({ data }) => {
            const { errors } = data;

            this.tryingToRegister = false;
            this.$refs.formRegister.setErrors(errors);
          });
      });
    },
  },
};
</script>

<template>
  <div
    :class="[
      $style.flex,
      $style['w-full'],
      $style['flex-col'],
      $style['justify-center'],
      $style['items-center'],
    ]"
  >
    <ValidationObserver
      ref="formRegister"
      v-slot="{ handleSubmit }"
      tag="div"
      :class="[
        $style['w-full'],
        $style['mw-96'],
        $style['mt-6'],
        $style['mb-6'],
        $style['px-6'],
        $style['py-6'],
        $style['bg-secondary'],
        $style['rounded-lg'],
        $style['shadow-md'],
        $style['overflow-hidden'],
      ]"
    >
      <form @submit.prevent="handleSubmit(onSubmit)">
        <BaseInput
          v-model="name"
          :name="$t('auth.register.name')"
          rules="required|alpha_spaces"
          :label="true"
          vid="name"
        />

        <BaseInput
          v-model="email"
          :name="$t('auth.register.email')"
          rules="required|email"
          :label="true"
          vid="email"
        />

        <BaseInput
          v-model="password"
          :name="$t('auth.register.password')"
          rules="required|min:8"
          type="password"
          :label="true"
          vid="password"
        />

        <BaseInput
          v-model="password_confirmation"
          :name="$t('auth.register.password_confirmation')"
          rules="required|confirmed:password"
          type="password"
          autocomplete="new-password"
          :label="true"
          vid="password_confirmation"
        />

        <div
          :class="[
            $style.flex,
            $style['items-center'],
            $style['justify-end'],
            $style['mt-4'],
          ]"
        >
          <BaseButton
            :class="$style['ml-4']"
            :disabled="tryingToRegister"
          >
            <BaseSpinner
              v-if="tryingToRegister"
              bg-color="#1a202c"
            />
            <span v-else>{{ $t('auth.register.submit') }}</span>
          </BaseButton>
        </div>
      </form>
    </ValidationObserver>
    <div :class="$style['text-secondary']">
      {{ $t('auth.register.login_placeholder') }}
      <BaseLink
        :class="$style['text-blue-700']"
        :to="{ name: 'login' }"
      >
        {{ $t('auth.register.login') }}
      </BaseLink>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
@import '@design/_form-checkbox.scss';

.formLabel {
  display: block;
  font-size: 0.875rem;
  color: #4a5568;
}
</style>

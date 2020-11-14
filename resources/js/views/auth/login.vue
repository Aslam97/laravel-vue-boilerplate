<script>
export default {
  meta() {
    return {
      title: this.$t('auth.login.title'),
    };
  },

  data: () => ({
    email: '',
    password: '',
    remember: '',
    tryingToLogIn: false,
  }),

  methods: {
    onSubmit() {
      this.$store.dispatch('auth/csrf').then(() => {
        this.tryingToLogIn = true;

        this.$store
          .dispatch('auth/login', this.$data)
          .then(() => {
            this.tryingToLogIn = false;

            // Redirect to the originally requested page, or to the home page
            this.$router.push(
              this.$route.query.redirectFrom || { name: 'home' }
            );
          })
          .catch(({ data }) => {
            const { errors } = data;

            this.tryingToLogIn = false;
            this.$refs.formLogin.setErrors(errors);
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
      ref="formLogin"
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
          v-model="email"
          type="email"
          :name="$t('auth.login.email')"
          rules="required|email"
          vid="email"
          :label="true"
          autofocus
          autocomplete="off"
        />

        <BaseInput
          v-model="password"
          type="password"
          :name="$t('auth.login.password')"
          rules="required"
          vid="password"
          :label="true"
        />

        <label :class="[$style.block, $style['mt-4']]">
          <div :class="[$style.flex, $style['items-center']]">
            <input
              v-model="remember"
              :class="$style.formCheckbox"
              type="checkbox"
              name="remember"
            />
            <span :class="[$style['ml-2'], $style.formLabel]">{{
              $t('auth.login.remember_me')
            }}</span>
          </div>
        </label>

        <div
          :class="[
            $style.flex,
            $style['items-center'],
            $style['justify-end'],
            $style['mt-4'],
          ]"
        >
          <BaseLink
            :class="[$style['text-sm'], $style['text-blue-700']]"
            :to="{ name: 'forgot-password' }"
          >
            {{ $t('auth.login.forgot_password') }}
          </BaseLink>

          <BaseButton :class="$style['ml-4']" :disabled="tryingToLogIn">
            <BaseSpinner v-if="tryingToLogIn" bg-color="#1a202c" />
            <span v-else>{{ $t('auth.login.submit') }}</span>
          </BaseButton>
        </div>
      </form>
    </ValidationObserver>
    <div :class="$style['text-secondary']">
      {{ $t('auth.login.register_placeholder') }}
      <BaseLink :class="$style['text-blue-700']" :to="{ name: 'register' }">
        {{ $t('auth.login.register') }}
      </BaseLink>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design/_utilities.scss';
@import '@design/_form-checkbox.scss';
</style>

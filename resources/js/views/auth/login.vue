<script>
import AuthLayout from '@layouts/auth.vue';
import Logo from '@components/logo.vue';
export default {
  meta: {
    title: 'Login',
  },

  components: { AuthLayout, Logo },

  data: () => ({
    email: '',
    password: '',
    remember: '',
    wait: false,
  }),

  methods: {
    onSubmit() {
      this.$store.dispatch('auth/csrf').then(() => {
        this.wait = true;

        this.$store
          .dispatch('auth/login', this.$data)
          .then(result => {
            this.wait = false;
          })
          .catch(({ data }) => {
            const { errors } = data;

            this.wait = false;
            this.$refs.formLogin.setErrors(errors);
          });
      });
    },
  },

  mounted() {
    this.$store.dispatch('user/me');
  },
};
</script>

<template>
  <AuthLayout>
    <Logo />
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
        $style['bg-white'],
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
              :class="$style.formCheckbox"
              v-model="remember"
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

          <BaseButton :class="$style['ml-4']" :disabled="wait">
            <BaseSpinner v-if="wait" bgColor="#1a202c" />
            <span v-else>{{ $t('auth.login.submit') }}</span>
          </BaseButton>
        </div>
      </form>
    </ValidationObserver>

    <div :class="[$style['text-center'], $style['text-muted']]">
      {{ $t('auth.login.register_placeholder') }}
      <BaseLink :class="$style['text-blue-700']" :to="{ name: 'register' }">
        {{ $t('auth.login.register') }}
      </BaseLink>
    </div>
  </AuthLayout>
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

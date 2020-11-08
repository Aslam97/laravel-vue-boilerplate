<script>
import AuthLayout from '@layouts/auth.vue';
export default {
  meta: {
    title: 'Login',
  },

  components: { AuthLayout },

  data: () => ({
    email: '',
    password: '',
    remember: '',
  }),

  methods: {
    onSubmit() {},
  },
};
</script>

<template>
  <AuthLayout>
    <ValidationObserver
      ref="form"
      v-slot="{ handleSubmit }"
      tag="div"
      :class="[
        $style['w-96'],
        $style['mt-6'],
        $style['px-6'],
        $style['py-4'],
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
          name="Email"
          rules="required|email"
          vid="email"
          :label="true"
          autofocus
          autocomplete="off"
        />

        <BaseInput
          v-model="password"
          type="password"
          name="Password"
          rules="required"
          vid="password"
          :label="true"
        />

        <label :class="[$style.block, $style['mt-4']]">
          <div :class="[$style.flex, $style['items-center']]">
            <input
              :class="$style.formCheckbox"
              type="checkbox"
              name="remember"
            >
            <span :class="[$style['ml-2'], $style.formLabel]">Remember Me</span>
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
            :class="[$style['text-sm'], $style['text-gray-600']]"
            :to="{ name: 'forgot-password' }"
          >
            {{ $t('auth.login.forgot_password') }}
          </BaseLink>

          <BaseButton :class="$style['ml-4']">
            {{ $t('auth.login.title') }}
          </BaseButton>
        </div>
      </form>
    </ValidationObserver>
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

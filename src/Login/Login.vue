<template>
  <div class="d-flex justify-content-center">
    <div class="mt-4 col-4">
      <form @submit.prevent="onSubmit">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <div v-if="errors.message" class="row alert alert-danger" role="alert">
          {{ errors.message }}
        </div>
        <div class="form-group row">
          <label for="email" class="sr-only">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            class="form-control"
            placeholder="Email address"
            autocomplete="on"
            v-model="email"
            :class="errors.email && 'is-invalid'"
          />
          <small v-if="errors.email" id="email-error" class="text-danger">
            {{ errors.email }}
          </small>
        </div>
        <div class="form-group row">
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Password"
            autocomplete="on"
            v-model="password"
            :class="errors.password && 'is-invalid'"
          />
          <small v-if="errors.password" class="text-danger">
            {{ errors.password }}
          </small>
        </div>
        <button
          :disabled="!isSubmitReady"
          class="btn btn-lg btn-primary btn-block mt-3"
          id="submit"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import { ErrorProps } from './interface';
import { ActionTypes, GetterTypes } from './const';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters({
      checkErrors: GetterTypes.CHECK_ERRORS,
      isLoggedIn: 'isLoggedIn'
    }),
    ...mapState({
      // known bug with vuex & ts
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      errors: (state: any): ErrorProps => {
        return state.login.errors;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      submitting: (state: any): boolean => state.login.submitting
    }),
    isSubmitReady(): boolean {
      if (
        !this.checkErrors &&
        this.email.length > 0 &&
        this.password.length > 1 &&
        !this.submitting
      ) {
        return true;
      }

      return false;
    }
  },
  watch: {
    email(value: string): void {
      this.validateEmail(value);
    },
    password(value: string): void {
      this.validatePassword(value);
    }
  },
  methods: {
    onSubmit(): void {
      this[ActionTypes.SUBMIT_FORM]({
        email: this.email,
        password: this.password,
        router: this.$router
      });
    },
    ...mapActions([
      ActionTypes.SET_ERROR,
      ActionTypes.RESET_ERROR,
      ActionTypes.SUBMIT_FORM
    ]),
    validateEmail(email: string): void {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        this[ActionTypes.SET_ERROR]('email');
      }
      if (emailRegex.test(email)) {
        this[ActionTypes.RESET_ERROR]('email');
      }
    },
    validatePassword(password: string) {
      if (password.length < 6) {
        this[ActionTypes.SET_ERROR]('password');
      }
      if (password.length > 5) {
        this[ActionTypes.RESET_ERROR]('password');
      }
    }
  }
});
</script>

<style></style>

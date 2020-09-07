<template>
  <div class="d-flex justify-content-center">
    <div class="mt-4 col-4">
      <form @submit.prevent="onSubmit">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
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
          />
          <small id="email-error" class="text-danger">
            Error placeholder
          </small>
        </div>
        <div class="form-group row">
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control mt-3 is-invalid"
            placeholder="Password"
            autocomplete="on"
            v-model="password"
          />
          <small class="text-danger">
            Error placeholder
          </small>
        </div>
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import { ErrorProps } from './interface';
import { ActionTypes } from './const';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: mapState({
    // known bug with vuex & ts
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: (state: any): ErrorProps => {
      return state.login.errors;
    }
  }),
  watch: {
    email(value: string): void {
      this.validateEmail(value);
    }
  },
  methods: {
    onSubmit(): void {
      // console.log(this.email);
    },
    ...mapActions([ActionTypes.SET_ERROR]),
    validateEmail(email: string): void {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailRegex.test(email)) {
        // TODO call error action
        // console.log(this);
        this[ActionTypes.SET_ERROR]('email');
      }
      if (emailRegex.test(email)) {
        // console.log(this.errors);
        // TODO call clear error action
      }
    }
  }
});
</script>

<style></style>

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

<script>
export default {};
</script>

<style></style>

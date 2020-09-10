<template>
  <div id="app" class="app">
    <nav class="navbar navbar-dark bg-dark">
      <h1 class="navbar-brand">Vue Jobs</h1>
      <button @click="logOut" class="btn btn-light" v-if="isLoggedIn">
        Log Out
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  methods: {
    ...mapActions({
      logOutAction: 'logOut'
    }),
    logOut() {
      this.logOutAction(this.$router);
    }
  }
};
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

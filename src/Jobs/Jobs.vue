<template>
  <div>
    <div class="loader"><img src="@/assets/loader.gif" /></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ActionTypes } from './const';

export default {
  name: 'Jobs',
  methods: {
    ...mapActions([ActionTypes.FETCH_DATA_ACTION])
  },
  mounted() {
    this[ActionTypes.FETCH_DATA_ACTION]();
  }
};
</script>

<style></style>

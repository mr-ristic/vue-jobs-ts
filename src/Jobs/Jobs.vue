<template>
  <div>
    <div v-if="loader" class="loader"><img src="@/assets/loader.gif" /></div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState, mapGetters } from 'vuex';
import { ActionTypes } from './const';

export default {
  name: 'Jobs',
  computed: {
    ...mapState({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loader: (state: any): boolean => state.jobs.loader
    }),
    ...mapGetters(['getData'])
  },
  methods: {
    ...mapActions([ActionTypes.FETCH_DATA_ACTION])
  },
  mounted() {
    this[ActionTypes.FETCH_DATA_ACTION]();
  }
};
</script>

<style></style>

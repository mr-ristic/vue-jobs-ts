<template>
  <div>
    <div v-if="loader" class="loader"><img src="@/assets/loader.gif" /></div>
    <table v-if="!loader && getData" class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">User name</th>
          <th scope="col">Job Name</th>
          <th scope="col">Client name</th>
          <th scope="col">Start time</th>
          <th scope="col">End time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getData" :key="item.startTime">
          <td>{{ item.userName }}</td>
          <td>{{ item.jobName }}</td>
          <td>{{ item.clientName }}</td>
          <td>{{ item.startTime }}</td>
          <td>{{ item.endTime }}</td>
        </tr>
      </tbody>
    </table>
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

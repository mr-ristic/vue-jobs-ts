<template>
  <div>
    <div v-if="loader" class="loader"><img src="@/assets/loader.gif" /></div>
    <table v-if="!loader && data" class="table">
      <thead v-if="pagination" class="thead-dark">
        <tr>
          <th colspan="4">
            <nav>
              <Paginate
                v-model="pagination.currentPage"
                :clickHandler="pageClickHandler"
                :page-count="pagination.totalPages"
                :page-range="3"
                :margin-pages="2"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-link-class="'page-link'"
                :next-link-class="'page-link'"
                :prev-link-class="'page-link'"
                :prev-class="'page-item'"
                :next-class="'page-item'"
                :pageClass="'page-item'"
              >
              </Paginate>
            </nav>
          </th>
          <th colspan="1" class="text-center">
            <nav>
              <label for="per-page">Per Page:</label>
              <ul id="per-page" class="pagination">
                <li
                  @click="perPageClickHandler(num)"
                  v-for="num in pageNumbers"
                  :key="num"
                  class="page-item"
                  :class="num === pagination.perPage && 'active'"
                >
                  <a class="page-link" href="#">{{ num }}</a>
                </li>
              </ul>
            </nav>
          </th>
        </tr>
        <tr>
          <th scope="col">User name</th>
          <th scope="col">Job Name</th>
          <th scope="col">Client name</th>
          <th scope="col">Start time</th>
          <th scope="col">End time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
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

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Paginate from 'vuejs-paginate';
import { ActionTypes } from './const';

export default {
  name: 'Jobs',
  components: { Paginate },
  data() {
    return {
      pageNumbers: [10, 20, 40, 80, 100, 200]
    };
  },
  computed: {
    ...mapState({
      loader: (state) => state.jobs.loader
    }),
    ...mapGetters({ data: 'getData', pagination: 'getPagination' })
  },
  methods: {
    ...mapActions([ActionTypes.FETCH_DATA_ACTION]),
    pageClickHandler(pageNumber) {
      this[ActionTypes.FETCH_DATA_ACTION]({
        pageNumber,
        perPage: this.pagination.perPage
      });
    },
    perPageClickHandler(perPage) {
      this[ActionTypes.FETCH_DATA_ACTION]({
        pageNumber: 1,
        perPage
      });
    }
  },

  mounted() {
    this[ActionTypes.FETCH_DATA_ACTION]();
  }
};
</script>

<style></style>

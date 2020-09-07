import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../Login";
import Jobs from "../Jobs";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

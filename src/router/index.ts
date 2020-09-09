import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../Login';
import Jobs from '../Jobs';
import { Store } from 'vuex';

export function createRouter(vueInstance = Vue, store: Store<any>) {
  vueInstance.use(VueRouter);

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Root',
      redirect: () => {
        if (store.getters.isLoggedIn) {
          return '/jobs';
        }
        return '/login';
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs,
      meta: {
        requiresAuth: true
      }
    },
    {
      // TODO add 404 component
      path: '*',
      redirect: '/'
    }
  ];

  let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });

  router.beforeEach((to, from, next) => {
    console.log({ to });
    if (to.name === 'Login' && store.getters.isLoggedIn) {
      next(from.path);
    }
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      }
      next('/login');
    } else {
      next();
    }
  });

  return router;
}

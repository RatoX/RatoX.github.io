import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

Vue.use(Router);

const JSONValidator = () => import('@/components/tools/JSONValidator.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/json',
      name: 'JSONValidator',
      component: JSONValidator,
    },
  ],
});

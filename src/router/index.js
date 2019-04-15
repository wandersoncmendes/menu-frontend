import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(
        /* webpackChunkName: "routes" */
        `@/views/HomePage.vue`
      )
    },
    { path: '/second', name: 'Second', component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/SecondPage.vue`
    ) },

    { path: '/login', name: 'Login',component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/LoginPage.vue`
    ) },
    { path: '/register', name: 'Register', component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/RegisterPage.vue`
    ) },

    

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ],
});

console.log("routes", router)

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    console.log("chegour");
    
    return next('/login');
  }

  next();
})

export default router;
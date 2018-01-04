import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from 'src/store'

Vue.use(VueRouter)

const router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),

  routes: routes.items
})

router.beforeResolve((to, from, next) => {
  const permissions = to.meta.permissions || []
  const user = store.getters['auth:user']

  if (permissions.indexOf('authenticated') >= 0 && user === null) {
    next('/register')
  }

  if (permissions.indexOf('unauthenticated') >= 0 && user !== null) {
    next('/')
  }

  next()
})

export default router

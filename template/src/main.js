require(`./themes/app.${__THEME}.styl`)

require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import VueAxios from 'vue-axios'
import Quasar from 'quasar'
import axios from 'axios'

import { AuthPlugin } from 'kovaro-vue-common'

import i18n from './i18n'
import store from './store'
import router from './router'

import api from './config/api'
import app from './config/app'
import modal from './config/modal'

Vue.config.productionTip = false

Vue.use(Quasar)
Vue.use(VueAxios, axios)
Vue.use(AuthPlugin, axios, api.auth)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    i18n,
    router,
    render: h => h(require('./App').default),
    store,

    created: function () {
      this.$store.commit('auth:setUser', {
        username: 'dummy',
        email: 'foo@bar.com'
      })

      this.$store.dispatch('app:init', app)
      this.$store.dispatch('modal:init', modal)
    }
  })
})

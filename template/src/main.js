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

Vue.config.productionTip = false

Vue.use(Quasar)
Vue.use(VueAxios, axios)
Vue.use(AuthPlugin, axios, {
  connectUrl: 'http://localhost:8000/auth/login',
  registerUrl: 'http://localhost:8000/users'
})

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
    router,
    render: h => h(require('./App').default),
    i18n,
    store
  })
})

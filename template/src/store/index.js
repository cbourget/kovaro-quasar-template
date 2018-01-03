import Vue from 'vue'
import Vuex from 'vuex'

import {
  AppStore,
  AuthStore,
  ModalStore
} from 'kovaro-vue-common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app: AppStore,
    auth: AuthStore,
    modal: ModalStore
  },
  strict: debug
})

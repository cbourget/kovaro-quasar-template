<template>
  <div id="app">
    <k-main
      :menu="appMenu"
      :header="appHeader"
      :sidenav="appSidenav"
      @menuclick="handleMenuClick($event)"
      v-if="layout === 'main'">

      <account-btn slot="buttons" connection="/connect"/>

      <router-view />

    </k-main>
    <k-full v-else-if="layout === 'full'">
      <router-view />
    </k-full>

    <k-modal
      ref="modal"
      :header="modalHeader"
      @open="handleModalOpen()"
      @close="handleModalClose()">
      <component :is="modalContent.component" v-bind="modalContent.props"/>
    </k-modal>
  </div>
</template>

<script>

import {
  KFull,
  KMain
} from './layouts'

import { KModal } from './components'
import { AccountBtn } from './modules'

import store from './store'
import app from './config/app'
import modal from './config/modal'

export default {
  name: 'app',
  components: {
    KFull,
    KMain,
    KModal,

    AccountBtn
  },
  computed: {
    layout () {
      let layout = 'main'
      if (['404', 'connect', 'register'].indexOf(this.$route.name) > 0) {
        layout = 'full'
      }
      return layout
    },
    appHeader () {
      return this.$store.getters['app:header']
    },
    appMenu () {
      return this.$store.getters['app:menu']
    },
    appSidenav () {
      return this.$store.getters['app:sidenav']
    },
    modalHeader () {
      return this.$store.getters['modal:header']
    },
    modalContent () {
      return this.$store.getters['modal:content']
    }
  },
  created: function () {
    this.$store.watch(this.$store.getters['modal:opened'], (opened) => {
      if (this.$refs.modal) {
        opened ? this.$refs.modal.open() : this.$refs.modal.close()
      }
    })
    this.$store.commit('auth:setUser', {
      username: 'dummy',
      email: 'foo@bar.com'
    })
    this.$store.dispatch('app:init', app)
    this.$store.dispatch('modal:init', modal)
  },
  methods: {
    handleMenuClick (menuItem) {
      this.$store.dispatch('modal:open')
      this.$store.dispatch('modal:updateHeader', {
        title: menuItem.label
      })
      this.$store.dispatch('modal:setContent', menuItem.content)
    },
    handleModalOpen () {
      this.$store.dispatch('modal:open')
    },
    handleModalClose () {
      this.$store.dispatch('modal:close')
    }
  },
  store
}
</script>

<style></style>

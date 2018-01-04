<template>
  <div>
    <k-main
      :menu="appMenu"
      :header="appHeader"
      :sidenav="appSidenav"
      @menuclick="handleMenuClick($event)">

      <account-btn slot="buttons" connection="/connect"/>

      <slot></slot>
    </k-main>

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
  KMain,
  KModal
} from 'src/components'
import { AccountBtn } from 'src/modules'

import store from 'src/store'

export default {
  name: 'main-layout',
  components: {
    KMain,
    KModal,

    AccountBtn
  },
  computed: {
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

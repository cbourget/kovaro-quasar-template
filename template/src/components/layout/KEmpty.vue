<template>
  <q-layout ref="layout" :page-class="bodyClass">
    <slot></slot>
  </q-layout>
</template>

<script>
import { QLayout } from 'quasar'

import { classObject } from 'kovaro-vue-common'

export default {
  name: 'k-empty',
  components: {
    QLayout
  },
  data () {
    return {
      bodyClass: classObject('layout-empty')
    }
  }
}
</script>

<style></style>

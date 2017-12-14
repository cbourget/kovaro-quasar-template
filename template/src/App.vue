<template>
  <div id="app">
    <app-layout :hasMenu="hasMenu" :menu="menu">
      <router-view />
    </app-layout>
  </div>
</template>

<script>

import { AppLayout } from './layouts'
import menu from './config/menu'

export default {
  name: 'app',
  components: {
    AppLayout
  },
  computed: {
    hasMenu () {
      return ['404'].indexOf(this.$route.name) < 0
    },
    menu () {
      return menu
    }
  }
}
</script>

<style lang="stylus">

</style>

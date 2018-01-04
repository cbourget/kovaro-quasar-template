<template>
  <div id="app">
    <main-layout v-if="layout === 'main'">
      <router-view />
    </main-layout>
    <empty-layout v-else-if="layout === 'empty'">
      <router-view />
    </empty-layout>
  </div>
</template>

<script>

import {
  EmptyLayout,
  MainLayout
} from './modules'

export default {
  name: 'app',
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout () {
      let layout = this.$route.name === undefined ? null : 'main'
      if (['404', 'connect', 'register'].indexOf(this.$route.name) >= 0) {
        layout = 'empty'
      }
      return layout
    }
  }
}
</script>

<style></style>

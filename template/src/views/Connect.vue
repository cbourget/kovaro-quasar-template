<template>
  <auth-panel>
    <connection register="/register" reset-password="/connect"/>
  </auth-panel>
</template>

<script>
import {
  AuthPanel,
  Connection
} from 'src/modules'

import store from 'src/store'

export default {
  name: 'connect',
  components: {
    AuthPanel,
    Connection
  },
  mounted: function () {
    if (this.$route.query.disconnect) {
      this.$store.dispatch('auth:disconnect')
    }
    this.$store.dispatch('auth:startConnection')
  },
  store
}
</script>

<style></style>

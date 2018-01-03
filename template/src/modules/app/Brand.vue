<template>
  <k-brand v-bind="brand"/>
</template>

<script>

import { KBrand } from 'src/components'

import store from 'src/store'

export default {
  name: 'brand',
  components: {
    KBrand
  },
  computed: {
    brand () {
      return this.$store.getters['app:brand']
    }
  },
  store
}
</script>

<style></style>

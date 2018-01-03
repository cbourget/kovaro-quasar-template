<template>
  <p>About Page</p>
</template>

<script>
import {
  AuthenticatedMixin,
  TitleMixin
} from './mixins'

export default {
  data () {
    return {
      title: 'About'
    }
  },
  mixins: [
    AuthenticatedMixin,
    TitleMixin
  ]
}
</script>

<style></style>

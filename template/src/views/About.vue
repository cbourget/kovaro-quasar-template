<template>
  <p>About Page</p>
</template>

<script>
import { TitleMixin } from './mixins'

export default {
  data () {
    return {
      title: 'About'
    }
  },
  mixins: [
    TitleMixin
  ]
}
</script>

<style></style>

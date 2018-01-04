<template>
  <p>Home Page</p>
</template>

<script>
import { TitleMixin } from './mixins'

export default {
  data () {
    return {
      title: null
    }
  },
  mixins: [
    TitleMixin
  ]
}
</script>

<style></style>

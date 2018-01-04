<template>
  <k-empty>
    <slot></slot>
  </k-empty>
</template>

<script>

import { KEmpty } from 'src/components'

export default {
  name: 'empty-layout',
  components: {
    KEmpty
  }
}
</script>

<style></style>

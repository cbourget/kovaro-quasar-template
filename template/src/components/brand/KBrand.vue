<template>
  <div class="brand">
    <div>
      <img :src="logo">
    </div>
  </div>
</template>

<script>

export default {
  name: 'k-brand',
  props: {
    logo: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>

.brand > div {
  display: inline-flex;
  height: 100%;

  img {
    vertical-align: middle;
    width: 100%;
  }
}

</style>

<template>
  <div class="row" v-if="text">
    <div class="divider col-xs-5" />
    <div class="col-xs-2 text-center">
      {{$t(text)}}
    </div>
    <div class="divider col-xs-5" />
  </div>
  <div class="divider" v-else />
</template>

<script>

export default {
  components: {},
  props: {
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~src/themes/app.variables.styl'

  .divider {
    margin: 8px 0;
    height: 1px;
    border: 0;
    background-color: $grey-border;
  }
</style>

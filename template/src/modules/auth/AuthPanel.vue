<template>
  <div class="absolute-center">
    <q-card class="row">
      <brand class="left col"/>
      <div class="right col">
        <slot></slot>
      </div>
    </q-card>
  </div>
</template>

<script>
import { QCard } from 'quasar'
import { Brand } from '../app'

import store from 'src/store'

export default {
  name: 'auth-panel',
  components: {
    QCard,
    Brand
  },
  store
}
</script>

<style lang="stylus" scoped>
  @import '~src/themes/app.variables.styl'

  .absolute-center {
    max-height: 100%;
  }

  .right {
    min-width: 320px;
    height: 332px;
    padding: 16px;
    background-color: alpha($primary, 0.1);
  }

  .left {
    min-width: 230px;
    width: 230px;
    min-height: 332px;
    background-color: alpha($secondary, 0.1);
    padding: 16px;
    text-align: center;
    +media(mobile) {
      min-width: 100%;
      width: 100%;
      min-height: inherit;
      max-height: 180px;
    }
  }

  .q-card {
    margin: 0;
    +media(mobile) {
      height: 100%;
    }
  }

  +media(mobile) {
    .fixed-center {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: inherit;
      -webkit-transform: inherit;
    }
  }
</style>

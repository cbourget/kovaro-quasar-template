<template>
  <a class="account-btn" v-if="user">
    <img :src="getAvatar(user)"/>
    <q-popover ref="popover" anchor="bottom right" self="top right" :fit="false">
      <account-menu :user="user"/>
    </q-popover>
  </a>
  <q-btn
    icon="person"
    flat
    @click="$router.push(connection)"
    v-else-if="connection">
    {{$t('auth.Connect')}}
  </q-btn>
</template>

<script>
import {
  QBtn,
  QPopover
} from 'quasar'

import AccountMenu from './AccountMenu.vue'

import store from 'src/store'

export default {
  name: 'account-btn',
  components: {
    QBtn,
    QPopover,
    AccountMenu
  },
  props: {
    connection: {
      default: null,
      type: String
    }
  },
  computed: {
    user () {
      return this.$store.getters['auth:user']
    }
  },
  methods: {
    getAvatar (user) {
      if (user && user.avatar) {
        return user.avatar
      }
      return '/statics/quasar-logo.png'
    }
  },
  store
}
</script>

<style lang="stylus" scoped>
  @import '~src/themes/app.variables.styl'

  .account-btn {
    border-radius: 50%;
    width: 32px;
    height: 32px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .q-popover {
    margin-top: 10px;
    right: 0;

    +media(mobile) {
      left: 0;
    }
  }
</style>

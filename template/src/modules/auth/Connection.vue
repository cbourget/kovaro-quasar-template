<template>
  <div class="connection">
    <k-input
      helper="auth.Username"
      :data="getData('username')">
    </k-input>

    <k-input
      type="password"
      helper="auth.Password"
      :data="getData('password')">
    </k-input>

    <div class="form-button-group">
      <q-btn
        color="secondary"
        class="text-center full-width"
        @click="connect()">
        {{$t('auth.Connect')}}
      </q-btn>
    </div>

    <div v-if="register">
      <p class="small text-center">
        {{$t('auth.noAccount')}}
        <a :href="register" color="secondary">{{$t('auth.Register')}}</a>
      </p>
    </div>
    <div v-if="resetPassword">
      <p class="small text-center">
        {{$t('auth.forgotPassword')}}
        <a :href="resetPassword" color="secondary">{{$t('auth.getNewPassword')}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

import { KInput, KDivider } from 'src/components'
import store from 'src/store'

export default {
  name: 'connection',
  components: {
    QBtn,
    KInput,
    KDivider
  },
  props: {
    register: {
      default: null,
      type: String
    },
    resetPassword: {
      default: null,
      type: String
    }
  },
  methods: {
    getData (field) {
      return {
        get: () => this.$store.getters['auth:connection'][field],
        set: (data) => {
          this.$store.dispatch('auth:updateConnection', {field, data})
        }
      }
    },
    connect () {
      this.$store.dispatch('auth:connect', this.$authService)
    }
  },
  store
}
</script>

<style scoped lang="stylus">
  a {
    white-space: nowrap;
  }

  .registration > p {
    font-size: 13px;
  }
</style>

<template>
  <div class="registration">
    <k-input
      helper="auth.enterEmail"
      :data="getData('email')">
    </k-input>

    <k-input
      helper="auth.chooseUsername"
      :data="getData('username')">
    </k-input>

    <k-input
      type="password"
      helper="auth.choosePassword"
      :data="getData('password')">
    </k-input>

    <div class="form-button-group">
      <q-btn
        color="secondary"
        class="text-center full-width"
        @click="register()">
        {{$t('auth.Register')}}
      </q-btn>
    </div>

    <div v-if="connect">
      <p class="small text-center">
        {{$t('auth.hasAccount')}}
        <a :href="connect" color="secondary">{{$t('auth.Connect')}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

import { KInput } from 'src/components'
import store from 'src/store'

export default {
  name: 'registration',
  components: {
    QBtn,
    KInput
  },
  props: {
    connect: {
      default: null,
      type: String
    }
  },
  methods: {
    getData (field) {
      return {
        get: () => this.$store.getters['auth:registration'][field],
        set: (data) => {
          this.$store.dispatch('auth:updateRegistration', {field, data})
        }
      }
    },
    register () {
      this.$store.dispatch('auth:register', this.$authService)
    }
  },
  store
}
</script>

<style scoped lang="stylus">
  a {
    white-space: nowrap;
  }

  .connection > p {
    font-size: 13px;
  }
</style>

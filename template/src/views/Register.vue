<template>
  <div>
    <div v-if="registrationComplete">
      <registration-complete />
    </div>
    <auth-panel v-else>
      <registration connect="/connect"/>
    </auth-panel>
  </div>
</template>

<script>
import {
  AuthPanel,
  Registration,
  RegistrationComplete
} from 'src/modules'

import { UnauthenticatedMixin } from './mixins'

import store from 'src/store'

export default {
  name: 'register',
  components: {
    AuthPanel,
    Registration,
    RegistrationComplete
  },
  mixins: [UnauthenticatedMixin],
  computed: {
    registrationComplete () {
      return this.$store.getters['auth:registrationComplete']
    }
  },
  mounted: function () {
    this.$store.dispatch('auth:startRegistration')
  },
  store
}
</script>

<style></style>

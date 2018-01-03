<template>
  <q-card class="account-menu no-shadow no-margin">
    <q-card-main>
      <q-item>
        <q-item-side :avatar="getAvatar(user)" />
        <q-item-main>
          <q-item-tile label>{{user.username}}</q-item-tile>
          <q-item-tile sublabel>{{user.email}}</q-item-tile>
        </q-item-main>
      </q-item>
    </q-card-main>

    <q-card-separator />
    <q-card-actions align="between">
      <q-btn flat small icon="settings">
        {{$t('account.Settings')}}
      </q-btn>
      <q-btn flat small icon="exit_to_app">
        {{$t('auth.Disconnect')}}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {
  QBtn,
  QCard,
  QCardActions,
  QCardMain,
  QCardSeparator,
  QItem,
  QItemMain,
  QItemSide,
  QItemTile
} from 'quasar'

export default {
  name: 'account-menu',
  components: {
    QBtn,
    QCard,
    QCardActions,
    QCardMain,
    QCardSeparator,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar (user) {
      if (user && user.avatar) {
        return user.avatar
      }
      return '/statics/quasar-logo.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~src/themes/app.variables.styl'

  .account-menu {
    border: 1px solid $grey-border;
  }
</style>

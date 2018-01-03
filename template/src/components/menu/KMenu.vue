<template>
  <q-list no-border link inset-delimiter>
    <q-list-header v-if="title">
      {{$t(title)}}
    </q-list-header>

    <template v-for="item in items">
      <k-menu-item v-bind="item" @click="handleItemClick(item)"></k-menu-item>
    </template>
  </q-list>
</template>

<script>
import {
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'

import KMenuItem from './KMenuItem'

export default {
  name: 'k-menu',
  components: {
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QSideLink,

    KMenuItem
  },
  props: {
    title: {
      default: null,
      type: String
    },
    items: {
      default: () => [],
      type: Array
    }
  },
  methods: {
    getRouteByName: function (name) {
      return this.$router.options.routes.find(route => {
        return route.name === name
      })
    },
    handleItemClick: function (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style></style>

<template>
  <q-side-link
    item exact
    class="small"
    :to="getRouteByName(route).path"
    v-if="type === 'link'">
    <q-item-side :icon="icon" />
    <q-item-main :label="$t(label)" />
  </q-side-link>
  <q-item
    item exact
    class="small"
    @click="handleClick()"
    v-else-if="type === 'modal'">
    <q-item-side :icon="icon" />
    <q-item-main :label="$t(label)" />
  </q-item>
  <q-item-separator v-else-if="type === 'separator'"/>
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

export default {
  name: 'k-menu-item',
  components: {
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QSideLink
  },
  props: {
    type: {
      default: null,
      type: String
    },
    name: {
      default: null,
      type: String
    },
    label: {
      default: null,
      type: String
    },
    icon: {
      default: null,
      type: String
    },
    route: {
      default: null,
      type: String
    }
  },
  methods: {
    getRouteByName: function (name) {
      return this.$router.options.routes.find(route => {
        return route.name === name
      })
    },
    handleClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style></style>

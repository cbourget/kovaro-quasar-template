<template>
  <q-layout ref="layout" :left-class="{'bg-grey-2': true}">

    <template v-if="hasMenu">
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Test
        </q-toolbar-title>
      </q-toolbar>

      <div slot="left">
        <q-list no-border link inset-delimiter>
          <q-list-header>My Meals</q-list-header>
          <template v-for="route in routes">
            <q-side-link item :to="route.path" exact>
              <q-item-side :icon="route.icon" />
              <q-item-main :label="route.name" />
            </q-side-link>
          </template>
        </q-list>
      </div>
    </template>

    <div class="content">
      <slot></slot>
    </div>

  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QSideLink,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QSideLink,
    QItemSide,
    QItemMain
  },
  props: {
    hasMenu: {
      default: true,
      type: Boolean
    },
    menu: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style></style>

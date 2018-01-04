<template>
  <q-layout ref="layout"
    :left-class="sidenavClass"
    :header-class="headerClass"
    :page-class="bodyClass">

    <q-toolbar slot="header">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title v-if="headerTitle">
        {{headerTitle}}
      </q-toolbar-title>

      <slot name="buttons"></slot>

    </q-toolbar>

    <k-menu
      v-bind="menu"
      slot="left"
      @click="handleMenuClick($event)">
    </k-menu>

    <div class="layout-padding">
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
  QIcon
} from 'quasar'

import { KMenu } from '../menu'

import { classObject } from 'kovaro-vue-common'

export default {
  name: 'k-main',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,

    KMenu
  },
  props: {
    header: {
      default: () => {
        return {
          class: null,
          appTitle: null,
          pageTitle: null,
          buttons: []
        }
      },
      type: Object
    },
    menu: {
      default: () => {
        return {
          class: null,
          title: null,
          items: []
        }
      },
      type: Object
    },
    sidenav: {
      default: () => {
        return {
          class: null
        }
      },
      type: Object
    }
  },
  computed: {
    headerClass: function () {
      return classObject(this.$props.header.class)
    },
    headerTitle: function () {
      return this.$props.header.pageTitle || this.$props.header.appTitle
    },
    sidenavClass: function () {
      return classObject(this.$props.sidenav.class)
    }
  },
  data () {
    return {
      bodyClass: classObject('layout-main')
    }
  },
  methods: {
    handleMenuClick: function (menuItem) {
      this.$emit('menuclick', menuItem)
    }
  }
}
</script>

<style></style>

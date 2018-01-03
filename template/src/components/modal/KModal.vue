<template>
  <q-modal
    ref="modal"
    @open="handleOpen()"
    @close="handleClose()">

    <q-toolbar :class="header.class">
      <div class="q-toolbar-title">
        {{$t(header.title)}}
      </div>
      <q-btn flat @click="$refs.modal.close()">
        <q-icon name="close" />
      </q-btn>
    </q-toolbar>

    <k-divider />

    <div class="layout-padding">
      <slot></slot>
    </div>

  </q-modal>
</template>

<script>
import {
  QModal,
  QModalLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon
} from 'quasar'

import { KDivider } from '../divider'

export default {
  name: 'k-modal',
  components: {
    QModal,
    QModalLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,

    KDivider
  },
  props: {
    opened: {
      default: false,
      type: Boolean
    },
    header: {
      default: () => {
        return {
          class: null,
          title: null
        }
      },
      type: Object
    }
  },
  methods: {
    open: function () {
      if (this.$refs.modal) {
        this.$refs.modal.open()
      }
    },
    close: function () {
      if (this.$refs.modal) {
        this.$refs.modal.close()
      }
    },
    handleOpen: function () {
      this.$emit('open')
    },
    handleClose: function () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~src/themes/app.variables.styl'

  .divider {
    margin: 0 8px 8px 8px !important;
  }

  .q-toolbar {
    background-color: $white;

    .q-toolbar-title, .q-btn {
      color: $tertiary;
    }
  }
</style>

<template>
  <q-field
    :helper="$t(helper)"
    :error="hasError"
    :error-label="$t(error)">
    <q-input :float-label="$t(label)" :type="type" v-model="value"/>
  </q-field>
</template>

<script>
import {
  QField,
  QInput
} from 'quasar'

export default {
  components: {
    QField,
    QInput
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: undefined
    },
    helper: {
      type: String,
      default: undefined
    },
    data: {
      default: () => {
        return {
          get: () => null,
          set: (data) => {}
        }
      }
    }
  },
  computed: {
    value: {
      get () {
        return this.$props.data.get().value
      },
      set (value) {
        this.$props.data.set({value: value})
      }
    },
    error: function () {
      return this.$props.data.get().errors.join('\n')
    },
    hasError: function () {
      return this.$props.data.get().errors.length > 0
    }
  }
}
</script>

<style></style>

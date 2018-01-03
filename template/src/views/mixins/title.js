import store from 'src/store'

export default {
  created: function () {
    store.dispatch('app:updateHeader', {
      pageTitle: this.title,
      class: this.title ? 'secondary' : null
    })
  }
}

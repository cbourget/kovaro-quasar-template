import store from 'src/store'

export default {
  beforeRouteEnter (to, from, next) {
    const user = store.getters['auth:user']
    if (user === null) {
      next('/register')
    }
    next()
  }
}

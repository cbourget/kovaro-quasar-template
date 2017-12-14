function load (component) {
  return () => import(`@/views/${component}.vue`)
}

export default {
  items: [
    {
      path: '/',
      name: 'home',
      component: load('Home')
    },

    {
      path: '*',
      name: '404',
      component: load('Error404')
    }
  ]
}

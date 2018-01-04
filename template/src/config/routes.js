function load (component) {
  return () => import(`src/${component}.vue`)
}

export default {
  items: [
    {
      path: '/',
      name: 'home',
      component: load('views/Home'),
      meta: {
        permissions: ['authenticated']
      }
    },

    {
      path: '/about',
      name: 'about',
      component: load('views/About'),
      meta: {
        permissions: ['authenticated']
      }
    },

    {
      path: '/connect',
      name: 'connect',
      component: load('views/Connect'),
      meta: {
        permissions: ['unauthenticated']
      }
    },

    {
      path: '/register',
      name: 'register',
      component: load('views/Register'),
      meta: {
        permissions: ['unauthenticated']
      }
    },

    {
      path: '*',
      name: '404',
      component: load('views/Error404')
    }
  ]
}

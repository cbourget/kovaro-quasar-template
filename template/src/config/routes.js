import { load } from '.'

export default {
  items: [
    {
      path: '/',
      name: 'home',
      component: load('views/Home')
    },

    {
      path: '/about',
      name: 'about',
      component: load('views/About')
    },

    {
      path: '/connect',
      name: 'connect',
      component: load('views/Connect')
    },

    {
      path: '/register',
      name: 'register',
      component: load('views/Register')
    },

    {
      path: '*',
      name: '404',
      component: load('views/Error404')
    }
  ]
}

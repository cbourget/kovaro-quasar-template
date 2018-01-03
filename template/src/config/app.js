export default {
  brand: {
    class: null,
    logo: require('../assets/quasar-logo-full.svg')
  },
  header: {
    class: null,
    appTitle: 'My App',
    pageTitle: null
  },
  menu: {
    title: null,
    class: null,
    items: [
      {
        type: 'link',
        route: 'home',
        label: 'menu.Home',
        icon: 'home'
      },
      {
        type: 'link',
        route: 'about',
        label: 'menu.About',
        icon: 'info'
      },
      {
        type: 'separator'
      },
      {
        type: 'modal',
        name: 'settings',
        label: 'menu.Settings',
        icon: 'settings',
        content: {
          component: 'Settings',
          props: {}
        }
      }
    ]
  },
  sidenav: {
    class: null
  }
}

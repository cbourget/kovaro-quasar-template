function load (component) {
  return () => import(`src/${component}.vue`)
}

export {
  load
}

import { mount } from 'vue-test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Home)
 
  it('renders the correct content', () => {
    expect(wrapper.html()).toContain('<p>Home Page</p>')
  })
})

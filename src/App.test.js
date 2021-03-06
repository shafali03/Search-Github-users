import React from 'react'
import { shallow } from 'enzyme'
import App from './App'


test('should render the title', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toContain('Search a Github User')
})
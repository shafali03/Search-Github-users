import React, { mount } from 'react'
import { shallow } from 'enzyme'
import Form from './Form'


describe('form content', () => {

  test('should render without error', () => {
    const wrapper = shallow(<Form />)
    const form = wrapper.find("[data-test='component-search-box']")
    expect(form.length).toBe(1)
  })

  test('should render input field', () => {
    const wrapper = shallow(<Form />)
    const inputField = wrapper.find("[data-test='input-value']")
    expect(inputField.length).toBe(1)
  })

  test('should have a button', () => {
    const wrapper = shallow(<Form />)
    const button = wrapper.find("[data-test='button']")
    expect(button.length).toBe(1)
  })
})





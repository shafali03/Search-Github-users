import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('display card', () => {

  test('should render card without error', () => {
    const wrapper = shallow(<Card />)
    const card = wrapper.find("[data-test='card-component']")
    expect(card.length).toBe(1)
  })
})
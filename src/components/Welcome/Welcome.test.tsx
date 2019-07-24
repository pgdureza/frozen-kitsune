import React from 'react'

import { shallow } from 'enzyme'
import Welcome from '.'

describe('Welcome component', () => {
  const wrapper = shallow(<Welcome />)
  it('renders without errors', () => {
    expect(wrapper.type()).not.toBeNull()
  })
})

import React from 'react'

import { shallow } from 'enzyme'
import LayoutFooter from '.'

describe('Footer component', () => {
  const wrapper = shallow(<LayoutFooter />)
  it('displays the company information and copyright', () => {
    expect(wrapper.text()).toContain('Frozen Kitsune')
  })
})

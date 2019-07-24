import React from 'react'

import { shallow } from 'enzyme'
import { LayoutMain, LayoutSidebar } from '..'
import VisitorList from '../../Visitor/List'
import LayoutFooter from '../Footer'

describe('Main component', () => {
  const wrapper = shallow(<LayoutMain>tesst </LayoutMain>)
  it('contains a sidebar', () => {
    expect(wrapper.find(LayoutSidebar).length).toBe(1)
  })
  it('contains footer', () => {
    expect(wrapper.find(LayoutFooter).length).toBe(1)
  })
})

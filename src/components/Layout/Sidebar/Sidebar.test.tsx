import React from 'react'

import { Drawer, List } from '@material-ui/core'
import { shallow } from 'enzyme'
import { LayoutSidebar } from '..'
import { LayoutSidebarContent } from './Sidebar'

describe('Sidebar component', () => {
  const wrapper = shallow(<LayoutSidebar />)

  describe('in desktop', () => {
    it('contains a permenent drawer with sidebar content', () => {
      const permanentDrawer = wrapper.find(Drawer).find({ variant: 'permanent' })
      expect(permanentDrawer.length).toBe(1)
      expect(permanentDrawer.find(LayoutSidebarContent).length).toBe(1)
    })
  })
  describe('in mobile', () => {
    it('contains a temporary drawer with sidebar content', () => {
      const temporaryDrawer = wrapper.find(Drawer).find({ variant: 'temporary' })
      expect(temporaryDrawer.length).toBe(1)
      expect(temporaryDrawer.find(LayoutSidebarContent).length).toBe(1)
    })
  })
})

describe('LayoutSidebarContent component', () => {
  const wrapper = shallow(<LayoutSidebarContent />)
  it('displays a list', () => {
    expect(wrapper.find(List).length).toBe(1)
  })
})

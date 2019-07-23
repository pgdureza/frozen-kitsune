import React from 'react'

import { Drawer, IconButton, List } from '@material-ui/core'
import { shallow } from 'enzyme'
import { LayoutSidebar } from '..'
import { LayoutSidebarContent } from './Sidebar'

afterEach(jest.clearAllMocks)

describe('Sidebar component', () => {
  const setMobileOpen = jest.fn()
  jest
    .spyOn(React, 'useState')
    .mockImplementation(((initial: boolean) => [initial, setMobileOpen]) as any)
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
    describe('when clicking on IconButton', () => {
      it('toggles open/close state of drawer ', () => {
        expect(setMobileOpen).not.toHaveBeenCalled()
        wrapper.find(IconButton).simulate('click')
        expect(setMobileOpen).toHaveBeenCalledWith(true)
      })
    })
  })
})

describe('LayoutSidebarContent component', () => {
  const wrapper = shallow(<LayoutSidebarContent />)
  it('displays a list', () => {
    expect(wrapper.find(List).length).toBe(1)
  })
})

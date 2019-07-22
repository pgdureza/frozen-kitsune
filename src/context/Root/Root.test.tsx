import React from 'react'

import { shallow } from 'enzyme'
import { RootProvider, useRootContext } from '.'
import { RootContext } from './Root'

const defaultProps = {
  sort: ['sort'],
  filters: ['filters'],
}

describe('RootProvider', () => {
  const wrapper = shallow(<RootProvider {...defaultProps} />)
  it('returns a RootContext Provider', () => {
    expect(wrapper.type()).toBe(RootContext.Provider)
  })
  it('has a prop `value` that holds the sort and filters props passed', () => {
    expect(wrapper.prop('value').sort).toBe(defaultProps.sort)
    expect(wrapper.prop('value').filters).toBe(defaultProps.filters)
  })
})

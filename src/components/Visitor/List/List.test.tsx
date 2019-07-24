import React from 'react'

import { Table } from '@material-ui/core'
import { format } from 'date-fns'
import { shallow } from 'enzyme'
import { Query } from 'react-apollo'
import VisitorList from '.'
import hooks from '../../../hooks'

describe('Visitor List component', () => {
  it('queries using default values when location.search is not provided', () => {
    jest.spyOn(hooks, 'useReactRouter').mockImplementation(
      () =>
        ({
          location: {
            search: '?page=2',
            pathname: '/',
          },
          match: {
            params: {},
          },
        } as any),
    )
    const wrapper = shallow(<VisitorList />)
    const variables = wrapper.find(Query).prop('variables')
    expect(variables.page).toEqual(2)
    expect(variables.sort).toEqual('date')
    expect(variables.order).toEqual('desc')
  })

  it('queries using default values when location.search is not provided', () => {
    jest.spyOn(hooks, 'useReactRouter').mockImplementation(
      () =>
        ({
          location: {
            search: '?page=4&sort=date&order=desc',
            pathname: '/',
          },
          match: {
            params: {},
          },
        } as any),
    )
    const wrapper = shallow(<VisitorList />)
    const variables = wrapper.find(Query).prop('variables')
    expect(variables.page).toEqual(4)
    expect(variables.sort).toEqual('date')
    expect(variables.order).toEqual('desc')
  })
})

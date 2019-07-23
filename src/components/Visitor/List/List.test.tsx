import React from 'react'

import { Table } from '@material-ui/core'
import { format } from 'date-fns'
import { shallow } from 'enzyme'
import { Query } from 'react-apollo'
import VisitorList from '.'
import { getVisitors } from '../../../api/queries'
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
        } as any),
    )
    const wrapper = shallow(<VisitorList />)
    expect(wrapper.find(Query).prop('query')).toEqual(
      getVisitors({ page: 2, date: format(new Date(), 'YYYY-MM-DD'), sort: 'date', order: 'desc' }),
    )
  })

  it('queries using default values when location.search is not provided', () => {
    jest.spyOn(hooks, 'useReactRouter').mockImplementation(
      () =>
        ({
          location: {
            search: '?page=4&sort=date&order=desc',
            pathname: '/',
          },
        } as any),
    )
    const wrapper = shallow(<VisitorList />)
    expect(wrapper.find(Query).prop('query')).toEqual(
      getVisitors({
        page: 4,
        date: format(new Date(), 'YYYY-MM-DD'),
        sort: 'date',
        order: 'desc',
      }),
    )
  })
})

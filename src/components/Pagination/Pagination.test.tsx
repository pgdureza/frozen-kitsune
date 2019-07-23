import React from 'react'

import { NavigateBeforeRounded, NavigateNextRounded } from '@material-ui/icons'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import Pagination from '.'
import hooks from '../../hooks'

const defaultProps = {
  count: 5,
  total: 100,
  next: 3,
  previous: 1,
}

describe('Pagination component', () => {
  jest.spyOn(hooks, 'useReactRouter').mockImplementationOnce(
    () =>
      ({
        location: {
          search: '?page=2',
          pathname: '/',
        },
      } as any),
  )
  const wrapper = shallow(<Pagination {...defaultProps} />)
  it('displays the current count and total entries', () => {
    expect(wrapper.text()).toContain('Showing 5 out of 100')
  })
  it('displays the next and previous button', () => {
    expect(wrapper.find(Link).length).toBe(2)
    expect(wrapper.find(NavigateNextRounded).length).toBe(1)
    expect(wrapper.find(NavigateBeforeRounded).length).toBe(1)
  })
  it('has a link to the previous page', () => {
    expect(
      wrapper
        .find(Link)
        .at(0)
        .prop('to'),
    ).toEqual({ pathname: '/', search: 'page=1' })
  })
  it('has a link to the next page', () => {
    expect(
      wrapper
        .find(Link)
        .at(1)
        .prop('to'),
    ).toEqual({ pathname: '/', search: 'page=3' })
  })
})

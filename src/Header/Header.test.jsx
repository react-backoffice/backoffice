import React from 'react'
import { shallow } from 'enzyme'

import Header from '.'

it('renders correctly', () => {
  const tree = shallow((
    <Header
      isOpen
      title="Header"
      isFixed
      isCookieInfoOpen
      onDrawerOpen={() => {}}
      onClick={() => { }}
    />
  ))

  expect(tree).toMatchSnapshot()
})

it('renders correctly with closed', () => {
  const tree = shallow((
    <Header
      title="Header"
      isFixed={false}
      isCookieInfoOpen={false}
      onDrawerOpen={() => { }}
      onClick={() => { }}
    />
  ))

  expect(tree).toMatchSnapshot()
})

import React from 'react'
import { mount } from 'enzyme'

import Header from './'

it('renders correctly', () => {
  const tree = mount((
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
  const tree = mount((
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

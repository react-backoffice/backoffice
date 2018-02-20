import React from 'react'
import renderer from 'react-test-renderer'

import Header from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<Header
      open
      title="Header"
      fixed
      cookieInfoOpen
      handleDrawerOpen={() => {}}
      onClick={() => { }}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with closed', () => {
  const tree = renderer
    .create(<Header
      title="Header"
      handleDrawerOpen={() => { }}
      onClick={() => { }}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

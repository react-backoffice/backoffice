import React from 'react'
import renderer from 'react-test-renderer'

import menuData from '../../__tests__/data/menu'

import Drawer from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<Drawer
      open
      data={menuData}
      handleDrawerClose={() => {}}
      redirectTo={() => {}}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

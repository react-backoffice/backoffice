import React from 'react'
import renderer from 'react-test-renderer'

import Drawer from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<Drawer
      open
      data={[]}
      handleDrawerClose={() => {}}
      redirectTo={() => {}}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

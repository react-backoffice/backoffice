import React from 'react'
import { shallow } from 'enzyme'

import menuData from '../tests/data/menu'

import Drawer from '.'

it('renders correctly', () => {
  const tree = shallow(<Drawer
    isOpen
    data={menuData}
    onClose={() => {}}
    redirectTo={() => {}}
  />)

  expect(tree).toMatchSnapshot()
})

import React from 'react'
import { mount } from 'enzyme'

import menuData from '../../__tests__/data/menu'

import Drawer from './'

it('renders correctly', () => {
  const tree = mount(<Drawer
    isOpen
    data={menuData}
    onClose={() => {}}
    redirectTo={() => {}}
  />)

  expect(tree).toMatchSnapshot()
})

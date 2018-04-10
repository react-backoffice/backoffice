import React from 'react'
import { mount } from 'enzyme'

import AddButton from './'

it('renders correctly', () => {
  const tree = mount(<AddButton onClick={() => {}} />)

  expect(tree).toMatchSnapshot()
})

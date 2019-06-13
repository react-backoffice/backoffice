import React from 'react'
import { shallow } from 'enzyme'

import AddButton from '.'

it('renders correctly', () => {
  const tree = shallow(<AddButton onClick={() => {}} />)

  expect(tree).toMatchSnapshot()
})

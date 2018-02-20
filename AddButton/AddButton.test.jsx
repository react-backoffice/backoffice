import React from 'react'
import renderer from 'react-test-renderer'

import AddButton from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<AddButton handleClick={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

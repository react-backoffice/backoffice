import React from 'react'
import renderer from 'react-test-renderer'

import Confirm from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<Confirm
      title="Title"
      description="Desc"
      onConfirm={() => { }}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly opened', () => {
  const tree = renderer
    .create(<Confirm
      open
      title="Title"
      description="Desc"
      onConfirm={() => { }}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'

import Icon from 'material-ui-icons/AccessAlarm'

import MenuItem from './MenuItem'

it('renders correctly', () => {
  const tree = renderer
    .create(<MenuItem
      title="Title"
      url="/"
      redirectTo={() => {}}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with icon', () => {
  const tree = renderer
    .create(<MenuItem
      title="Title"
      url="/"
      redirectTo={() => { }}
      icon={Icon}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly disabled', () => {
  const tree = renderer
    .create(<MenuItem
      title="Title"
      url="/"
      redirectTo={() => {}}
      disabled
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

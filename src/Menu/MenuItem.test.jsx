import React from 'react'
import { mount } from 'enzyme'

import Icon from '@material-ui/icons/AccessAlarm'

import MenuItem from './MenuItem'

it('renders correctly', () => {
  const tree = mount(<MenuItem
    title="Title"
    url="/"
    redirectTo={() => {}}
  />)

  expect(tree).toMatchSnapshot()
})

it('renders correctly with icon', () => {
  const tree = mount(<MenuItem
    title="Title"
    url="/"
    redirectTo={() => { }}
    icon={Icon}
  />)

  expect(tree).toMatchSnapshot()
})

it('renders correctly disabled', () => {
  const tree = mount(<MenuItem
    title="Title"
    url="/"
    redirectTo={() => {}}
    isDisabled
  />)

  expect(tree).toMatchSnapshot()
})

import React from 'react'
import { mount } from 'enzyme'

import DashboardGroup from './DashboardGroup'

it('renders correctly', () => {
  const tree = mount(<DashboardGroup
    title="Title"
    cards={[{
      title: 'title',
      description: 'desc',
    }]}
    onClick={() => {}}
  />)

  expect(tree).toMatchSnapshot()
})

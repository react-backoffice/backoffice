import React from 'react'
import { shallow } from 'enzyme'

import DashboardGroup from './DashboardGroup'

it('renders correctly', () => {
  const tree = shallow(<DashboardGroup
    title="Title"
    cards={[{
      title: 'title',
      description: 'desc',
    }]}
    onClick={() => {}}
  />)

  expect(tree).toMatchSnapshot()
})

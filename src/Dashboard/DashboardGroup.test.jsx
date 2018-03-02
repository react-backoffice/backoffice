import React from 'react'
import renderer from 'react-test-renderer'

import DashboardGroup from './DashboardGroup'

it('renders correctly', () => {
  const tree = renderer
    .create(<DashboardGroup
      title="Title"
      cards={[{
        title: 'title',
        description: 'desc',
      }]}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

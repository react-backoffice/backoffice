import React from 'react'
import renderer from 'react-test-renderer'

import DashboardCard from './DashboardCard'

it('renders correctly', () => {
  const tree = renderer
    .create(<DashboardCard
      title="Title"
      description="desc"
      handleClick={() => { }}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})


it('renders disabled', () => {
  const tree = renderer
    .create(<DashboardCard
      title="Title"
      description="desc"
      handleClick={() => { }}
      isDisabled
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

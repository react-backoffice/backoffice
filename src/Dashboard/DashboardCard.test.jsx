import React from 'react'
import { mount } from 'enzyme'

import DashboardCard from './DashboardCard'

it('renders correctly', () => {
  const tree = mount(<DashboardCard
    title="Title"
    description="desc"
    handleClick={() => { }}
  />)

  expect(tree).toMatchSnapshot()
})


it('renders disabled', () => {
  const tree = mount((
    <DashboardCard
      title="Title"
      description="desc"
      handleClick={() => { }}
      isDisabled
    />
  ))


  expect(tree).toMatchSnapshot()
})

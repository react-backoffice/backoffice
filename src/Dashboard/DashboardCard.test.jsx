import React from 'react'
import { shallow } from 'enzyme'

import DashboardCard from './DashboardCard'

it('renders correctly', () => {
  const tree = shallow(<DashboardCard
    title="Title"
    description="desc"
    handleClick={() => { }}
  />)

  expect(tree).toMatchSnapshot()
})


it('renders disabled', () => {
  const tree = shallow((
    <DashboardCard
      title="Title"
      description="desc"
      handleClick={() => { }}
      isDisabled
    />
  ))


  expect(tree).toMatchSnapshot()
})

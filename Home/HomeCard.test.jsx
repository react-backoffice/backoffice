import React from 'react'
import renderer from 'react-test-renderer'

import HomeCard from './HomeCard'

it('renders correctly', () => {
  const tree = renderer
    .create(<HomeCard
      title="Title"
      description="desc"
      handleClick={() => {}}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

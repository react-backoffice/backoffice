import React from 'react'
import renderer from 'react-test-renderer'

import HomeGroup from './HomeGroup'

it('renders correctly', () => {
  const tree = renderer
    .create(<HomeGroup
      title="Title"
      cards={[{
        title: 'title',
        description: 'desc',
      }]}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'

import Tabs from './'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Tabs
        data={[{
          title: 'Title',
          content: (
            <p>Content</p>
          ),
        }]}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

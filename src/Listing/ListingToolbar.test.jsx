import React from 'react'
import renderer from 'react-test-renderer'

import ListingToolbar from './ListingToolbar'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <ListingToolbar
        title=""
        numSelected={0}
        onFilter={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

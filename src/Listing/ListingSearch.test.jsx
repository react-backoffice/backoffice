import React from 'react'
import renderer from 'react-test-renderer'

import ListingSearch from './ListingSearch'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <ListingSearch
        onClick={() => { }}
        onFilter={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when open', () => {
  const tree = renderer
    .create((
      <ListingSearch
        open
        onClick={() => { }}
        onFilter={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

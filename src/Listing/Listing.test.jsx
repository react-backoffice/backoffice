import React from 'react'
import renderer from 'react-test-renderer'

import Listing from './'

import headers from '../../__tests__/data/listing_headers'
import data from '../../__tests__/data/listing_data'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        handleClick={() => { }}
        onUpdateSelection={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with Loader', () => {
  const tree = renderer
    .create((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        handleClick={() => { }}
        hasLoader
        onUpdateSelection={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'
import { Table } from 'material-ui'

import ListingLoader from './ListingLoader'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Table>
        <ListingLoader cols={1} />
      </Table>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

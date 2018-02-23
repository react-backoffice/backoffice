import React from 'react'
import renderer from 'react-test-renderer'
import { Table } from 'material-ui'

import ListingHeader from './ListingHeader'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Table>
        <ListingHeader
          headers={[{
            id: 'name',
            label: 'Name',
          }]}
          numSelected={0}
          onRequestSort={() => {}}
          onSelectAllClick={() => { }}
          order="asc"
          orderBy="name"
          rowCount={0}
        />
      </Table>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

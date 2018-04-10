import React from 'react'
import { mount } from 'enzyme'

import { Table } from 'material-ui'

import ListingHeader from './ListingHeader'

it('renders correctly', () => {
  const tree = mount((
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

  expect(tree).toMatchSnapshot()
})

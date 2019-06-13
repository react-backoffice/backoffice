import React from 'react'
import { shallow } from 'enzyme'

import { Table } from '@material-ui/core'

import ListingHeader from './ListingHeader'

it('renders correctly', () => {
  const tree = shallow((
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

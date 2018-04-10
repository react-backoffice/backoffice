import React from 'react'
import { mount } from 'enzyme'
import { Table } from 'material-ui'

import ListingLoader from './ListingLoader'

it('renders correctly', () => {
  const tree = mount((
    <Table>
      <ListingLoader cols={1} />
    </Table>
  ))

  expect(tree).toMatchSnapshot()
})

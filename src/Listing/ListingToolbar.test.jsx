import React from 'react'
import { mount } from 'enzyme'

import ListingToolbar from './ListingToolbar'

it('renders correctly', () => {
  const tree = mount((
    <ListingToolbar
      title=""
      numSelected={0}
      onFilter={() => { }}
    />
  ))

  expect(tree).toMatchSnapshot()
})

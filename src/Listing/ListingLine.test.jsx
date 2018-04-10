import React from 'react'
import { mount } from 'enzyme'
import { Table } from 'material-ui'

import ListingLine from './ListingLine'

import headers from '../../__tests__/data/listing_headers'

const twoHeaders = headers.slice(0, 2)

it('renders correctly', () => {
  const tree = mount((
    <Table>
      <ListingLine
        headers={twoHeaders}
        data={{
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
        }}
        onClick={() => { }}
        handleKeyDown={() => { }}
        handleCheckClick={() => { }}
        isSelected={false}
      />
    </Table>
  ))

  expect(tree).toMatchSnapshot()
})

it('renders selected', () => {
  const tree = mount((
    <Table>
      <ListingLine
        headers={twoHeaders}
        data={{
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
        }}
        onClick={() => { }}
        handleKeyDown={() => { }}
        handleCheckClick={() => { }}
        isSelected
      />
    </Table>
  ))

  expect(tree).toMatchSnapshot()
})

it('renders highlighted', () => {
  const tree = mount((
    <Table>
      <ListingLine
        headers={twoHeaders}
        data={{
          id: 1,
          name: {
            value: 'Leanne Graham',
            highlight: 'Lea',
          },
          username: {
            value: 'Leanne Graham',
            highlight: 'Bret',
          },
        }}
        onClick={() => { }}
        handleKeyDown={() => { }}
        handleCheckClick={() => { }}
        isSelected
      />
    </Table>
  ))

  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'
import { Table } from 'material-ui'

import ListingLine from './ListingLine'

import headers from '../../__tests__/data/listing_headers'

const twoHeaders = headers.slice(0, 2)

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Table>
        <ListingLine
          headers={twoHeaders}
          data={{
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
          }}
          handleClick={() => { }}
          handleKeyDown={() => { }}
          handleCheckClick={() => { }}
          isSelected={false}
        />
      </Table>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders selected', () => {
  const tree = renderer
    .create((
      <Table>
        <ListingLine
          headers={twoHeaders}
          data={{
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
          }}
          handleClick={() => { }}
          handleKeyDown={() => { }}
          handleCheckClick={() => { }}
          isSelected
        />
      </Table>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders highlighted', () => {
  const tree = renderer
    .create((
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
          handleClick={() => { }}
          handleKeyDown={() => { }}
          handleCheckClick={() => { }}
          isSelected
        />
      </Table>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

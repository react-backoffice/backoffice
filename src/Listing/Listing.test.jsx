import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Listing from './'

import headers from '../../__tests__/data/listing_headers'
import data from '../../__tests__/data/listing_data'

Enzyme.configure({ adapter: new Adapter() })

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

it('changes props', () => {
  const listing = shallow((
    <Listing
      title="Christmas Time"
      data={data}
      headers={headers}
      orderBy="username"
      handleClick={() => { }}
      onUpdateSelection={() => { }}
    />
  ))

  listing.setProps({
    orderBy: 'name',
    data: null,
  })
})

it('does a new sorting', () => {
  const listing = shallow((
    <Listing
      title="Christmas Time"
      data={data}
      headers={headers}
      orderBy="username"
      handleClick={() => { }}
      onUpdateSelection={() => { }}
    />
  ))

  expect(listing.state().data[0].username).toBe('Antonette')

  listing.instance().handleRequestSort({}, 'name')
  expect(listing.state().data[0].username).toBe('Karianne')

  listing.instance().handleRequestSort({}, 'name')
  expect(listing.state().data[0].username).toBe('Kamren')
})

it('handles click on a checkbox', () => {
  const onUpdateSelection = jest.fn()
  const listing = shallow((
    <Listing
      title="Christmas Time"
      data={data}
      headers={headers}
      orderBy="username"
      handleClick={() => { }}
      onUpdateSelection={onUpdateSelection}
    />
  ))

  listing.instance().handleCheckClick('foo')
  expect(listing.state().selected).toEqual(['foo'])
  expect(onUpdateSelection).toHaveBeenCalled()

  listing.instance().handleCheckClick('bar')
  expect(listing.state().selected).toEqual(['foo', 'bar'])

  listing.instance().handleCheckClick('baz')
  expect(listing.state().selected).toEqual(['foo', 'bar', 'baz'])

  listing.instance().handleCheckClick('bar')
  expect(listing.state().selected).toEqual(['foo', 'baz'])

  listing.instance().handleCheckClick('baz')
  expect(listing.state().selected).toEqual(['foo'])

  listing.instance().handleCheckClick('foo')
  expect(listing.state().selected).toEqual([])
})

it('allows to filter', () => {
  const listing = shallow((
    <Listing
      title="Christmas Time"
      data={data}
      headers={headers}
      orderBy="username"
      handleClick={() => { }}
    />
  ))

  const { length } = listing.state().data

  listing.instance().handleFilter('')

  expect(listing.state().data.length).toEqual(length)

  listing.instance().handleFilter('f0ooasdnajsbhdhuq2871dasd')

  expect(listing.state().data.length).toEqual(0)
})

import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  Checkbox,
  TablePagination,
  IconButton,
} from '@material-ui/core'

import Listing from './'

import headers from '../../__tests__/data/listing_headers'
import data from '../../__tests__/data/listing_data'
import ListingHeader from './ListingHeader'

Enzyme.configure({ adapter: new Adapter() })

describe('Listing', () => {
  it('renders correctly', () => {
    const tree = mount((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
        onUpdateSelection={() => { }}
      />
    ))

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with Loader', () => {
    const tree = mount((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
        hasLoader
        onUpdateSelection={() => { }}
      />
    ))

    expect(tree).toMatchSnapshot()
  })

  it('changes props', () => {
    const origSortData = Listing.prototype.sortData
    Listing.prototype.sortData = jest.fn()

    const listing = shallow((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
        onUpdateSelection={() => { }}
      />
    ))

    listing.setProps({
      orderBy: 'name',
      data: null,
    })

    expect(Listing.prototype.sortData).toHaveBeenCalled()
    Listing.prototype.sortData = origSortData
  })

  it('does a new sorting', () => {
    const listing = shallow((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
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
        onClick={() => { }}
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
        onClick={() => { }}
      />
    ))

    const { length } = listing.state().data

    listing.instance().handleFilter('')

    expect(listing.state().data.length).toEqual(length)

    listing.instance().handleFilter('f0ooasdnajsbhdhuq2871dasd')

    expect(listing.state().data.length).toEqual(0)
  })

  it('allows to filter even if there are empty filters', () => {
    data[0].name = null

    const listing = shallow((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
      />
    ))

    const { length } = listing.state().data

    listing.instance().handleFilter('')

    expect(listing.state().data.length).toEqual(length)

    listing.instance().handleFilter('f0ooasdnajsbhdhuq2871dasd')

    expect(listing.state().data.length).toEqual(0)
  })

  it('selects all elements when checkbox is clicked', () => {
    const listing = mount((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
      />
    ))

    listing.find(ListingHeader).find(Checkbox).props().onChange({}, true)

    expect(listing.state().selected.length).toBe(data.length)
  })

  it('deselects all elements when checkbox is unset', () => {
    const listing = mount((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
      />
    ))

    listing.find(ListingHeader).find(Checkbox).props().onChange({}, false)

    expect(listing.state().selected.length).toBe(0)
  })

  it('handles changing the no of rows per age', () => {
    const listing = mount((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
      />
    ))

    listing.find(TablePagination).props().onChangeRowsPerPage({
      target: {
        value: 100,
      },
    })

    expect(listing.state().rowsPerPage).toBe(100)
  })

  it('handles changing the page', () => {
    window.scrollTo = () => {}

    const listing = mount((
      <Listing
        title="Christmas Time"
        data={data}
        headers={headers}
        orderBy="username"
        onClick={() => { }}
      />
    ))

    listing.find(TablePagination).find(IconButton).last().simulate('click')

    expect(listing.state().page).toBe(1)
  })
})

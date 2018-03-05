import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import IconButton from 'material-ui/IconButton/IconButton'
import ListingSearch from './ListingSearch'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const tree = renderer
    .create((
      <ListingSearch
        onClick={() => { }}
        onFilter={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when open', () => {
  const tree = renderer
    .create((
      <ListingSearch
        open
        onClick={() => { }}
        onFilter={() => { }}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('opens if click is triggered', () => {
  const listingSearch = mount((
    <ListingSearch
      open
      onClick={() => { }}
      onFilter={() => { }}
    />
  ))

  expect(listingSearch.instance().state.open).toEqual(false)

  listingSearch.find(IconButton).simulate('click')

  expect(listingSearch.instance().state.open).toEqual(true)
})

it('filters if open and value changes', () => {
  const onFilter = jest.fn()
  const listingSearch = mount((
    <ListingSearch
      open
      onClick={() => { }}
      onFilter={onFilter}
    />
  ))

  listingSearch.find('input').simulate('change', { value: 'a' })

  expect(onFilter).toHaveBeenCalled()
})

it('does not filter if not open and value changes', () => {
  const onFilter = jest.fn()
  const listingSearch = mount((
    <ListingSearch
      open
      onClick={() => { }}
      onFilter={onFilter}
    />
  ))

  expect(listingSearch.instance().state.open).toEqual(false)
  listingSearch.find(IconButton).simulate('click')

  expect(listingSearch.instance().state.open).toEqual(true)

  listingSearch.find('input').simulate('change', { value: 'a' })

  expect(onFilter).toHaveBeenCalled()
})

it('focuses search field on click', () => {
  const mockObject = {
    focus: jest.fn(),
  }

  const listingSearch = mount((
    <ListingSearch
      onClick={() => { }}
      onFilter={() => {}}
    />
  ))

  listingSearch.instance().searchRef = mockObject

  listingSearch.find(IconButton).simulate('click')

  expect(listingSearch.state().open).toBe(true)

  expect(mockObject.focus).toHaveBeenCalled()
})

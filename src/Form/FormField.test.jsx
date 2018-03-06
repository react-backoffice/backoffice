import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ListItem, Chip } from 'material-ui'

import FormField from './FormField'
import FormFieldInput from './FormFieldInput'

Enzyme.configure({ adapter: new Adapter() })

describe('Form Field', () => {
  it('handles change', () => {
    const handleChange = jest.fn()
    const field = mount((
      <FormField
        id="1"
        title="Foo"
        type="text"
        validators={['url']}
        required
        handleChange={handleChange}
      />
    ))

    field.find('input').simulate('change', { value: 'a' })

    expect(handleChange).toHaveBeenCalled()
  })

  it('renders non-visible', () => {
    const field = mount((
      <FormField
        id="2"
        title="Foo"
        type="text"
        value="http://google.de/"
        validators={['url']}
        required
        handleChange={() => { }}
        isVisible={false}
        width="small"
      />
    ))
    expect(field.find(FormFieldInput).props().classNames.join(' '))
      .toEqual(expect.stringMatching(/hidden/))
  })

  it('renders calls beforeSubmit function, handles number', () => {
    const beforeSubmit = jest.fn()
    const field = mount((
      <FormField
        id="3"
        title="Foo"
        value="1"
        type="number"
        handleChange={() => { }}
        beforeSubmit={beforeSubmit}
        width="mid"
      />
    ))

    field.find('input').simulate('change', { value: 1 })

    expect(beforeSubmit).toHaveBeenCalled()
  })

  it('handles list', () => {
    const field = mount((
      <FormField
        id="4"
        title="Foo"
        type="list"
        handleChange={() => { }}
      />
    ))

    expect(field.state().listItems).toEqual([])

    field.find('input').simulate('change', { target: { value: 'foo' } })
    field.find('input').simulate('keyPress', { which: 13 })

    expect(field.state().listItems).toEqual([{ title: 'foo' }])
  })

  it('handles list with allowed values', () => {
    const field = mount((
      <FormField
        id="5"
        title="Foo"
        type="list"
        handleChange={() => { }}
        completeFrom={['foo']}
      />
    ))

    expect(field.state().listItems).toEqual([])

    field.find('input').simulate('change', { target: { value: '_' } })
    field.find('input').simulate('keyPress', { which: 13 })

    expect(field.state().listItems).toEqual([])

    field.find('input').simulate('change', { target: { value: 'foo' } })
    field.find(ListItem).at(0).simulate('click')

    expect(field.state().listItems[0].title).toEqual('foo')
  })

  it('handles list delete', () => {
    const field = mount((
      <FormField
        id="5a"
        title="Foo"
        type="list"
        handleChange={() => { }}
        completeFrom={[{
          title: 'foo',
          tooltip: 'bar',
        }]}
      />
    ))

    field.find('input').simulate('change', { target: { value: 'foo' } })
    field.find(ListItem).at(0).simulate('click')

    expect(field.state().listItems[0].title).toEqual('foo')
    field.find(Chip).at(0).find('svg').simulate('click')
  })

  it('renders list item via function', () => {
    const renderElement = jest.fn()
    const field = mount((
      <FormField
        id="5b"
        title="Foo"
        type="list"
        handleChange={() => { }}
        renderElement={renderElement}
      />
    ))

    field.find('input').simulate('change', { target: { value: 'foo' } })
    field.find('input').simulate('keyPress', { which: 13 })

    expect(renderElement).toHaveBeenCalled()
  })

  it('does not render if there is no option', () => {
    const field = mount((
      <FormField
        id="5b"
        title="Foo"
        type="list"
        handleChange={() => { }}
      />
    ))

    field.setState({
      listItems: [null],
    })

    expect(field.find(Chip).length).toEqual(0)
  })

  it('handles datetime field', () => {
    const field = mount((
      <FormField
        id="6"
        title="Foo"
        type="datetime"
        value={+new Date()}
        handleChange={() => { }}
      />
    ))
    const newDate = +new Date()

    field.instance().handleChange('6')({
      _isAMomentObject: true,
      valueOf: () => newDate,
    })

    expect(field.state().value).toEqual(newDate)
  })

  it('handles date field', () => {
    const field = mount((
      <FormField
        id="6"
        title="Foo"
        type="date"
        value={+new Date()}
        handleChange={() => { }}
      />
    ))
    const newDate = +new Date()

    field.instance().handleChange('6')({
      _isAMomentObject: true,
      valueOf: () => newDate,
    })

    expect(field.state().value).toEqual(newDate)
  })

  it('handles time field', () => {
    const field = mount((
      <FormField
        id="6"
        title="Foo"
        type="time"
        value={+new Date()}
        handleChange={() => { }}
      />
    ))
    const newDate = +new Date()

    field.instance().handleChange('6')({
      _isAMomentObject: true,
      valueOf: () => newDate,
    })

    expect(field.state().value).toEqual(newDate)
  })
})

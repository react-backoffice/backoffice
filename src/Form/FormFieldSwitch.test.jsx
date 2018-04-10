import React from 'react'
import { mount } from 'enzyme'

import FormFieldSwitch from './FormFieldSwitch'

it('renders correctly', () => {
  const tree = mount((
    <FormFieldSwitch
      id="switch"
      title="Title"
      handleChange={() => () => {}}
    />
  ))

  expect(tree).toMatchSnapshot()
})

it('renders disabled', () => {
  const tree = mount((
    <FormFieldSwitch
      id="switch"
      title="Title"
      handleChange={() => () => { }}
      isDisabled
    />
  ))

  expect(tree).toMatchSnapshot()
})

it('renders with helper text', () => {
  const tree = mount((
    <FormFieldSwitch
      id="switch"
      title="Title"
      handleChange={() => () => { }}
      helperText="test"
    />
  ))

  expect(tree).toMatchSnapshot()
})

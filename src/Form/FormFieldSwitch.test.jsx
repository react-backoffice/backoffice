import React from 'react'
import renderer from 'react-test-renderer'

import FormFieldSwitch from './FormFieldSwitch'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <FormFieldSwitch
        id="switch"
        title="Title"
        handleChange={() => () => {}}
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders disabled', () => {
  const tree = renderer
    .create((
      <FormFieldSwitch
        id="switch"
        title="Title"
        handleChange={() => () => { }}
        isDisabled
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders with helper text', () => {
  const tree = renderer
    .create((
      <FormFieldSwitch
        id="switch"
        title="Title"
        handleChange={() => () => { }}
        helperText="test"
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'

import FormFieldInput from './FormFieldInput'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <FormFieldInput />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})


it('renders disabled', () => {
  const tree = renderer
    .create((
      <FormFieldInput
        isDisabled
      />
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

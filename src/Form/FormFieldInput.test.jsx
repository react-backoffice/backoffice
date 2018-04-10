import React from 'react'
import { mount } from 'enzyme'

import FormFieldInput from './FormFieldInput'

it('renders correctly', () => {
  const tree = mount((
    <FormFieldInput />
  ))

  expect(tree).toMatchSnapshot()
})


it('renders disabled', () => {
  const tree = mount((
    <FormFieldInput
      isDisabled
    />
  ))

  expect(tree).toMatchSnapshot()
})

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import Form from './'

import formData from '../../__tests__/data/form'

it('renders correctly', () => {
  const tree = mount((
    <MemoryRouter>
      <Form
        data={{
          text: {
            value: 'prefilled text-field',
          },
          id: {
            value: 'test-id',
          },
        }}
        form={formData}
        onSubmit={console.log}
      />
    </MemoryRouter>
  ))

  expect(tree).toMatchSnapshot()
})

it('renders correctly with content', () => {
  const tree = mount((
    <MemoryRouter>
      <Form
        data={{
          text: {
            value: 'prefilled text-field',
          },
          id: {
            value: 'test-id',
          },
        }}
        form={formData}
        onSubmit={console.log}
        submitText="Save the form"
      >
        <p>Foo</p>
      </Form>
    </MemoryRouter>
  ))

  expect(tree).toMatchSnapshot()
})

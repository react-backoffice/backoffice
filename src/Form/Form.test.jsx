import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'

import Form from '.'

import formData from '../tests/data/form'

it('renders correctly', () => {
  const tree = shallow((
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
  const tree = shallow((
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

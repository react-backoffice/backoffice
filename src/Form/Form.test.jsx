import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Form from './'

import formData from '../../__tests__/data/form'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Router>
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
      </Router>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with content', () => {
  const tree = renderer
    .create((
      <Router>
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
      </Router>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

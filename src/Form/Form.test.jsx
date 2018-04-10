import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

import Form from './'

import formData from '../../__tests__/data/form'

it('renders correctly', () => {
  const tree = mount((
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

  expect(tree).toMatchSnapshot()
})

it('renders correctly with content', () => {
  const tree = mount((
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

  expect(tree).toMatchSnapshot()
})

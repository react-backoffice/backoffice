import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import BackButton from './'

it('renders correctly', () => {
  const tree = renderer
    .create((<Router><BackButton url="/" /></Router>))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

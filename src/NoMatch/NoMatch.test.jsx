import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import NoMatch from './'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Router>
        <NoMatch
          title="Title"
        />
      </Router>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with description', () => {
  const tree = renderer
    .create(<NoMatch
      title="Title"
      description={(
        <p>Desc</p>
      )}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

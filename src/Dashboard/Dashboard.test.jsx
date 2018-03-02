import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Dashboard from './'

it('renders correctly', () => {
  const tree = renderer
    .create((
      <Router>
        <Dashboard
          data={{
            title: 'Backoffice',
            description: 'Visual Testing for Backoffice Framework',
            groups: [{
              title: 'Title',
              cards: [{
                title: 'title',
                description: 'desc',
              }],
            }],
          }}
        />
      </Router>
    ))
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'

import Dashboard from '.'

it('renders correctly', () => {
  const tree = shallow((
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

  expect(tree).toMatchSnapshot()
})

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

import NoMatch from './'

it('renders correctly', () => {
  const tree = mount((
    <Router>
      <NoMatch
        title="Title"
      />
    </Router>
  ))

  expect(tree).toMatchSnapshot()
})

it('renders correctly with description', () => {
  const tree = mount(<NoMatch
    title="Title"
    description={(
      <p>Desc</p>
    )}
  />)

  expect(tree).toMatchSnapshot()
})

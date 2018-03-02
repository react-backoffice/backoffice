import React from 'react'
import renderer from 'react-test-renderer'

import Snackbar from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<Snackbar message="Message" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

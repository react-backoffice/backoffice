import React from 'react'
import renderer from 'react-test-renderer'

import ErrorSnackbar from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<ErrorSnackbar message="Message" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

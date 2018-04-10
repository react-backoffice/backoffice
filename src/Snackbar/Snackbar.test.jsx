import React from 'react'
import { mount } from 'enzyme'

import Snackbar from './'

it('renders correctly', () => {
  const tree = mount(<Snackbar message="Message" />)

  expect(tree).toMatchSnapshot()
})

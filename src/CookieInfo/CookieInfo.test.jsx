import React from 'react'
import renderer from 'react-test-renderer'

import CookieInfo from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<CookieInfo cookieInfoOpen>Foo</CookieInfo>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

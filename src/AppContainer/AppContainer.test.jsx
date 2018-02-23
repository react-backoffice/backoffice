import React from 'react'
import renderer from 'react-test-renderer'

import AppContainer from './'

describe('Component Info', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((
        <AppContainer>
          Foo
        </AppContainer>
      ))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

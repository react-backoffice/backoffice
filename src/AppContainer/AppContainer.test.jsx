import React from 'react'
import { mount } from 'enzyme'

import AppContainer from './'

describe('Component Info', () => {
  it('renders correctly', () => {
    const tree = mount((
      <AppContainer>
        Foo
      </AppContainer>
    ))

    expect(tree).toMatchSnapshot()
  })
})

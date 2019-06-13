import React from 'react'
import { shallow } from 'enzyme'

import AppContainer from '.'

describe('Component Info', () => {
  it('renders correctly', () => {
    const tree = shallow((
      <AppContainer>
        Foo
      </AppContainer>
    ))

    expect(tree).toMatchSnapshot()
  })
})

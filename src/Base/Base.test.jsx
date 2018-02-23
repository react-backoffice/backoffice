import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Base from './'

import menuData from '../../__tests__/data/menu'

Enzyme.configure({ adapter: new Adapter() })

describe('Base', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((
        <Router>
          <Base
            title="Foo"
            menuData={menuData}
            hasCookieInfo
            menuOpen
          >
            <div>Foo</div>
          </Base>
        </Router>
      ))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without header', () => {
    const tree = renderer
      .create((
        <Router>
          <Base
            title="Foo"
            menuData={menuData}
            hasCookieInfo
            hasHeader={false}
            menuOpen
          >
            <div>Foo</div>
          </Base>
        </Router>
      ))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

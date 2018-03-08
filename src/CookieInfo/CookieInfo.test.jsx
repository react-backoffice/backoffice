import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from 'material-ui'

import CookieInfo from './'

Enzyme.configure({ adapter: new Adapter() })


describe('Component Info', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CookieInfo cookieInfoOpen>Foo</CookieInfo>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click away', () => {
    const mockCallBack = jest.fn()

    const cookieInfo = mount((
      <CookieInfo
        isOpen
        onAccept={mockCallBack}
      >
        Foo
      </CookieInfo>
    ))

    cookieInfo.find(Button).simulate('click')

    expect(mockCallBack).toHaveBeenCalled()
  })
})

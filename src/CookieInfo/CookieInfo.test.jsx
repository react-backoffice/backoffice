import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from '@material-ui/core'

import CookieInfo from '.'

Enzyme.configure({ adapter: new Adapter() })


describe('Component Info', () => {
  it('renders correctly', () => {
    const tree = shallow(<CookieInfo cookieInfoOpen>Foo</CookieInfo>)

    expect(tree).toMatchSnapshot()
  })

  it('click away', () => {
    const mockCallBack = jest.fn()

    const cookieInfo = shallow((
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

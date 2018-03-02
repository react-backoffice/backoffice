import React from 'react'
import MockRouter from 'react-mock-router'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BackButton from './'

Enzyme.configure({ adapter: new Adapter() })

describe('Back Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((<MockRouter><BackButton url="/" /></MockRouter>))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('updates history on click', () => {
    const push = jest.fn()
    const button = mount(<MockRouter push={push}><BackButton url="/" /></MockRouter>)

    button.find(BackButton).simulate('click')

    expect(push).toHaveBeenLastCalledWith('/')
  })
})

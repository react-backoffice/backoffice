import React from 'react'
import MockRouter from 'react-mock-router'
import { mount } from 'enzyme'

import BackButton from '.'

describe('Back Button', () => {
  it('renders correctly', () => {
    const tree = mount((<MockRouter><BackButton url="/" /></MockRouter>))

    expect(tree).toMatchSnapshot()
  })

  it('updates history on click', () => {
    const push = jest.fn()
    const button = mount(<MockRouter push={push}><BackButton url="/" /></MockRouter>)

    button.find(BackButton).simulate('click')

    expect(push).toHaveBeenLastCalledWith('/')
  })
})

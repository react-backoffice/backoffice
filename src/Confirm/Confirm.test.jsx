import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Confirm from './'

Enzyme.configure({ adapter: new Adapter() })

describe('Confirm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Confirm
        title="Title"
        description="Desc"
        onConfirm={() => { }}
      />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('confirm is handled', () => {
    const onConfirm = jest.fn()
    const confirm = shallow((
      <Confirm
        isOpen
        title="Title"
        description="Desc"
        onConfirm={onConfirm}
      />
    ))

    expect(confirm.state().isOpen).toBe(true)
    confirm.instance().handleConfirm()

    expect(onConfirm).toHaveBeenCalled()
  })

  it('close is handled', () => {
    const onClose = jest.fn()
    const confirm = shallow((
      <Confirm
        isOpen
        title="Title"
        description="Desc"
        onConfirm={() => {}}
        onClose={onClose}
      />
    ))

    expect(confirm.state().isOpen).toBe(true)
    confirm.instance().handleClose()

    expect(onClose).toHaveBeenCalled()
  })

  it('changes open', () => {
    const confirm = shallow((
      <Confirm
        isOpen
        description="Desc"
        onConfirm={() => { }}
      />
    ))

    confirm.setProps({
      isOpen: false,
    })
  })
})

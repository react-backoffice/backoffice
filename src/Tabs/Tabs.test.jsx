import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Tabs from './'

Enzyme.configure({ adapter: new Adapter() })

describe('Tabs', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((
        <Router>
          <Tabs
            data={[{
              title: 'Title',
              content: (
                <p>Content</p>
              ),
            }]}
          />
        </Router>
      ))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly if no data', () => {
    const tree = renderer
      .create((
        <Router>
          <Tabs data={[]} />
        </Router>
      ))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })


  /* @TODO
  it('click second tab', () => {
    const tabs = shallow(<Tabs data={[]} />)

    tabs.instance().handleChange({}, 1)

    expect(tabs.instance().state.value).toEqual(1)
  })
  */
})

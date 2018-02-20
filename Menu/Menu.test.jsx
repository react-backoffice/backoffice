import React from 'react'
import renderer from 'react-test-renderer'

import Icon from 'material-ui-icons/AccessAlarm'

import Menu from './'

it('renders correctly', () => {
  const tree = renderer
    .create(<Menu
      data={[{
        title: 'Title',
        url: '/',
        icon: Icon,
      }]}
      redirectTo={() => { }}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

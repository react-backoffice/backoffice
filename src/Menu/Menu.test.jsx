import React from 'react'
import { mount } from 'enzyme'

import Icon from '@material-ui/icons/AccessAlarm'

import Menu from './'

it('renders correctly', () => {
  const tree = mount((
    <Menu
      data={[{
        title: 'Title',
        url: '/',
        icon: Icon,
      }]}
      redirectTo={() => { }}
    />
  ))

  expect(tree).toMatchSnapshot()
})

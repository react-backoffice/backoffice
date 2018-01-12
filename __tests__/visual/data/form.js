import React from 'react'

import Chip from 'material-ui/Chip'
import Icon from 'material-ui-icons/Visibility'

export default [{
  group: true,
  title: 'Form',
  id: 'base',
  data: [{
    id: 'text',
    title: 'Text Field',
    type: 'text',
    width: 'mid',
    required: true,
  }, {
    id: 'select',
    title: 'Select',
    type: 'select',
    options: ['Foo', 'Bar', 'Baz'],
    width: 'mid',
    required: true,
  }, {
    id: 'multiline',
    title: 'Multiline',
    type: 'multiline',
    rows: 5,
  }, {
    id: 'date',
    title: 'Date',
    type: 'date',
    format: 'DD.MM.YYYY',
    value: 1514989682669,
    width: 'small',
    validators: ['date'],
  }, {
    id: 'time',
    title: 'Time',
    type: 'time',
    format: 'hh:mm a',
    value: 1514989682669,
    width: 'small',
    validators: ['date'],
  }, {
    id: 'datetime',
    title: 'Datetime',
    type: 'datetime',
    format: 'DD.MM.YYYY, hh:mm a',
    value: 1514989682669,
    width: 'small',
    validators: ['date'],
  }, {
    id: 'list',
    title: 'List',
    type: 'list',
    width: 'mid',
    value: ['Foo', 'Bar', 'Baz'],
    completeFrom: ['Foo', 'Bar', 'Baz', 'Froot', 'Foobar', 'Barbaz', 'Foobaz'],
  }, {
    id: 'free-list',
    title: 'Free List',
    type: 'list',
    width: 'mid',
  }, {
    id: 'nested',
    group: true,
    title: 'Nested Form',
    integrated: true,
    isVisible: true,
    data: [{
      id: 'nested-text',
      title: 'Nested Text',
      type: 'text',
      iconEnd: (<Icon />)
    }],
  }, {
    id: 'email',
    title: 'Email',
    type: 'email',
    width: 'mid',
  }, {
    id: 'password',
    title: 'Password',
    type: 'password',
    width: 'mid',
  }],
}]

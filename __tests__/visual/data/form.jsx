import React, { Fragment } from 'react'

import Icon from 'material-ui-icons/Visibility'
import Divider from 'material-ui/Divider/Divider'
import Typography from 'material-ui/Typography/Typography'

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
    completeFrom: [{
      title: 'Foo',
      tooltip: 'Foo-Baz',
    },
    'Bar',
    {
      title: 'Baz',
      tooltip: 'Foo-Baz',
    },
    {
      title: 'Froot',
    },
    {
      title: 'Foobar',
      tooltip: 'Foo-Baz',
    },
    {
      title: 'Barbaz',
      tooltip: 'Foo-Baz',
    },
    {
      title: 'Foobaz',
    }],
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
      iconEnd: (<Icon />),
      width: 'mid',
    }, {
      id: 'empty',
      type: 'empty',
      width: 'mid',
    }],
  }, {
    id: 'content',
    type: 'content',
    content: (
      <Fragment>
        <Typography type="headline">Content</Typography>
        <Divider />
      </Fragment>
    ),
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
  }, {
    id: 'url',
    title: 'URL',
    type: 'url',
    width: 'mid',
  }],
}]

import React, { Fragment } from 'react'

import Icon from '@material-ui/icons/Visibility'
import Divider from 'material-ui/Divider/Divider'
import Typography from 'material-ui/Typography/Typography'

import { TYPES } from 'backoffice/src/Form/constants'

export default [{
  group: true,
  title: 'Form',
  id: 'base',
  data: [{
    id: 'text',
    title: 'Text Field',
    type: TYPES.TEXT,
    width: 'small',
    isRequired: true,
  }, {
    id: 'select',
    title: 'Select',
    type: TYPES.SELECT,
    options: ['Foo', 'Bar', 'Baz'],
    width: 'small',
    isRequired: true,
  }, {
    id: 'number',
    title: 'Number',
    type: TYPES.NUMBER,
    value: 10,
    width: 'small',
  }, {
    id: 'multiline',
    title: 'Multiline',
    type: 'multiline',
    rows: 5,
  }, {
    id: 'list',
    title: 'List',
    type: TYPES.LIST,
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
    type: TYPES.LIST,
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
      type: TYPES.TEXT,
      width: 'mid',
    }, {
      id: 'empty',
      type: TYPES.EMPTY,
      width: 'mid',
    }],
  }, {
    id: 'content',
    type: TYPES.CONTENT,
    content: (
      <Fragment>
        <Typography variant="headline">Content</Typography>
      </Fragment>
    ),
  }, {
    id: 'email',
    title: 'Email',
    type: TYPES.EMAIL,
    width: 'mid',
  }, {
    id: 'password',
    title: 'Password',
    type: TYPES.PASSWORD,
    width: 'mid',
  }, {
    id: 'url',
    title: 'URL',
    type: TYPES.URL,
    width: 'mid',
    beforeSubmit: (url) => {
      if (url) {
        return `${url}#top`
      }

      return url
    },
  }, {
    id: 'empty',
    type: TYPES.EMAIL,
    width: 'mid',
  }],
}, {
  group: true,
  title: 'Form - Date',
  id: 'date',
  data: [{
    id: 'date',
    title: 'Date',
    type: TYPES.DATE,
    format: 'DD.MM.YYYY',
    value: 1514989682669,
    width: 'small',
    validators: ['date'],
  }, {
    id: 'time',
    title: 'Time',
    type: TYPES.TIME,
    format: 'hh:mm a',
    value: 1514989682669,
    width: 'small',
    validators: ['date'],
  }, {
    id: 'datetime',
    title: 'Datetime',
    type: TYPES.DATETIME,
    format: 'DD.MM.YYYY, hh:mm a',
    value: 1514989682669,
    width: 'small',
    validators: ['date'],
  }],
}, {
  group: true,
  title: 'Form - Disabled fields',
  id: 'disabled',
  data: [{
    id: 'disabled',
    title: 'Disabled Text',
    type: TYPES.TEXT,
    width: 'mid',
    isDisabled: true,
  }, {
    id: 'disabled-select',
    title: 'Disabled Select',
    type: TYPES.SELECT,
    width: 'mid',
    options: ['Foo', 'Bar', 'Baz'],
    isDisabled: true,
  }],
}, {
  group: true,
  title: 'Form - Switches, Radio Buttons and Checkboxes',
  id: 'switches',
  data: [{
    id: 'switch',
    title: 'Switch',
    type: TYPES.SWITCH,
    helperText: 'Display Helper Text',
    width: 'small',
  }, {
    id: 'switch-1',
    title: 'Switch - Disabled',
    type: TYPES.SWITCH,
    helperText: 'Display Helper Text',
    width: 'small',
    isDisabled: true,
  }],
}]

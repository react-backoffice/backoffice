import React from 'react'

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
    renderElement: (element, index) => (
      <div key={`form-list-${index}`}>{element}</div>
    )
  }],
}]

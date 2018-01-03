import React from 'react'

export default [{
  group: true,
  title: 'Form',
  id: 'base',
  data: [{
    id: 'Text',
    title: 'Text Field',
    type: 'text',
    width: 'mid',
  }, {
    id: 'select',
    title: 'Select',
    type: 'select',
    options: ['Foo', 'Bar', 'Baz'],
    width: 'mid',
  }, {
    id: 'multiline',
    title: 'Multiline',
    type: 'multiline',
  }, {
    id: 'list',
    title: 'List',
    type: 'list',
    width: 'mid',
    renderElement: (element) => (
      <div>{element}</div>
    )
  }],
}]

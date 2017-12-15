import React from 'react'

export default [{
  group: true,
  title: 'Form',
  id: 'base',
  data: [{
    id: 'Text',
    title: 'Text Field',
    type: 'text',
    width: 'mid'
  }, {
    id: 'multiline',
    title: 'Multiline',
    type: 'multiline',
  }, {
    id: 'rules',
    title: 'Rules',
    type: 'list',
    renderElement: (element) => (
      <div>{element}</div>
    )
  }],
}]

import React from 'react'
import ReactDOM from 'react-dom'

import Container from './__tests__/Container'

const element = document.querySelector('[data-react-app]')

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    element,
  )
}

render(Container)

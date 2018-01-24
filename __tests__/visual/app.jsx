import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Container from './Container'

const element = document.querySelector('[data-react-app]')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    element,
  )
}

render(Container)

// Webpack Hot Module Replacement API
if (module.hot) {
  // eslint-disable-next-line
  module.hot.accept('./Container', () => render(require('./Container').default))
}

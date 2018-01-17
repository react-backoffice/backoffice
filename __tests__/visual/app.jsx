import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Base from '../../Base'

import menuData from './data/menu'

import NoMatch from '../../NoMatch'

import Page from './Page'
import General from './General'

let App = () => (
  <Router>
    <Switch>
      <Route exact path="/"
        render={(props) => (
          <Base
            title="This is Backoffice"
            menuData={menuData}
            hasCookieInfo
          >
            <Page {...props} />
            <General {...props} />
          </Base>
        )}
      />

      <Route component={NoMatch} />
    </Switch>
  </Router>
)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)

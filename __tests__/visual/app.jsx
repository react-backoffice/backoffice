import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Typography from 'material-ui/Typography'

import menuData from './data/menu'

import Base from '../../Base'
import NoMatch from '../../NoMatch'
import CookieInfo from '../../CookieInfo'

import Page from './Page'
import General from './General'

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
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

      <Route
        render={props => (
          <Base
            title="This is Backoffice"
            menuData={menuData}
            hasCookieInfo
          >
            <NoMatch />

            <CookieInfo {...props}>
              <Typography type="body1">
                This is the cookie info
              </Typography>
            </CookieInfo>
          </Base>
        )}
      />
    </Switch>
  </Router>
)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)

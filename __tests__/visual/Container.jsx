import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Typography from 'material-ui/Typography'

import indigo from 'material-ui/colors/indigo'
import amber from 'material-ui/colors/amber'

import menuData from './data/menu'

import AppContainer from '../../src/AppContainer'
import Base from '../../src/Base'
import NoMatch from '../../src/NoMatch'
import CookieInfo from '../../src/CookieInfo'

import Page from './Page'
import General from './General'

const theme = {
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
    },
  },
}

const Container = () => (
  <AppContainer theme={theme}>
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
                <Typography variant="body1">
                  This is the cookie info
                </Typography>
              </CookieInfo>
            </Base>
          )}
        />
      </Switch>
    </Router>
  </AppContainer>
)

export default Container

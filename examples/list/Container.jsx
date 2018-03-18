import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { AppContainer } from 'backoffice'

import UserListing from './UserListing'
import theme from './theme'

const Container = () => (
  <AppContainer theme={theme}>
    <Router>
      <Switch>
        <Route
          exact
          path="/list/"
          render={props => (
            <UserListing {...props} />
          )}
        />
      </Switch>
    </Router>
  </AppContainer>
)

export default Container

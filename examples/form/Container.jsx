import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { AppContainer } from 'backoffice'

import theme from '../theme'
import EditForm from './EditForm'

const Container = () => (
  <AppContainer theme={theme}>
    <Router>
      <Switch>
        <Route
          exact
          path="/form/"
          render={props => (
            <EditForm {...props} />
          )}
        />
      </Switch>
    </Router>
  </AppContainer>
)

export default Container

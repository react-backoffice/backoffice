import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NoMatch from '../../NoMatch'

import Home from '../../Home'
import homeData from './data/home'

import Menu from '../../Menu'
import menuData from './data/menu'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"
        render={(props) => (
          <div>
            <Home
              data={homeData}
              {...props}
            />
            <Menu
              data={menuData}
              redirectTo={() => {}}
              {...props}
            />
          </div>
        )}
      />

      <Route component={NoMatch} />
    </Switch>
  </Router>
)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)

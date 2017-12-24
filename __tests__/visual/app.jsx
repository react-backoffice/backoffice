import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles'

import withRoot from '../../Base/withRoot'

import NoMatch from '../../NoMatch'

import Home from '../../Home'
import homeData from './data/home'

import Menu from '../../Menu'
import menuData from './data/menu'

import Listing from '../../Listing'
import listingData from './data/listing_data'
import listingHeaders from './data/listing_headers'

import Form from '../../Form'
import formData from './data/form'

import Header from '../../Header'
import Drawer from '../../Drawer'
import AddButton from '../../AddButton'
import BackButton from '../../BackButton'

const drawerWidth = 280

const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },

  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
})

let App = ({ classes }) => (
  <Router>
    <Switch>
      <Route exact path="/"
        render={(props) => (
          <div>
            <Header
              title="This is Backoffice"
              handleDrawerOpen={() => { }}
              onClick={() => { }}
              open={true}
            />

            <div className={classes.root}>
              <Drawer
                open={true}
                data={menuData}
                redirectTo={() => {}}
                handleDrawerClose={() => {}}
                {...props}
              />

              <div className={classes.content}>
                <BackButton url={'/root'} />
                <Home
                  data={homeData}
                  {...props}
                />
                <Menu
                  data={menuData}
                  redirectTo={() => {}}
                  {...props}
                />

                <Listing
                  title="Christmas Time"
                  data={listingData}
                  headers={listingHeaders}
                  orderBy="date"
                  handleClick={() => { }}
                />

                <Form
                  data={{}}
                  form={formData}
                  onSubmit={() => { }}
                  submitText="Save the form"
                />
              </div>

              <AddButton handleClick={() => { }} />
            </div>
          </div>
        )}
      />

      <Route component={NoMatch} />
    </Switch>
  </Router>
)

App = withStyles(styles)(App)
App = withRoot(App)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)

import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Base from '../../Base'

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

let App = () => (
  <Router>
    <Switch>
      <Route exact path="/"
        render={(props) => (
          <Base
            title="This is Backoffice"
            menuData={menuData}
          >
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

            <AddButton handleClick={() => { }} />
          </Base>
        )}
      />

      <Route component={NoMatch} />
    </Switch>
  </Router>
)

const appElement = document.querySelector('[data-react-app]')

render(<App />, appElement)

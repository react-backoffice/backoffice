import React, { Fragment } from 'react'
import Typography from 'material-ui/Typography'

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

const noop = () => {}

const Page = (props) => (
  <Fragment>
    <BackButton url={'/root'} />
    <Home
      data={homeData}
      {...props}
    />
    <Menu
      data={menuData}
      redirectTo={noop}
      {...props}
    />

    <Listing
      title="Christmas Time"
      data={listingData}
      headers={listingHeaders}
      orderBy="date"
      handleClick={noop}
      hasLoader={true}
    />

    <Form
      data={{}}
      form={formData}
      onSubmit={noop}
      submitText="Save the form"
    >
      <Typography>
        This is a very special form with additional content.
      </Typography>
    </Form>

    <AddButton handleClick={noop} />
  </Fragment>
)

export default Page

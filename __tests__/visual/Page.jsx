import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'

import Home from '../../Home'
import homeData from './data/home'

import Menu from '../../Menu'
import menuData from './data/menu'

import Listing from '../../Listing'
import listingData from './data/listing_data'
import listingHeaders from './data/listing_headers'

import Form from '../../Form'
import formData from './data/form'

import AddButton from '../../AddButton'
import BackButton from '../../BackButton'

const noop = () => {}

const styles = theme => ({
  headline: {
    marginTop: theme.spacing.unit * 4,
  },
})

const Page = ({ classes, ...props }) => (
  <Fragment>
    <Home
      data={homeData}
      {...props}
    />

    <Typography type="display1" className={classes.headline}>
      Listing
    </Typography>

    <Listing
      title="Christmas Time"
      data={listingData}
      headers={listingHeaders}
      orderBy="date"
      handleClick={noop}
      hasLoader
    />

    <Typography type="display1" className={classes.headline}>
      Form
    </Typography>

    <Form
      data={{
        text: {
          value: 'prefilled text-field',
        },
      }}
      form={formData}
      onSubmit={noop}
      submitText="Save the form"
    >
      <Typography>
        This is a very special form with additional content.
      </Typography>
    </Form>

    <Typography type="display1" className={classes.headline}>
      Menu
    </Typography>

    <Menu
      data={menuData}
      redirectTo={noop}
      {...props}
    />

    <AddButton handleClick={noop} />

    <Typography type="display1" className={classes.headline}>
      Back Button
    </Typography>
    <BackButton url="/root" />
  </Fragment>
)

Page.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(Page)

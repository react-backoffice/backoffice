import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'

import Home from '../../src/Home'
import homeData from './data/home'

import Menu from '../../src/Menu'
import menuData from './data/menu'

import Listing from '../../src/Listing'
import listingData from './data/listing_data'
import listingHeaders from './data/listing_headers'

import Form from '../../src/Form'
import formData from './data/form'

import AddButton from '../../src/AddButton'
import BackButton from '../../src/BackButton'

import Tabs from '../../src/Tabs'
import tabData from './data/tabs'

const noop = () => {}

const styles = theme => ({
  headline: {
    marginTop: theme.spacing.unit * 4,
  },
})

class Page extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  constructor() {
    super()

    this.handleFormButtonClick = this.handleFormButtonClick.bind(this)
  }

  state = {
    formData,
    additionalValue: null,
  }

  componentWillMount() {
    const { formData: newFormData } = this.state

    newFormData[0].data[0].getAdditionalValue = value => (
      this.state.additionalValue || value
    )

    this.setState({
      formData: newFormData,
    })
  }

  handleFormButtonClick() {
    this.setState({
      additionalValue: 'New value',
    })
  }

  render() {
    const { classes, ...props } = this.props

    return (
      <Fragment>
        <Home
          data={homeData}
          {...props}
        />

        <Typography variant="display1" className={classes.headline}>
          Listing
        </Typography>

        <Listing
          title="Christmas Time"
          data={listingData}
          headers={listingHeaders}
          orderBy="username"
          handleClick={noop}
          hasLoader
          onUpdateSelection={(selection) => { console.log(selection) }}
          toolbarContent={(
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        />

        <Typography variant="title" className={classes.headline}>
          Integrated
        </Typography>

        <Listing
          data={listingData.slice(0, 2)}
          headers={listingHeaders}
          orderBy="username"
          handleClick={noop}
          isIntegrated
        />

        <Typography variant="display1" className={classes.headline}>
          Form
        </Typography>

        <Form
          data={{
            text: {
              value: 'prefilled text-field',
            },
            id: {
              value: 'test-id',
            },
          }}
          form={formData}
          onSubmit={console.log}
          submitText="Save the form"
        >
          <Typography>
            This is a very special form with additional content.
          </Typography>
          <Button onClick={this.handleFormButtonClick}>
            Change First Field Value Via Function
          </Button>
        </Form>

        <Typography variant="display1" className={classes.headline}>
          Tabs
        </Typography>

        <Tabs data={tabData} />

        <Typography variant="display1" className={classes.headline}>
          Menu
        </Typography>

        <Menu
          data={menuData}
          redirectTo={noop}
          {...props}
        />

        <AddButton handleClick={noop} />

        <Typography variant="display1" className={classes.headline}>
          Back Button
        </Typography>
        <BackButton url="/root" />
      </Fragment>
    )
  }
}

export default withStyles(styles)(Page)

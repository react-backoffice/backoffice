import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import { Form } from 'backoffice'
import data from './data'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
})

const EditForm = ({ classes }) => (
  <div className={classes.root}>
    <Form
      data={{
        text: {
          value: 'prefilled text-field',
        },
        id: {
          value: 'test-id',
        },
      }}
      form={data}
      onSubmit={console.log}
      submitText="Save the form"
    />
  </div>
)

EditForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(EditForm)

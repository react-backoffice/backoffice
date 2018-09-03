import React from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Tooltip,
  withStyles,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import Listing from 'backoffice/src/Listing'
import data from './data'
import headers from './headers'

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
})

const UserListing = ({ onClick, onUpdateSelection, classes }) => (
  <div className={classes.root}>
    <Listing
      title="Users"
      data={data}
      headers={headers}
      orderBy="username"
      onClick={onClick}
      hasLoader
      onUpdateSelection={onUpdateSelection}
      toolbarContent={(
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    />
  </div>
)

UserListing.propTypes = {
  onClick: PropTypes.func.isRequired,
  onUpdateSelection: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(UserListing)

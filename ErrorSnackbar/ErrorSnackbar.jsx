import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Snackbar from 'material-ui/Snackbar'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
})

const ErrorSnackbar = ({
  open,
  message,
  classes,
}) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    autoHideDuration={6000}
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">{message}</span>}
  />
)

ErrorSnackbar.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ErrorSnackbar.defaultProps = {
  open: false,
}

export default withStyles(styles)(ErrorSnackbar)

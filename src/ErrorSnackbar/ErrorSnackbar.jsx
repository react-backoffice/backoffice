import React from 'react'
import PropTypes from 'prop-types'

import Snackbar from 'material-ui/Snackbar'

const ErrorSnackbar = ({
  open,
  message,
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
}

ErrorSnackbar.defaultProps = {
  open: false,
}

export default ErrorSnackbar

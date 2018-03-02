import React from 'react'
import PropTypes from 'prop-types'

import MaterialSnackbar from 'material-ui/Snackbar'

const Snackbar = ({
  open,
  message,
}) => (
  <MaterialSnackbar
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

Snackbar.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string.isRequired,
}

Snackbar.defaultProps = {
  open: false,
}

export default Snackbar

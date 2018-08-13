import React from 'react'
import PropTypes from 'prop-types'

import { Snackbar as MaterialSnackbar } from '@material-ui/core'

const Snackbar = ({
  isOpen,
  message,
}) => (
  <MaterialSnackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={isOpen}
    autoHideDuration={6000}
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">{message}</span>}
  />
)

Snackbar.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string.isRequired,
}

Snackbar.defaultProps = {
  isOpen: false,
}

export default Snackbar

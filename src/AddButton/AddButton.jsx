import React from 'react'
import PropTypes from 'prop-types'

import {
  withStyles,
  Fab,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  button: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
  },
})

const AddButton = ({ onClick, classes }) => (
  <Fab
    color="secondary"
    aria-label="add"
    className={classes.button}
    onClick={onClick}
  >
    <AddIcon />
  </Fab>
)

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(AddButton)

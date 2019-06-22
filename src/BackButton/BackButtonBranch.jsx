import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  withStyles,
} from '@material-ui/core'
import BackIcon from '@material-ui/icons/ArrowBackIos'

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing(),
  },
})

const BackButtonBranch = ({
  onNavigateBack,
  classes,
}) => (
  <Button onClick={onNavigateBack}>
    <BackIcon className={classes.leftIcon} />
    Back
  </Button>
)

BackButtonBranch.propTypes = {
  onNavigateBack: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(BackButtonBranch)

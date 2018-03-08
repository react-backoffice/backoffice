import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import BackIcon from 'material-ui-icons/KeyboardArrowLeft'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
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

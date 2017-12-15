import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import BackIcon from 'material-ui-icons/KeyboardArrowLeft'
import withStyles from 'material-ui/styles/withStyles'

const styles = (theme) => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

const BackButtonBranch = ({
  handleBack,
  classes,
}) => (
  <Button onClick={handleBack}>
    <BackIcon className={classes.leftIcon} />
    Back
  </Button>
)

BackButtonBranch.propTypes = {
  handleBack: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BackButtonBranch)

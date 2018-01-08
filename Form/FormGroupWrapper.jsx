import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'
import Paper from 'material-ui/Paper'

const styles = (theme) => ({
  group: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  groupIntegrated: {
    paddingTop: theme.spacing.unit * 3,
  },
  hidden: {
    display: 'none',
  },
})

const FormGroupWrapper = ({ isPaper, isVisible, classes, children, ...rest }) => {
  if (isPaper) {
    return (
      <Paper className={classNames(classes.group, {
        [classes.hidden]: !isVisible,
      })} {...rest}>
        {children}
      </Paper>
    )
  }

  return (
    <div className={classNames(classes.groupIntegrated, {
      [classes.hidden]: !isVisible,
    })} {...rest}>
      {children}
    </div>
  )
}

FormGroupWrapper.propTypes = {
  isPaper: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
}

FormGroupWrapper.defaultProps = {
  isPaper: true,
  isVisible: true,
}

export default withStyles(styles)(FormGroupWrapper)

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  group: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
  },
  groupIntegrated: {
    paddingTop: theme.spacing(3),
  },
  hidden: {
    display: 'none',
  },
})

const FormGroupWrapper = ({
  isPaper,
  isVisible,
  classes,
  children,
  ...rest
}) => {
  if (isPaper) {
    return (
      <Paper
        className={classNames(classes.group, {
        [classes.hidden]: !isVisible,
      })}
        {...rest}
      >
        {children}
      </Paper>
    )
  }

  return (
    <div
      className={classNames(classes.groupIntegrated, {
      [classes.hidden]: !isVisible,
    })}
      {...rest}
    >
      {children}
    </div>
  )
}

FormGroupWrapper.propTypes = {
  isPaper: PropTypes.bool,
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

FormGroupWrapper.defaultProps = {
  isPaper: true,
  isVisible: true,
  children: null,
}

export default withStyles(styles)(FormGroupWrapper)

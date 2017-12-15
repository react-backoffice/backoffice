import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import green from 'material-ui/colors/green'

const styles = (theme) => ({
  fixed: {
    position: 'fixed',
    right: theme.spacing.unit * 5,
    bottom: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit,
  },
  button: {
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
  },
  progress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

const FormSubmitButton = ({
  onSubmit,
  disabled,
  loading,
  fixed,
  classes,
  children,
}) => {
  const wrapperClasses = classNames({
    [classes.fixed]: fixed,
  })

  return (
    <div className={wrapperClasses}>
      <Button
        raised
        color="accent"
        className={classes.button}
        disabled={disabled}
        onClick={onSubmit}
      >
      {children}
      </Button>

      {loading ? (
        <CircularProgress size={24} className={classes.progress} />
      ) : null}
    </div>
  )
}

FormSubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fixed: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

FormSubmitButton.defaultProps = {
  disabled: false,
  loading: false,
  fixed: false,
}

export default withStyles(styles)(FormSubmitButton)

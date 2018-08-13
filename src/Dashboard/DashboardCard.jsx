import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  Card,
  CardContent,
  Typography,
  withStyles,
  Avatar,
} from '@material-ui/core'

import DisabledIcon from '@material-ui/icons/Lock'

const styles = theme => ({
  root: {
    cursor: 'pointer',
  },
  content: {
    paddingBottom: `${theme.spacing.unit * 2}px !important`,
  },
  avatar: {
    float: 'left',
    marginRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary.dark,
  },
  title: {
    marginBottom: 0,
  },
  disabled: {
    opacity: 0.75,
    pointerEvents: 'none',
    filter: 'grayscale(30%)',
  },
  icon: {
    float: 'right',
    opacity: 0.5,
  },
})

const DashboardCard = ({
  title,
  description,
  handleClick,
  icon: Icon,
  isDisabled,
  classes,
}) => {
  const rootClasses = classNames({
    [classes.root]: true,
    [classes.disabled]: isDisabled,
  })

  return (
    <Card onClick={handleClick} className={rootClasses}>
      <CardContent className={classes.content}>
        {isDisabled ? (
          <DisabledIcon className={classes.icon} />
        ) : null}

        {Icon ? (
          <Avatar className={classes.avatar}>
            <Icon />
          </Avatar>
        ) : null}

        <Typography variant="headline" className={classes.title} component="h2">
          {title}
        </Typography>

        {description ? (
          <Typography variant="body1">{description}</Typography>
        ) : null}
      </CardContent>
    </Card>
  )
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.func,
  isDisabled: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

DashboardCard.defaultProps = {
  description: null,
  icon: null,
  isDisabled: false,
}

export default withStyles(styles)(DashboardCard)

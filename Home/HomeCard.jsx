import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar';

const styles = (theme) => ({
  root: {
    cursor: 'pointer',
  },
  content: {
    paddingBottom: `${theme.spacing.unit * 2}px !important`,
  },
  avatar: {
    float: 'left',
    marginRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary[500],
  },
  title: {
    marginBottom: 0,
  },
  disabled: {
    opacity: 0.75,
    pointerEvents: 'none',
    filter: 'grayscale(30%)',
  }
})

const HomeCard = ({
  title,
  description,
  handleClick,
  icon: Icon,
  disabled,
  classes
}) => {
  const rootClasses = classNames({
    [classes.root]: true,
    [classes.disabled]: disabled,
  })

  return (
    <Card onClick={handleClick} className={rootClasses}>
      <CardContent className={classes.content}>
        {Icon ? (
          <Avatar className={classes.avatar}>
            <Icon />
          </Avatar>
        ) : null}

        <Typography type="headline" className={classes.title} component="h2">
          {title}
        </Typography>

        {description ? (
          <Typography type="body1">{description}</Typography>
        ) : null}
      </CardContent>
    </Card>
  )
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
}

HomeCard.defaultProps = {
  disabled: false,
}

export default withStyles(styles)(HomeCard)

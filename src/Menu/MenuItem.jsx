import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core'

const styles = {
  isDisabled: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}

const MenuItem = ({
  redirectTo,
  url,
  title,
  icon: Icon,
  isDisabled,
  classes,
}) => (
  <ListItem
    button
    onClick={() => redirectTo(url)}
    className={classNames({
        [classes.isDisabled]: isDisabled,
      })}
  >
    {Icon ? (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      ) : null}
    <ListItemText primary={title} />
  </ListItem>
)

MenuItem.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  icon: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

MenuItem.defaultProps = {
  isDisabled: false,
  icon: null,
}

export default withStyles(styles)(MenuItem)

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

const styles = {
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}

const MenuItem = ({
  redirectTo,
  url,
  title,
  icon: Icon,
  disabled,
  classes,
}) => (
  <ListItem
    button
    onClick={() => redirectTo(url)}
    className={classNames({
        [classes.disabled]: disabled,
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
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

MenuItem.defaultProps = {
  disabled: false,
  icon: null,
}

export default withStyles(styles)(MenuItem)

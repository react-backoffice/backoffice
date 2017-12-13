import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

const MenuItem = ({ redirectTo, url, title, icon: Icon }) => {
  return (
    <ListItem button onClick={() => redirectTo(url)}>
      {Icon? (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      ) : null}
      <ListItemText primary={title} />
    </ListItem>
  )
}

MenuItem.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.func,
}

export default MenuItem

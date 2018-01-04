import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'

import MenuItem from './MenuItem'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
})

const Menu = ({ data, redirectTo, classes }) => {
  return (
    <div className={classes.root}>
      <List>
        {data.map((item, index) => {
          switch (item.type) {
            case 'divider':
              return <Divider key={`menu-${index}`} />
              break

            default:
              return (
                <MenuItem
                  key={`menu-${index}`}
                  redirectTo={redirectTo}
                  url={item.url}
                  title={item.title}
                  icon={item.icon}
                />
              )
              break
          }
        })}
      </List>
    </div>
  )
}

Menu.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Menu)

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

const Menu = ({ data, redirectTo, classes }) => (
  <div className={classes.root}>
    <List>
      {data.map((item) => {
          switch (item.type) {
            case 'divider':
              return <Divider key={`menu-${(Math.random() * 100).toFixed(5)}`} />

            default:
              return (
                <MenuItem
                  key={`menu-${(Math.random() * 100).toFixed(5)}`}
                  redirectTo={redirectTo}
                  url={item.url}
                  title={item.title}
                  disabled={item.disabled}
                  icon={item.icon}
                />
              )
          }
        })}
    </List>
  </div>
)

Menu.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(Menu)

import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import MaterialDrawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'

import Menu from '../Menu'

const drawerWidth = 280

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: theme.spacing.unit * 8,
  },
})

const Drawer = ({
  data,
  open,
  handleDrawerClose,
  redirectTo,
  classes,
}) => (
  <MaterialDrawer
    variant="persistent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
    open={open}
  >
    <div className={classes.drawerInner}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />

      <Menu data={data} redirectTo={redirectTo} />
    </div>
  </MaterialDrawer>
)


Drawer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

Drawer.defaultProps = {
  open: false,
}

export default withStyles(styles)(Drawer)

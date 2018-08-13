import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  AppBar,
  MenuIcon,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'

const drawerWidth = 280

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'translate(0, 0)',
  },
  appBarWithCookieInfo: {
    transform: `translate(0, ${theme.spacing.unit * 6}px)`,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  flex: {
    flex: 1,
  },
  title: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const Header = ({
  title,
  isOpen,
  isFixed,
  onDrawerOpen,
  isCookieInfoOpen,
  onClick,
  children,
  classes,
}) => (
  <div className={classes.root}>
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isOpen,
        [classes.appBarWithCookieInfo]: isCookieInfoOpen,
      })}
      position={isFixed ? 'fixed' : 'static'}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          color="inherit"
          onClick={onDrawerOpen}
          className={classNames(classes.menuButton, isOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="title"
          color="inherit"
          className={`${classes.flex} ${classes.title}`}
          onClick={onClick}
        >
          {title}
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isFixed: PropTypes.bool.isRequired,
  isCookieInfoOpen: PropTypes.bool.isRequired,
  onDrawerOpen: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

Header.defaultProps = {
  isOpen: false,
  children: null,
}

export default withStyles(styles)(Header)

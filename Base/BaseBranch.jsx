import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'

import Drawer from '../Drawer'
import Header from '../Header'

const drawerWidth = 280

const styles = (theme) => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },

  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
})

const BaseBranch = ({
  open,
  title,
  menuData,
  fixedHeader,
  onClick,
  handleDrawerOpen,
  handleDrawerClose,
  redirectTo,
  rightContent,
  classes,
  children
}) => (
  <div>
    <Header
      title={title}
      handleDrawerOpen={handleDrawerOpen}
      onClick={onClick}
      open={open}
      fixed={fixedHeader}
    >
      {rightContent ? rightContent : null}
    </Header>

    <div className={classes.appFrame}>
      <Drawer
        handleDrawerClose={handleDrawerClose}
        redirectTo={redirectTo}
        open={open}
        data={menuData}
      />

      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  </div>
)

export default withStyles(styles)(BaseBranch)

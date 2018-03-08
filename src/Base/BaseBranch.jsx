import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'

import Drawer from '../Drawer'
import Header from '../Header'

const drawerWidth = 280

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    transition: '0.25s',
  },
  appFrameWithCookieInfo: {
    marginTop: theme.spacing.unit * 6,
    minHeight: `calc(100vh - ${theme.spacing.unit * 6}px)`,
  },
  content: {
    width: `calc(100vw - ${theme.spacing.unit * 3 * 2}px)`,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: theme.spacing.unit * 8,
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
  isHeaderFixed,
  onClick,
  cookieInfoOpen,
  handleDrawerOpen,
  handleDrawerClose,
  onCookieInfoAccept,
  redirectTo,
  rightContent,
  hasHeader,
  classes,
  children,
  ...rest
}) => (
  <div>
    {hasHeader ? (
      <Header
        title={title}
        handleDrawerOpen={handleDrawerOpen}
        onClick={onClick}
        open={open}
        fixed={isHeaderFixed}
        cookieInfoOpen={cookieInfoOpen}
      >
        {rightContent || null}
      </Header>
    ) : null}

    <div className={classNames(classes.appFrame, {
      [classes.appFrameWithCookieInfo]: cookieInfoOpen,
    })}
    >
      {hasHeader ? (
        <Drawer
          onClose={handleDrawerClose}
          redirectTo={redirectTo}
          isOpen={open}
          data={menuData}
        />
      ) : null}

      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open || !hasHeader,
        })}
      >
        {React.Children.map(children, child => (
          React.cloneElement(child, {
            isOpen: cookieInfoOpen,
            onAccept: onCookieInfoAccept,
            ...rest,
          })
        ))}
      </main>
    </div>
  </div>
)

BaseBranch.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isHeaderFixed: PropTypes.bool,
  cookieInfoOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  onCookieInfoAccept: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
  rightContent: PropTypes.element,
  hasHeader: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
}

BaseBranch.defaultProps = {
  open: false,
  isHeaderFixed: false,
  cookieInfoOpen: false,
  rightContent: (<Fragment />),
}

export default withStyles(styles)(BaseBranch)

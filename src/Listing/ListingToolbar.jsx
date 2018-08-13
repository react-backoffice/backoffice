import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'

import ListingSearch from './ListingSearch'

const toolbarStyles = theme => ({
  root: {
    paddingRight: 2,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.secondary.light,
      }
      : {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
})

const ListingToolbar = ({
  title,
  numSelected,
  onFilter,
  classes,
  children,
}) => (
  <Toolbar
    className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
  >
    <div className={classes.title}>
      {numSelected > 0 ? (
        <Typography variant="subheading">{numSelected} selected</Typography>
      ) : (
        <Typography variant="title">{title}</Typography>
      )}
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>

      {numSelected > 0 ? children : (
        <ListingSearch onFilter={onFilter} />
      )}
    </div>
  </Toolbar>
)

ListingToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  onFilter: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node,
}

ListingToolbar.defaultProps = {
  children: (<Fragment />),
}

export default withStyles(toolbarStyles)(ListingToolbar)

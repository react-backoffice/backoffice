import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'

import DeleteIcon from 'material-ui-icons/Delete'
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
}) => (
  <Toolbar
    className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
  >
    <div className={classes.title}>
      {numSelected > 0 ? (
        <Typography type="subheading">{numSelected} selected</Typography>
      ) : (
        <Typography type="title">{title}</Typography>
      )}
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
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
}

export default withStyles(toolbarStyles)(ListingToolbar)

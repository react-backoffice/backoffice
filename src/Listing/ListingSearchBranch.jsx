import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  TextField,
  Tooltip,
  IconButton,
  SearchIcon,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    position: 'relative',
    marginRight: theme.spacing.unit,
  },
  field: {
    position: 'absolute',
    right: '100%',
    width: 0,
    marginTop: theme.spacing.unit,
    transition: 'width 0.25s',
  },
  fieldActive: {
    width: theme.spacing.unit * 30,
  },
})

const ListingSearchBranch = ({
  open,
  placeholder,
  onClick,
  onFilter,
  getSearchRef,
  classes,
}) => (
  <div className={classes.root}>
    <TextField
      type="search"
      placeholder={placeholder}
      className={classNames(classes.field, {
        [classes.fieldActive]: open,
      })}
      onChange={onFilter}
      inputProps={{
        ref: (node) => { getSearchRef(node) },
      }}
    />
    <Tooltip title="Search">
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Tooltip>
  </div>
)

ListingSearchBranch.propTypes = {
  open: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  getSearchRef: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ListingSearchBranch.defaultProps = {
  placeholder: 'Filter',
}

export default withStyles(styles)(ListingSearchBranch)

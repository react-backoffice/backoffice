import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'
import TextField from 'material-ui/TextField/TextField'
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton/IconButton'
import SearchIcon from 'material-ui-icons/Search'

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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ListingSearchBranch.defaultProps = {
  placeholder: 'Filter',
}

export default withStyles(styles)(ListingSearchBranch)

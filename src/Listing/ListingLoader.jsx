import React from 'react'
import PropTypes from 'prop-types'

import {
  TableCell,
  TableRow,
  LinearProgress,
  withStyles,
} from '@material-ui/core'

const styles = {
  row: {
    height: 'auto',
  },
  cell: {
    border: 0,
    padding: 0,
  },
  progress: {
    width: '100%',
  },
}

const ListingLoader = ({ cols, classes }) => (
  <TableRow className={classes.row}>
    <TableCell padding="none" colSpan={cols} className={classes.cell}>
      <LinearProgress mode="query" className={classes.progress} />
    </TableCell>
  </TableRow>
)

ListingLoader.propTypes = {
  cols: PropTypes.number,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ListingLoader.defaultProps = {
  cols: 1,
}

export default withStyles(styles)(ListingLoader)

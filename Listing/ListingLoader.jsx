import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Table, {
  TableCell,
  TableRow,
} from 'material-ui/Table'
import { LinearProgress } from 'material-ui/Progress'

const styles = (theme) => ({
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
})

const ListingLoader = ({ cols, classes }) => (
  <TableRow className={classes.row}>
    <TableCell padding="none" colSpan={cols} className={classes.cell}>
      <LinearProgress mode="query" className={classes.progress} />
    </TableCell>
  </TableRow>
)

ListingLoader.propTypes = {
  cols: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

ListingLoader.defaultProps = {
  cols: 1,
}

export default withStyles(styles)(ListingLoader)

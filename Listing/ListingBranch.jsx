import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Tooltip from 'material-ui/Tooltip'
import Checkbox from 'material-ui/Checkbox'

import ListingHeader from './ListingHeader'
import ListingToolbar from './ListingToolbar'
import ListingLine from './ListingLine'

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: "auto",
  },
})

const ListingBranch = ({
  title,
  headers,
  classes,
  data,
  order,
  orderBy,
  selected,
  rowsPerPage,
  page,
  handleSelectAllClick,
  handleRequestSort,
  handleCheckClick,
  handleClick,
  handleKeyDown,
  handleChangePage,
  handleChangeRowsPerPage,
  isSelected,
}) => {

  return (
    <Paper className={classes.root}>
      <ListingToolbar title={title} numSelected={selected.length} />

      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <ListingHeader
            headers={headers}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />

          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, index) => {
              return (
                <ListingLine
                  key={index}
                  data={n}
                  headers={headers}
                  handleCheckClick={handleCheckClick}
                  handleClick={handleClick}
                  handleKeyDown={handleKeyDown}
                  isSelected={isSelected(n.id)}
                />
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  )
}

ListingBranch.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  handleCheckClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

ListingBranch.defaultData = {
  title: '',
  data: [],
  headers: [],
  order: '',
  orderBy: '',
  selected: [],
  rowsPerPage: 10,
  page: 0,
  handleSelectAllClick: () => {},
  handleRequestSort: () => {},
  handleCheckClick: () => {},
  handleClick: () => {},
  handleKeyDown: () => {},
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {}
}

export default withStyles(styles)(ListingBranch)

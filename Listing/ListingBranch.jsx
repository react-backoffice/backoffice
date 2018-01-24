import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Table, {
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

import ListingHeader from './ListingHeader'
import ListingToolbar from './ListingToolbar'
import ListingLine from './ListingLine'
import ListingLoader from './ListingLoader'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
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
  rowsPerPageOptions,
  page,
  toolbarContent,
  handleSelectAllClick,
  handleRequestSort,
  handleCheckClick,
  handleClick,
  handleKeyDown,
  handleChangePage,
  handleChangeRowsPerPage,
  isSelected,
  onFilter,
  hasLoader,
}) => (
  <Paper className={classes.root}>
    <ListingToolbar
      title={title}
      numSelected={selected.length}
      onFilter={onFilter}
    >
      {toolbarContent}
    </ListingToolbar>

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
          {hasLoader ? (
            <ListingLoader cols={headers.length + 1} />
          ) : null}

          {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => (
            <ListingLine
              key={n[Object.keys(n)[0]]}
              data={n}
              headers={headers}
              handleCheckClick={handleCheckClick}
              handleClick={handleClick}
              handleKeyDown={handleKeyDown}
              isSelected={isSelected(n.id)}
            />
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={data.length}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={rowsPerPageOptions}
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

ListingBranch.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.string,
  orderBy: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  page: PropTypes.number,
  hasLoader: PropTypes.bool.isRequired,
  toolbarContent: PropTypes.node.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  handleCheckClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  isSelected: PropTypes.func,
  onFilter: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ListingBranch.defaultProps = {
  title: '',
  data: [],
  order: '',
  selected: [],
  rowsPerPage: 10,
  rowsPerPageOptions: [10, 25, 50, 100],
  page: 0,
  onFilter: () => {},
  isSelected: () => {},
}

export default withStyles(styles)(ListingBranch)

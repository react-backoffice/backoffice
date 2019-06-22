import React from 'react'
import PropTypes from 'prop-types'

import {
  Table,
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  withStyles,
} from '@material-ui/core'

import ListingHeader from './ListingHeader'
import ListingToolbar from './ListingToolbar'
import ListingLine from './ListingLine'
import ListingLoader from './ListingLoader'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
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
  onClick,
  handleKeyDown,
  handleChangePage,
  handleChangeRowsPerPage,
  isSelected,
  onFilter,
  hasLoader,
  isIntegrated,
}) => (
  <Paper
    className={isIntegrated ? null : classes.root}
    elevation={isIntegrated ? 0 : 4}
  >
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
              key={`line-${(Math.random() * 10000).toFixed(4)}`}
              data={n}
              headers={headers}
              handleCheckClick={handleCheckClick}
              onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  isSelected: PropTypes.func,
  onFilter: PropTypes.func,
  isIntegrated: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

ListingBranch.defaultProps = {
  title: '',
  data: [],
  order: 'asc',
  selected: [],
  rowsPerPage: 10,
  rowsPerPageOptions: [10, 25, 50, 100],
  page: 0,
  onFilter: () => {},
  isSelected: () => {},
  isIntegrated: false,
}

export default withStyles(styles)(ListingBranch)

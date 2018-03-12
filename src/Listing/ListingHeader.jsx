import React from 'react'
import PropTypes from 'prop-types'
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table'
import Tooltip from 'material-ui/Tooltip'
import Checkbox from 'material-ui/Checkbox'

class ListingHeader extends React.Component {
  createSortHandler(property) {
    return (event) => {
      this.props.onRequestSort(event, property)
    }
  }

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      headers,
    } = this.props

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>

          {headers.map(column => (
            <TableCell
              key={column.id}
              padding={column.isPaddingDisabled ? 'none' : 'default'}
            >
              <Tooltip
                title="Sort"
                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={this.createSortHandler(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
            ), this)}
        </TableRow>
      </TableHead>
    )
  }
}

ListingHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

export default ListingHeader

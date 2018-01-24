import React from 'react'
import PropTypes from 'prop-types'
import {
  TableCell,
  TableRow,
} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'


class ListingLine extends React.Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    handleClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    handleCheckClick: PropTypes.func.isRequired,
  }

  renderCells() {
    const { headers, data, handleClick } = this.props

    return headers.map((header) => {
      const content = data[header.id]
      let { transformContent } = header

      if (typeof transformContent !== 'function') {
        transformContent = contentData => contentData
      }

      return (
        <TableCell
          key={`header-${header.id}`}
          padding={header.disablePadding ? 'none' : 'default'}
          numeric={header.numeric}
          onClick={handleClick(data.id)}
        >
          {transformContent(content, data)}
        </TableCell>
      )
    })
  }

  render() {
    const {
      data,
      isSelected,
      handleKeyDown,
      handleCheckClick,
    } = this.props

    return (
      <TableRow
        hover
        onKeyDown={event => handleKeyDown(event, data.id)}
        role="checkbox"
        aria-checked={isSelected}
        tabIndex={-1}
        selected={isSelected}
      >
        <TableCell
          padding="checkbox"
          onClick={() => handleCheckClick(data.id)}
        >
          <Checkbox checked={isSelected} />
        </TableCell>

        {this.renderCells()}
      </TableRow>
    )
  }
}

export default ListingLine

import React from 'react'
import {
  TableCell,
  TableRow,
} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'


class ListingLine extends React.Component {
  renderCells(handleClick) {
    const { headers, data } = this.props

    return headers.map((header, index) => {
      const content = data[header.id]
      let transformContent = header.transformContent

      if (typeof transformContent !== 'function') {
        transformContent = (content) => content
      }

      return (
        <TableCell
          key={`${header.id}.${index}`}
          padding={header.disablePadding ? "none" : "default"}
          numeric={header.numeric}
          onClick={() => handleClick(data.id)}
        >
          {transformContent(content, data)}
        </TableCell>
      )
    })
  }

  render() {
    const {
      data,
      handleClick,
      isSelected,
      handleKeyDown,
      handleCheckClick,
      classes
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
          onClick={event => handleCheckClick(data.id)}
        >
          <Checkbox checked={isSelected} />
        </TableCell>

        {this.renderCells(handleClick)}
      </TableRow>
    )
  }
}

export default ListingLine

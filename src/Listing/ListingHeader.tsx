import React from "react";
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";

type ListingHeaderProps = {
  headers: Record<string, any>[];
  numSelected?: number;
  onRequestSort: (...args: any[]) => any;
  onSelectAllClick: (...args: any[]) => any;
  order?: "asc" | "desc";
  orderBy: string;
  rowCount?: number;
};

class ListingHeader extends React.Component<ListingHeaderProps, any> {
  static defaultProps = {
    numSelected: 0,
    rowCount: 0,
  };

  createSortHandler(property: any) {
    const { onRequestSort } = this.props;

    return (event: any) => {
      onRequestSort(event, property);
    };
  }

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      headers,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={
                (numSelected || 0) > 0 && (numSelected || 0) < (rowCount || 0)
              }
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>

          {headers.map(
            (column: any, index: number) => (
              <TableCell
                key={`header-${column.id}-${index}`}
                padding={column.isPaddingDisabled ? "none" : "default"}
                align={column.isNumeric ? "right" : undefined}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? "bottom-end" : "bottom-start"}
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
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

export default ListingHeader;

import React, { FunctionComponent } from "react";
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";

type Props = {
  headers: Record<string, any>[];
  numSelected?: number;
  onRequestSort: (...args: any[]) => any;
  onSelectAllClick: (...args: any[]) => any;
  order?: "asc" | "desc";
  orderBy: string;
  rowCount?: number;
};

const ListingHeader: FunctionComponent<Props> = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected = 0,
  rowCount = 0,
  headers,
  onRequestSort,
}) => {
  const createSortHandler = (property: any) => (event: any) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        {headers.map((column: any, index: number) => (
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
                onClick={createSortHandler(column.id)}
              >
                {column.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListingHeader;

import React from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  withStyles,
} from "@material-ui/core";
import { Header } from "./Listing";
import ListingHeader from "./ListingHeader";
import ListingToolbar from "./ListingToolbar";
import ListingLine from "./ListingLine";
import ListingLoader from "./ListingLoader";

const styles = (theme: any) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: "auto",
  },
});

type ListingBranchProps = {
  title?: string;
  data?: object[];
  headers: Header[];
  order?: "asc" | "desc";
  orderBy: string;
  selected?: string[];
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  page?: number;
  hasLoader: boolean;
  renderToolbarContent: (selected: any[] | undefined) => React.ReactNode;
  handleSelectAllClick: (...args: any[]) => any;
  handleRequestSort: (...args: any[]) => any;
  handleCheckClick: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
  handleKeyDown: (...args: any[]) => any;
  handleChangePage: (...args: any[]) => any;
  handleChangeRowsPerPage: (...args: any[]) => any;
  isSelected?: (...args: any[]) => any;
  onFilter?: (...args: any[]) => any;
  isIntegrated?: boolean;
  classes: {
    [key: string]: string;
  };
  searchValue?: string;
};

const ListingBranch: React.SFC<ListingBranchProps> = ({
  title,
  headers,
  classes,
  data,
  order = "asc",
  orderBy,
  selected,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 50, 100],
  page = 0,
  renderToolbarContent,
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
  searchValue,
}) => (
  <Paper
    className={isIntegrated ? undefined : classes.root}
    elevation={isIntegrated ? 0 : 4}
  >
    <ListingToolbar
      title={title}
      numSelected={selected?.length}
      onFilter={onFilter}
    >
      {renderToolbarContent && renderToolbarContent(selected)}
    </ListingToolbar>

    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <ListingHeader
          headers={headers}
          numSelected={selected?.length || 0}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={data?.length}
        />

        <TableBody>
          {hasLoader ? <ListingLoader cols={headers.length + 1} /> : null}

          {data
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item: any, index: number) => (
              <ListingLine
                key={`line-${index}`}
                data={item}
                headers={headers}
                handleCheckClick={handleCheckClick}
                onClick={onClick}
                handleKeyDown={handleKeyDown}
                isSelected={isSelected && isSelected(item.id)}
                searchValue={searchValue}
              />
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={data?.length ?? 0}
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
);

ListingBranch.defaultProps = {
  title: "",
  data: [],
  selected: [],
  onFilter: () => {},
  isSelected: () => {},
  isIntegrated: false,
};

export default withStyles(styles as any)(ListingBranch);

import React from "react";
import {
  TableCell,
  TableRow,
  LinearProgress,
  withStyles,
} from "@material-ui/core";

const styles = {
  row: {
    height: "auto",
  },
  cell: {
    border: 0,
    padding: 0,
  },
  progress: {
    width: "100%",
  },
};

type ListingLoaderProps = {
  cols?: number;
  classes: {
    [key: string]: string;
  };
};

const ListingLoader: React.SFC<ListingLoaderProps> = ({ cols, classes }) => (
  <TableRow className={classes.row}>
    <TableCell padding="none" colSpan={cols} className={classes.cell}>
      <LinearProgress variant="query" className={classes.progress} />
    </TableCell>
  </TableRow>
);

ListingLoader.defaultProps = {
  cols: 1,
};

export default withStyles(styles)(ListingLoader);

import React, { FunctionComponent } from "react";
import {
  TableCell,
  TableRow,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
}));

type ListingLoaderProps = {
  cols?: number;
};

const ListingLoader: FunctionComponent<ListingLoaderProps> = ({ cols = 1 }) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.row}>
      <TableCell padding="none" colSpan={cols} className={classes.cell}>
        <LinearProgress variant="query" className={classes.progress} />
      </TableCell>
    </TableRow>
  );
};

export default ListingLoader;

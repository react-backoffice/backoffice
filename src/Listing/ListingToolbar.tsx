import React from "react";
import classNames from "classnames";
import { Toolbar, Typography, withStyles } from "@material-ui/core";
import ListingSearch from "./ListingSearch";

const toolbarStyles = (theme: any) => ({
  root: {
    paddingRight: 2,
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.dark,
          backgroundColor: theme.palette.secondary.light,
        }
      : {
          color: theme.palette.secondary.light,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: "1 1 100%",
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: "0 0 auto",
  },
});

type ListingToolbarProps = {
  title: string;
  numSelected: number;
  onFilter: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};

const ListingToolbar: React.SFC<ListingToolbarProps> = ({
  title,
  numSelected,
  onFilter,
  classes,
  children,
}) => (
  <Toolbar
    className={classNames(classes.root, {
      [classes.highlight]: numSelected > 0,
    })}
  >
    <div className={classes.title}>
      {numSelected > 0 ? (
        <Typography variant="subtitle1">
          {numSelected}
          &nbsp;selected
        </Typography>
      ) : (
        <Typography variant="h6">{title}</Typography>
      )}
    </div>

    <div className={classes.spacer} />

    <div className={classes.actions}>
      {numSelected > 0 ? children : <ListingSearch onFilter={onFilter} />}
    </div>
  </Toolbar>
);

export default withStyles(toolbarStyles as any)(ListingToolbar) as any;

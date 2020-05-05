import React from "react";
import classNames from "classnames";
import { TextField, Tooltip, IconButton, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme: any) => ({
  root: {
    position: "relative",
    marginRight: theme.spacing(),
  },
  field: {
    position: "absolute",
    right: "100%",
    width: 0,
    marginTop: theme.spacing(),
    transition: "width 0.25s",
  },
  fieldActive: {
    width: theme.spacing(30),
  },
});

type ListingSearchBranchProps = {
  open: boolean;
  placeholder?: string;
  onClick: (...args: any[]) => any;
  onFilter: (...args: any[]) => any;
  getSearchRef: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};

const ListingSearchBranch: React.SFC<ListingSearchBranchProps> = ({
  open,
  placeholder,
  onClick,
  onFilter,
  getSearchRef,
  classes,
}) => (
  <div className={classes.root}>
    <TextField
      type="search"
      placeholder={placeholder}
      className={classNames(classes.field, {
        [classes.fieldActive]: open,
      })}
      onChange={onFilter}
      inputProps={{
        ref: (node: any) => {
          getSearchRef(node);
        },
      }}
    />
    <Tooltip title="Search">
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Tooltip>
  </div>
);

ListingSearchBranch.defaultProps = {
  placeholder: "Filter",
};

export default withStyles(styles as any)(ListingSearchBranch);

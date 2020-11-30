import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
  TextField,
  Tooltip,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

type Props = {
  isOpen?: boolean;
  placeholder?: string;
  onFilter?: (...args: any[]) => any;
};

const ListingSearch: FunctionComponent<Props> = ({
  isOpen: isOpenProp,
  placeholder,
  onFilter,
}) => {
  const searchRef = useRef<HTMLInputElement>();
  const [isOpen, setIsOpen] = useState(isOpenProp);
  const classes = useStyles();

  useEffect(() => {
    if (isOpen) {
      searchRef.current?.focus();
    }
  }, [isOpen]);

  const handleFilter = (event: any) => {
    if (!onFilter) {
      return;
    }

    const { value } = event.target;

    onFilter(isOpen ? value : undefined);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (onFilter) {
      onFilter(undefined);
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        type="search"
        placeholder={placeholder}
        className={classNames(classes.field, {
          [classes.fieldActive]: isOpen,
        })}
        onChange={handleFilter}
        inputRef={searchRef}
      />

      <Tooltip title="Search">
        <IconButton onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ListingSearch;

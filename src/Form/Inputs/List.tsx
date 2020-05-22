import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { Theme, makeStyles } from "@material-ui/core";
import Input from "./Input";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    flexDirection: "column",
  },
  list: {
    position: "absolute",
    top: theme.spacing(9),
    width: "100%",
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: "0.25s",
  },
  listActive: {
    height: "auto",
    opacity: 1,
  },
  selectedItem: {
    display: "inline-flex",
    margin: "0.125rem",
  },
}));

type Props = {
  className: string;
  id: string;
  onChange: (...args: any) => any;
};

const List: FunctionComponent<Props> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <Input {...rest} />
    </div>
  );
};

export default List;

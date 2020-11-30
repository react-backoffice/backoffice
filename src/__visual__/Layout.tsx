import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base";
import menuData from "./data/menu";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "80rem",
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(5),

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },

    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(5),
    },
  },
}));

const Layout: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Base
      title="Backoffice"
      menuData={menuData}
      isHeaderFixed
      history={history}
    >
      <div className={classes.root}>{children}</div>
    </Base>
  );
};

export default Layout;

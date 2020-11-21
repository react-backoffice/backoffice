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
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: theme.spacing(5),

    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },

    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },

    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
}));

const Layout: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Base
      title="This is Backoffice"
      menuData={menuData}
      isHeaderFixed
      history={history}
    >
      <div className={classes.root}>{children}</div>
    </Base>
  );
};

export default Layout;

import React, { FunctionComponent } from "react";
import Base from "../Base";
import menuData from "./data/menu";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "80rem",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
}));

const Layout: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <Base title="This is Backoffice" menuData={menuData}>
      <div className={classes.root}>{children}</div>
    </Base>
  );
};
export default Layout;

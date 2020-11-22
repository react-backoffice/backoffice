import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

import Menu from "../../Menu";
import menuData from "../data/menu";
import AddButton from "../../AddButton";
import BackButton from "../../BackButton";

import Tabs from "../../Tabs";
import tabData from "../data/tabs";

const noop = () => {};

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    maxWidth: "40rem",
    marginTop: "3rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  headline: {
    marginTop: theme.spacing(4),
  },
}));

const Page: FunctionComponent<any> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <Typography variant="h1">Backoffice</Typography>
        <Typography>
          Backoffice is a Framework based on{" "}
          <a href="https://material-ui.io">Material UI</a>, a Material Design
          React implementation that provides a couple of components you might
          want to use in a backoffice app.
        </Typography>
      </div>

      <Typography variant="h4" className={classes.headline}>
        Tabs
      </Typography>

      <Tabs data={tabData} />

      <Typography variant="h4" className={classes.headline}>
        Menu
      </Typography>

      <Menu data={menuData} redirectTo={noop} {...props} />

      <AddButton onClick={noop} />

      <Typography variant="h4" className={classes.headline}>
        Back Button
      </Typography>

      <BackButton url="/root" />
    </>
  );
};

export default Page;

import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import Dashboard from "../../Dashboard";
import dashboardData from "../data/dashboard";

import Menu from "../../Menu";
import menuData from "../data/menu";
import AddButton from "../../AddButton";
import BackButton from "../../BackButton";

import Tabs from "../../Tabs";
import tabData from "../data/tabs";

const noop = () => {};

const styles = (theme: any) => ({
  headline: {
    marginTop: theme.spacing(4),
  },
});

interface Props {
  classes: {
    [key: string]: string;
  };
}

class Page extends React.Component<Props> {
  render() {
    const { classes, ...props } = this.props;

    return (
      <>
        <Dashboard data={dashboardData} {...props} />

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
  }
}

export default withStyles(styles)(Page);

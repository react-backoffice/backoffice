import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import DashboardGroup from "./DashboardGroup";
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing(140),
    marginLeft: "auto",
    marginRight: "auto",
  },
  headline: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
});

interface Groups {
  id: string;
  title: string;
  cards: any;
}

type DashboardBranchProps = {
  data: {
    groups: Groups[];
    [key: string]: any;
  };
  onClick: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};

const DashboardBranch: React.SFC<DashboardBranchProps> = ({
  data,
  onClick,
  classes,
}) => (
  <div className={classes.root}>
    <div className={classes.headline}>
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="body2">{data.description}</Typography>
    </div>

    {data.groups
      ? data.groups.map((group) => (
          <DashboardGroup
            key={`group-${group.id}`}
            onClick={onClick}
            {...group}
          />
        ))
      : null}
  </div>
);
export default withStyles(styles)(DashboardBranch);

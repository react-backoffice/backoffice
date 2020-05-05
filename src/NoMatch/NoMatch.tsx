import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography, withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "60rem",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    height: "calc(100vh - 104px)",
  },
});

type NoMatchProps = {
  title?: string;
  description?: React.ReactNode;
  classes: {
    [key: string]: string;
  };
};

const NoMatch: React.SFC<NoMatchProps> = ({ title, description, classes }) => (
  <div className={classes.root}>
    <div>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h4" paragraph>
        {description}
      </Typography>
    </div>
  </div>
);

NoMatch.defaultProps = {
  title: "404! Sorry, not found.",
  description: (
    <Fragment>
      This URL does not exist, sorry. Please start over from the{" "}
      <Link href="/" to="/">
        Dashboard
      </Link>
      .
    </Fragment>
  ),
};

export default withStyles(styles)(NoMatch);

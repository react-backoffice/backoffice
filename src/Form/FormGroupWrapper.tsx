import React from "react";
import classNames from "classnames";
import { Paper, withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
  group: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
  },
  groupIntegrated: {
    paddingTop: theme.spacing(3),
  },
  hidden: {
    display: "none",
  },
});

type FormGroupWrapperProps = {
  isPaper?: boolean;
  isVisible?: boolean;
  classes: {
    [key: string]: string;
  };
};

const FormGroupWrapper: React.SFC<FormGroupWrapperProps> = ({
  isPaper,
  isVisible,
  classes,
  children,
  ...rest
}) => {
  if (isPaper) {
    return (
      <Paper
        className={classNames(classes.group, {
          [classes.hidden]: !isVisible,
        })}
        {...rest}
      >
        {children}
      </Paper>
    );
  }

  return (
    <div
      className={classNames(classes.groupIntegrated, {
        [classes.hidden]: !isVisible,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

FormGroupWrapper.defaultProps = {
  isPaper: true,
  isVisible: true,
};

export default withStyles(styles)(FormGroupWrapper);

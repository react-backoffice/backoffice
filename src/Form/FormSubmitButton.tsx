import React from "react";
import classNames from "classnames";
import { Button, CircularProgress, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = (theme: any) => ({
  root: {
    position: "relative",
    display: "inline-block",
  },
  fixed: {
    position: "fixed",
    right: theme.spacing(5),
    bottom: theme.spacing(3),
    marginBottom: theme.spacing(),
  },
  button: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  progress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

type FormSubmitButtonProps = {
  onSubmit: (...args: any[]) => any;
  disabled?: boolean;
  loading?: boolean;
  fixed?: boolean;
  classes: {
    [key: string]: string;
  };
};

const FormSubmitButton: React.SFC<FormSubmitButtonProps> = ({
  onSubmit,
  disabled,
  loading,
  fixed,
  classes,
  children,
}) => {
  const wrapperClasses = classNames(classes.root, {
    [classes.fixed]: fixed,
  });
  return (
    <div className={wrapperClasses}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        disabled={disabled}
        onClick={onSubmit}
      >
        {children}
      </Button>

      {loading ? (
        <CircularProgress size={24} className={classes.progress} />
      ) : null}
    </div>
  );
};
FormSubmitButton.defaultProps = {
  disabled: false,
  loading: false,
  fixed: false,
};

export default withStyles(styles as any)(FormSubmitButton);

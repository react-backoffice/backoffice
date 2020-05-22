import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Button, CircularProgress, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    display: "inline-block",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
}));

type Props = {
  onSubmit: (...args: any[]) => any;
  disabled?: boolean;
  loading?: boolean;
  fixed?: boolean;
};

const FormSubmitButton: FunctionComponent<Props> = ({
  onSubmit,
  disabled = false,
  loading = false,
  fixed = false,
  children,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(classes.root, {
        [classes.fixed]: fixed,
      })}
    >
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        disabled={disabled}
        onClick={onSubmit}
      >
        {children}
      </Button>

      {loading && <CircularProgress size={24} className={classes.progress} />}
    </div>
  );
};

export default FormSubmitButton;

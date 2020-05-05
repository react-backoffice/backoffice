import React from "react";
import { withStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = (theme: any) => ({
  button: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
});

type AddButtonProps = {
  onClick: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};

const AddButton: React.SFC<AddButtonProps> = ({ onClick, classes }) => (
  <Fab
    color="secondary"
    aria-label="add"
    className={classes.button}
    onClick={onClick}
  >
    <AddIcon />
  </Fab>
);
export default withStyles(styles as any)(AddButton);

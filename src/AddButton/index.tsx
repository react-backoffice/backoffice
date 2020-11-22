import React, { FunctionComponent } from "react";
import { Fab, Theme, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

type AddButtonProps = {
  onClick: (...args: any[]) => any;
};

const AddButton: FunctionComponent<AddButtonProps> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab
      color="secondary"
      aria-label="add"
      className={classes.button}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;

import React from "react";
import { Snackbar as MaterialSnackbar } from "@material-ui/core";

type SnackbarProps = {
  isOpen?: boolean;
  message: string;
};

const Snackbar: React.SFC<SnackbarProps> = ({ isOpen, message }) => (
  <MaterialSnackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    open={isOpen}
    autoHideDuration={6000}
    ContentProps={{
      "aria-describedby": "message-id",
    }}
    message={<span id="message-id">{message}</span>}
  />
);

Snackbar.defaultProps = {
  isOpen: false,
};

export default Snackbar;

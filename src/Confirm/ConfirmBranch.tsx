import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles,
} from "@material-ui/core";
const styles = (theme: any) => ({
  primaryButton: {
    color: theme.palette.primary.dark,
  },
});
type ConfirmBranchProps = {
  isOpen: boolean;
  title?: string;
  description: string;
  agreeText: string;
  disagreeText: string;
  onClose: (...args: any[]) => any;
  onConfirm: (...args: any[]) => any;
  hasCloseButton: boolean;
  classes: {
    [key: string]: string;
  };
};
const ConfirmBranch: React.SFC<ConfirmBranchProps> = ({
  title,
  description,
  isOpen,
  disagreeText,
  agreeText,
  hasCloseButton,
  onClose,
  onConfirm,
  classes,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    {title ? <DialogTitle id="alert-dialog-title">{title}</DialogTitle> : null}

    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      {hasCloseButton ? (
        <Button onClick={onClose} color="primary">
          {disagreeText}
        </Button>
      ) : null}

      <Button
        onClick={onConfirm}
        color="primary"
        autoFocus
        className={classes.primaryButton}
      >
        {agreeText}
      </Button>
    </DialogActions>
  </Dialog>
);

ConfirmBranch.defaultProps = {
  title: undefined,
};

export default withStyles(styles)(ConfirmBranch);

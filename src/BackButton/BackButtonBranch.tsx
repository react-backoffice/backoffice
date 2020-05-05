import React from "react";
import { Button, withStyles } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBackIos";
const styles = (theme: any) => ({
  leftIcon: {
    marginRight: theme.spacing(),
  },
});
type BackButtonBranchProps = {
  onNavigateBack: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};
const BackButtonBranch: React.SFC<BackButtonBranchProps> = ({
  onNavigateBack,
  classes,
}) => (
  <Button onClick={onNavigateBack}>
    <BackIcon className={classes.leftIcon} />
    Back
  </Button>
);
export default withStyles(styles)(BackButtonBranch);

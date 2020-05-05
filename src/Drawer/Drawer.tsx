import React from "react";
import {
  Drawer as MaterialDrawer,
  Divider,
  IconButton,
  withStyles,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Menu from "../Menu";
import { MenuDataItem } from "../Menu/Menu";
const drawerWidth = 280;
const styles = (theme: any) => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    height: theme.spacing(8),
  },
});

type DrawerProps = {
  data: MenuDataItem[];
  isOpen?: boolean;
  onClose: (...args: any[]) => any;
  redirectTo: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};

const Drawer: React.SFC<DrawerProps> = ({
  data,
  isOpen,
  onClose,
  redirectTo,
  classes,
}) => (
  <MaterialDrawer
    variant="persistent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
    open={isOpen}
  >
    <div className={classes.drawerInner}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />

      <Menu data={data} redirectTo={redirectTo} />
    </div>
  </MaterialDrawer>
);
Drawer.defaultProps = {
  isOpen: false,
};
export default withStyles(styles as any)(Drawer);

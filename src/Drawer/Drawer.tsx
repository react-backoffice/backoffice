import React from "react";
import {
  Drawer as MaterialDrawer,
  Divider,
  IconButton,
  Theme,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Menu from "../Menu";
import { MenuDataItem } from "../Menu/Menu";
import { makeStyles } from "@material-ui/styles";

const drawerWidth = 280;
const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    height: theme.spacing(8),
  },
}));

type DrawerProps = {
  data: MenuDataItem[];
  isOpen?: boolean;
  onClose: (...args: any[]) => any;
  redirectTo: (...args: any[]) => any;
};

const Drawer: React.SFC<DrawerProps> = ({
  data,
  isOpen = false,
  onClose,
  redirectTo,
}) => {
  const classes = useStyles();

  return (
    <MaterialDrawer
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={isOpen}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />

      <Menu data={data} redirectTo={redirectTo} />
    </MaterialDrawer>
  );
};

export default Drawer;

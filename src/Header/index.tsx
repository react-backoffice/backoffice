import React, { FunctionComponent } from "react";
import classNames from "classnames";
import {
  AppBar,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DRAWER_WIDTH } from "../Drawer";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "translate(0, 0)",
  },

  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: DRAWER_WIDTH,
  },

  isStatic: {
    position: "relative",
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  flex: {
    flex: 1,
  },

  title: {
    paddingLeft: theme.spacing(2),
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

type HeaderProps = {
  isOpen?: boolean;
  title: string;
  isFixed?: boolean;
  onDrawerOpen: (...args: any[]) => any;
  onClick: (...args: any[]) => any;
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  isOpen = false,
  isFixed = false,
  onDrawerOpen,
  onClick,
  children,
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isOpen,
        [classes.isStatic]: !isFixed,
      })}
      position={isFixed ? "fixed" : "static"}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          color="inherit"
          onClick={onDrawerOpen}
          className={classNames(classes.menuButton, isOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          color="inherit"
          className={classNames(classes.flex, classes.title)}
          onClick={onClick}
        >
          {title}
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

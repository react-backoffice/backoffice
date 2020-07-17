import React from "react";
import classNames from "classnames";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 280;

const styles = (theme: any) => ({
  root: {
    width: "100%",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "translate(0, 0)",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
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
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

type HeaderProps = {
  isOpen?: boolean;
  title: string;
  isFixed?: boolean;
  onDrawerOpen: (...args: any[]) => any;
  onClick: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};

const Header: React.SFC<HeaderProps> = ({
  title,
  isOpen,
  isFixed = false,
  onDrawerOpen,
  onClick,
  children,
  classes,
}) => (
  <div className={classes.root}>
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
          className={`${classes.flex} ${classes.title}`}
          onClick={onClick}
        >
          {title}
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  </div>
);

Header.defaultProps = {
  isOpen: false,
};

export default withStyles(styles as any)(Header);

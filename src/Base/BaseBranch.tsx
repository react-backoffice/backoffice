import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Drawer from "../Drawer";
import Header from "../Header";
import { MenuDataItem } from "../Menu/Menu";

const drawerWidth = 280;

const styles = (theme: any) => ({
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    transition: "0.25s",
  },
  content: {
    width: `calc(100vw - ${theme.spacing(3) * 2}px)`,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "calc(100% - 56px)",
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

type BaseBranchProps = {
  open?: boolean;
  title: string;
  menuData: MenuDataItem[];
  isHeaderFixed?: boolean;
  onClick: (...args: any[]) => any;
  handleDrawerOpen: (...args: any[]) => any;
  handleDrawerClose: (...args: any[]) => any;
  redirectTo: (...args: any[]) => any;
  rightContent?: JSX.Element;
  hasHeader: boolean;
  classes: {
    [key: string]: string;
  };
};

const BaseBranch: React.SFC<BaseBranchProps> = ({
  open,
  title,
  menuData,
  isHeaderFixed,
  onClick,
  handleDrawerOpen,
  handleDrawerClose,
  redirectTo,
  rightContent,
  hasHeader = true,
  classes,
  children,
  ...rest
}) => (
  <>
    {hasHeader && (
      <Header
        title={title}
        onDrawerOpen={handleDrawerOpen}
        onClick={onClick}
        isOpen={open}
        isFixed={isHeaderFixed}
      >
        {rightContent || null}
      </Header>
    )}

    <div className={classNames(classes.appFrame)}>
      {hasHeader && (
        <Drawer
          onClose={handleDrawerClose}
          redirectTo={redirectTo}
          isOpen={open}
          data={menuData}
        />
      )}

      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open || !hasHeader,
        })}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as any, {
            ...rest,
          }),
        )}
      </main>
    </div>
  </>
);

BaseBranch.defaultProps = {
  open: false,
  isHeaderFixed: false,
};

export default withStyles(styles as any)(BaseBranch);

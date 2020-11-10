import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Drawer from "../Drawer";
import Header from "../Header";
import { MenuDataItem } from "../Menu/Menu";

const drawerWidth = 280;

const styles = (theme: any) => ({
  appFrame: {
    display: "flex",
  },

  content: {
    width: `calc(100vw - ${theme.spacing(3) * 2}px)`,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "calc(100% - 56px)",
  },

  contentIsOpen: {
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    paddingLeft: drawerWidth,
  },

  isHeaderFixed: {
    marginTop: theme.spacing(8),
  },
});

type BaseBranchProps = {
  open?: boolean;
  title: string;
  menuData: MenuDataItem[];
  menuOpen?: boolean;
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
  <div className={classNames(classes.appFrame)}>
    {hasHeader && (
      <>
        <Header
          title={title}
          onDrawerOpen={handleDrawerOpen}
          onClick={onClick}
          isOpen={open}
          isFixed={isHeaderFixed}
        >
          {rightContent || null}
        </Header>

        <Drawer
          onClose={handleDrawerClose}
          redirectTo={redirectTo}
          isOpen={open}
          data={menuData}
        />
      </>
    )}

    <main
      className={classNames(classes.content, {
        [classes.contentIsOpen]: open || !hasHeader,
        [classes.isHeaderFixed]: isHeaderFixed,
      })}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child as any, {
          ...rest,
        }),
      )}
    </main>
  </div>
);

BaseBranch.defaultProps = {
  open: false,
  isHeaderFixed: false,
};

export default withStyles(styles as any)(BaseBranch);

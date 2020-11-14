import React from "react";
import classNames from "classnames";
import Drawer from "../Drawer";
import Header from "../Header";
import { MenuDataItem } from "../Menu/Menu";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 280;

const useStyles = makeStyles((theme: any) => ({
  "@global html": {
    scrollBehavior: "smooth",
  },

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
}));

type BaseBranchProps = {
  isOpen?: boolean;
  title: string;
  menuData: MenuDataItem[];
  menuOpen?: boolean;
  isHeaderFixed?: boolean;
  onClick: (...args: any[]) => any;
  onDrawerOpen: (...args: any[]) => any;
  onDrawerClose: (...args: any[]) => any;
  redirectTo: (...args: any[]) => any;
  rightContent?: JSX.Element;
  hasHeader?: boolean;
};

const BaseBranch: React.SFC<BaseBranchProps> = ({
  isOpen = false,
  title,
  menuData,
  isHeaderFixed = false,
  onClick,
  onDrawerOpen,
  onDrawerClose,
  redirectTo,
  rightContent,
  hasHeader = true,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.appFrame)}>
      {hasHeader && (
        <>
          <Header
            title={title}
            onDrawerOpen={onDrawerOpen}
            onClick={onClick}
            isOpen={isOpen}
            isFixed={isHeaderFixed}
          >
            {rightContent || null}
          </Header>

          <Drawer
            onClose={onDrawerClose}
            redirectTo={redirectTo}
            isOpen={isOpen}
            data={menuData}
          />
        </>
      )}

      <main
        className={classNames(classes.content, {
          [classes.contentIsOpen]: isOpen || !hasHeader,
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
};

export default BaseBranch;

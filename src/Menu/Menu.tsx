import React, { Fragment, FunctionComponent } from "react";
import { Divider, List, makeStyles, Theme } from "@material-ui/core";
import classNames from "classnames";
import MenuItem from "./MenuItem";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper,
  },

  submenu: {
    paddingTop: 0,
  },

  subitem: {
    paddingLeft: theme.spacing(4),
  },
}));

type MenuItemBase = {
  title: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  items?: MenuItemLink[];
};
type MenuItemLabel = MenuItemBase & {
  type: "label";
};

type MenuItemLink = MenuItemBase & {
  type: "link";
  url: string;
};

type MenuItemDivider = {
  type: "divider";
};

export type MenuDataItem = MenuItemLink | MenuItemLabel | MenuItemDivider;

type MenuProps = {
  redirectTo: (...args: any[]) => any;
  data: MenuDataItem[];
  className?: string;
  isDense?: boolean;
  menuItemClassName?: string;
};

const Menu: FunctionComponent<MenuProps> = ({
  data,
  redirectTo,
  isDense = false,
  menuItemClassName,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <List dense={isDense} className={isDense ? classes.submenu : ""}>
        {data.map((item, index) => {
          switch (item.type) {
            case "divider":
              return <Divider key={`menu-${index}`} />;
            default:
              return (
                <Fragment key={`menu-${index}`}>
                  <MenuItem
                    redirectTo={redirectTo}
                    url={(item as any).url}
                    title={item.title}
                    isButton={item.type === "link"}
                    isDisabled={item.isDisabled}
                    icon={item.icon}
                    className={menuItemClassName}
                  />

                  {item.items && (
                    <Menu
                      data={item.items}
                      redirectTo={redirectTo}
                      isDense
                      menuItemClassName={classes.subitem}
                    />
                  )}
                </Fragment>
              );
          }
        })}
      </List>
    </div>
  );
};

export default Menu;

import React, { FunctionComponent } from "react";
import {
  Divider,
  List,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
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
}));

type MenuItemLink = {
  type: "link";
  url: string;
  title: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  items?: MenuItemLink[];
};

type MenuItemDivider = {
  type: "divider";
};

export type MenuDataItem = MenuItemLink | MenuItemDivider;

type MenuProps = {
  redirectTo: (...args: any[]) => any;
  data: MenuDataItem[];
  className?: string;
  isDense?: boolean;
};

const Menu: FunctionComponent<MenuProps> = ({
  data,
  redirectTo,
  isDense = false,
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
                <>
                  <MenuItem
                    key={`menu-${index}`}
                    redirectTo={redirectTo}
                    url={item.url}
                    title={item.title}
                    isDisabled={item.isDisabled}
                    icon={item.icon}
                  />

                  {item.items && (
                    <Menu data={item.items} redirectTo={redirectTo} isDense />
                  )}
                </>
              );
          }
        })}
      </List>
    </div>
  );
};

export default Menu;

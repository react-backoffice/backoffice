import React from "react";
import { Divider, List, withStyles } from "@material-ui/core";
import MenuItem from "./MenuItem";

const styles = (theme: any) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

type MenuItemLink = {
  type: "link";
  url: string;
  title: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
};

type MenuItemDivider = {
  type: "divider";
};

export type MenuDataItem = MenuItemLink | MenuItemDivider;

type MenuProps = {
  redirectTo: (...args: any[]) => any;
  data: MenuDataItem[];
  classes: {
    [key: string]: string;
  };
};

const Menu: React.SFC<MenuProps> = ({ data, redirectTo, classes }) => (
  <div className={classes.root}>
    <List>
      {data.map((item, index) => {
        switch (item.type) {
          case "divider":
            return <Divider key={`menu-${index}`} />;
          default:
            return (
              <MenuItem
                key={`menu-${index}`}
                redirectTo={redirectTo}
                url={item.url}
                title={item.title}
                isDisabled={item.isDisabled}
                icon={item.icon}
              />
            );
        }
      })}
    </List>
  </div>
);

export default withStyles(styles as any)(Menu);

import React, { FunctionComponent } from "react";
import classNames from "classnames";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core";

const styles = {
  isDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
};

type MenuItemProps = {
  redirectTo: (...args: any[]) => any;
  url: string;
  title: string;
  isDisabled?: boolean;
  icon?: FunctionComponent;
  classes: {
    [key: string]: string;
  };
};

const MenuItem: React.SFC<MenuItemProps> = ({
  redirectTo,
  url,
  title,
  icon: Icon,
  isDisabled,
  classes,
}) => (
  <ListItem
    button
    onClick={() => redirectTo(url)}
    className={classNames({
      [classes.isDisabled]: isDisabled,
    })}
  >
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}

    <ListItemText primary={title} />
  </ListItem>
);

MenuItem.defaultProps = {
  isDisabled: false,
};

export default withStyles(styles as any)(MenuItem);

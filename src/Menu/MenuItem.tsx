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
  icon?: JSX.Element;
  classes: {
    [key: string]: string;
  };
  className?: string;
};

const MenuItem: FunctionComponent<MenuItemProps> = ({
  redirectTo,
  url,
  title,
  icon,
  isDisabled = false,
  classes,
  className,
}) => (
  <ListItem
    button
    onClick={() => redirectTo(url)}
    className={classNames(className, {
      [classes.isDisabled]: isDisabled,
    })}
  >
    {icon && <ListItemIcon>{icon}</ListItemIcon>}

    <ListItemText primary={title} />
  </ListItem>
);

export default withStyles(styles as any)(MenuItem);

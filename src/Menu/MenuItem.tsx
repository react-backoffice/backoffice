import React, { FunctionComponent } from "react";
import classNames from "classnames";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  isDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },

  button: {
    cursor: "pointer",
    transition: "background-color 0.15s",

    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
}));

type MenuItemProps = {
  redirectTo: (...args: any[]) => any;
  url?: string;
  title: string;
  icon?: JSX.Element;
  isButton?: boolean;
  isDisabled?: boolean;
  className?: string;
};

const MenuItem: FunctionComponent<MenuItemProps> = ({
  redirectTo,
  url,
  title,
  icon,
  isDisabled = false,
  className,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      onClick={url ? () => redirectTo(url) : undefined}
      className={classNames(className, {
        [classes.button]: !!url,
        [classes.isDisabled]: isDisabled,
      })}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}

      <ListItemText primary={title} />
    </ListItem>
  );
};

export default MenuItem;

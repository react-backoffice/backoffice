import React from "react";
import classNames from "classnames";
import {
  Card,
  CardContent,
  Typography,
  withStyles,
  Avatar,
} from "@material-ui/core";
import DisabledIcon from "@material-ui/icons/Lock";

const styles = (theme: any) => ({
  root: {
    cursor: "pointer",
  },
  content: {
    paddingBottom: `${theme.spacing(2)}px !important`,
  },
  avatar: {
    float: "left",
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
  },
  title: {
    marginBottom: 0,
  },
  disabled: {
    opacity: 0.75,
    pointerEvents: "none",
    filter: "grayscale(30%)",
  },
  icon: {
    float: "right",
    opacity: 0.5,
  },
});

type DashboardCardProps = {
  title: string;
  description?: string;
  handleClick: (...args: any[]) => any;
  icon?: (...args: any[]) => any;
  isDisabled?: boolean;
  classes: {
    [key: string]: string;
  };
};

const DashboardCard: React.SFC<DashboardCardProps> = ({
  title,
  description,
  handleClick,
  icon: Icon,
  isDisabled,
  classes,
}) => {
  const rootClasses = classNames({
    [classes.root]: true,
    [classes.disabled]: isDisabled,
  });

  return (
    <Card onClick={handleClick} className={rootClasses}>
      <CardContent className={classes.content}>
        {isDisabled ? <DisabledIcon className={classes.icon} /> : null}

        {Icon ? (
          <Avatar className={classes.avatar}>
            <Icon />
          </Avatar>
        ) : null}

        <Typography variant="h5" className={classes.title} component="h2">
          {title}
        </Typography>

        {description ? (
          <Typography variant="body2">{description}</Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};
DashboardCard.defaultProps = {
  isDisabled: false,
};

export default withStyles(styles as any)(DashboardCard);

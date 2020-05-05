import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import DashboardCard from "./DashboardCard";
const styles = (theme: any) => ({
  headline: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
});

type DashboardGroupProps = {
  title: string;
  cards: Record<string, any>[];
  onClick: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
};
const DashboardGroup: React.SFC<DashboardGroupProps> = ({
  title,
  cards,
  onClick,
  classes,
}) => (
  <div>
    <div className={classes.headline}>
      <Typography variant="h5">{title}</Typography>
    </div>

    <Grid container spacing={2}>
      {cards
        ? cards.map((card) => (
            <Grid item xs={12} sm={4} key={`group-card-${card.id}`}>
              <DashboardCard
                title={card.title}
                description={card.description}
                handleClick={() => onClick(card.link)}
                icon={card.icon}
                isDisabled={card.isDisabled}
              />
            </Grid>
          ))
        : null}
    </Grid>
  </div>
);

export default withStyles(styles)(DashboardGroup);

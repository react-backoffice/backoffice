import React from 'react'
import PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

import DashboardGroup from './DashboardGroup'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing.unit * 140,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headline: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
})

const DashboardBranch = ({ data, onClick, classes }) => (
  <div className={classes.root}>
    <div className={classes.headline}>
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="body2">{data.description}</Typography>
    </div>

    {data.groups ? data.groups.map(group => (
      <DashboardGroup
        key={`group-${group.id}`}
        onClick={onClick}
        {...group}
      />
      )) : null}
  </div>
)

DashboardBranch.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(DashboardBranch)

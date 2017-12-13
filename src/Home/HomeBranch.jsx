import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Typography from 'material-ui/Typography'

import HomeGroup from './HomeGroup'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing.unit * 140,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headline: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  },
})

const HomeBranch = ({ data, handleClick, classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.headline}>
        <Typography type="display2">{data.title}</Typography>
        <Typography type="body1">{data.description}</Typography>
      </div>

      {data.groups ? data.groups.map((group, index) => (
        <HomeGroup
          key={`group-${group.id}-${index}`}
          handleClick={handleClick}
          {...group}
        />
      )) : null}
    </div>
  )
}

HomeBranch.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeBranch)

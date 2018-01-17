import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60rem',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'calc(100vh - 104px)',
  },
})

const NoMatch = ({ classes }) => (
  <div className={classes.root}>
    <div>
      <Typography type="display3">
        404! Sorry, not found.
      </Typography>
      <Typography type="display1" paragraph>
        This URL does not exist, sorry. Please start over from
        the <Link href="/">Dashboard</Link>.
      </Typography>
    </div>
  </div>
)

NoMatch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(NoMatch)

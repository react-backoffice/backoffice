import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import MaterialTabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
})

class Tabs extends React.Component {
  static propTypes = {
    scrollable: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    scrollable: false,
  }

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value })
  };

  render() {
    const { scrollable, data, classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <MaterialTabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable={scrollable}
            scrollButtons="auto"
          >
            {data.map(item => (
              <Tab
                key={`tab-${(Math.random() * 100).toFixed(2)}`}
                label={item.title}
              />
            ))}
          </MaterialTabs>
        </AppBar>

        {data.map((item, index) => {
          if (value === index) {
            return (
              <TabContainer>{item.content}</TabContainer>
            )
          }

          return null
        })}
      </div>
    )
  }
}

export default withStyles(styles)(Tabs)

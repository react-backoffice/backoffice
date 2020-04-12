import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  AppBar,
  withStyles,
  Tabs as MaterialTabs,
  Tab,
  Typography,
} from '@material-ui/core'

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
    marginTop: theme.spacing() * 3,
    backgroundColor: theme.palette.background.paper,
  },
})

class Tabs extends React.Component {
  static propTypes = {
    isScrollable: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    isScrollable: false,
  }

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    value: 0,
  }

  componentDidMount() {
    const { data } = this.props
    const hash = window.location.hash.replace('#/', '')
    let value = 0

    if (data && data.constructor === Array) {
      data.forEach((item, index) => {
        if (item.id === hash) {
          value = index
        }
      })
    }

    this.setState({
      value,
    })
  }

  handleChange(event, value) {
    const hash = this.props.data[value].id || value

    window.location.hash = `#/${hash}`

    this.setState({ value })
  }

  render() {
    const { isScrollable, data, classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <MaterialTabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            variant={isScrollable ? "scrollable" : undefined}
            scrollButtons="auto"
          >
            {data.map(item => (
              <Tab
                key={`tab-${(Math.random() * 10000).toFixed(4)}`}
                label={item.title}
              />
            ))}
          </MaterialTabs>
        </AppBar>

        {data.map((item, index) => {
          if (value === index) {
            return (
              <TabContainer
                key={`tabcontainer-${(Math.random() * 10000).toFixed(4)}`}
              >
                {item.content}
              </TabContainer>
            )
          }

          return null
        })}
      </div>
    )
  }
}

const tabsWithStyles = withStyles(styles)(Tabs)
export default withRouter(tabsWithStyles)

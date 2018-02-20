import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import HomeBranch from './HomeBranch'

const withHome = Component => class extends React.Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Component
        {...this.props}
        handleClick={this.handleClick}
      />
    )
  }
}

const Home = withHome(HomeBranch)

export default withRouter(Home)

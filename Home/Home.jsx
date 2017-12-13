import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import HomeBranch from './HomeBranch'

const withHome = (Component) => class extends React.Component {
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

Home.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Home)

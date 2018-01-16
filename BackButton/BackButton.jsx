import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import BackButtonBranch from './BackButtonBranch'

const withBackButton = Component => class extends React.Component {
  constructor() {
    super()

    this.handleBack = this.handleBack.bind(this)
  }

  handleBack() {
    const { url, history } = this.props

    history.push(url)
  }

  render() {
    return (
      <Component
        {...this.props}
        handleBack={this.handleBack}
      />
    )
  }
}

const BackButton = withBackButton(BackButtonBranch)

BackButton.propTypes = {
  url: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(BackButton)

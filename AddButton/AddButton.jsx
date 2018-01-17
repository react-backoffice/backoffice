import React from 'react'
import PropTypes from 'prop-types'

import AddButtonBranch from './AddButtonBranch'

const withAddButton = Component => class extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Component {...this.props} />
    )
  }
}

export default withAddButton(AddButtonBranch)

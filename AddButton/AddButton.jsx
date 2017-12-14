import React from 'react'
import PropTypes from 'prop-types'

import AddButtonBranch from './AddButtonBranch'

const withAddButton = (Component) => class extends React.Component {
  render() {
    return (
      <Component {...this.props} />
    )
  }
}

const AddButton = withAddButton(AddButtonBranch)

AddButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default AddButton

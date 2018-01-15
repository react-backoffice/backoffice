import React from 'react'
import PropTypes from 'prop-types'

import ConfirmBranch from './ConfirmBranch'

const withConfirm = (Component) => class Confirm extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.open !== nextProps.open) {
      this.setState({
        open: nextProps.open
      })
    }
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  handleConfirm() {
    this.setState({
      open: false
    })

    this.props.onConfirm()
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onClose={this.handleClose}
        onConfirm={this.handleConfirm}
      />
    )
  }
}

const Confirm = withConfirm(ConfirmBranch)

Confirm.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  agreeText: PropTypes.string.isRequired,
  disagreeText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

Confirm.defaultProps = {
  open: false,
  agreeText: 'Agree',
  disagreeText: 'Disagree',
}

export default Confirm

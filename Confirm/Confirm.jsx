import React from 'react'
import PropTypes from 'prop-types'

import ConfirmBranch from './ConfirmBranch'

const withConfirm = Component => class Confirm extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    agreeText: PropTypes.string,
    disagreeText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: null,
    open: false,
    agreeText: 'Agree',
    disagreeText: 'Disagree',
  }

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
        open: nextProps.open,
      })
    }
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  handleConfirm() {
    this.setState({
      open: false,
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

export default withConfirm(ConfirmBranch)

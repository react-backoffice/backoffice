import React from 'react'
import PropTypes from 'prop-types'

import ConfirmBranch from './ConfirmBranch'

const withConfirm = Component => class extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    agreeText: PropTypes.string,
    disagreeText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    title: null,
    open: false,
    agreeText: 'Agree',
    disagreeText: 'Disagree',
    onClose: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  componentWillMount() {
    this.setState({
      open: this.props.open,
    })
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

    this.props.onClose()
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

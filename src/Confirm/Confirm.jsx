import React from 'react'
import PropTypes from 'prop-types'

import ConfirmBranch from './ConfirmBranch'

const withConfirm = Component => class extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    agreeText: PropTypes.string,
    disagreeText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func,
    hasCloseButton: PropTypes.bool,
  }

  static defaultProps = {
    title: null,
    isOpen: false,
    agreeText: 'Agree',
    disagreeText: 'Disagree',
    onClose: () => {},
    hasCloseButton: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  componentDidMount() {
    this.setState({
      isOpen: this.props.isOpen,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isOpen !== nextProps.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen,
      })
    }
  }

  handleClose() {
    this.setState({
      isOpen: false,
    })

    this.props.onClose()
  }

  handleConfirm() {
    this.setState({
      isOpen: false,
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

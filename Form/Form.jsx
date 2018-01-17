import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import FormBranch from './FormBranch'

const withForm = Component => class extends React.Component {
  static propTypes = {
    form: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    onDataChanged: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
    fixedSubmit: PropTypes.bool,
  }

  static defaultProps = {
    onDataChanged: () => {},
    submitText: 'Save',
    fixedSubmit: false,
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)

    this.state = {
      data: {},
      loading: false,
    }

    this.timer = undefined

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateFieldData = this.updateFieldData.bind(this)
  }

  componentWillMount() {
    this.setState({
      data: this.props.data,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleSubmit() {
    const {
      data,
      loading,
    } = this.state

    if (!loading) {
      this.setState(
        {
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
            })
          }, 1000)
        },
      )
    }

    this.props.onSubmit(data)
  }

  updateFieldData(fieldId, value, error) {
    const data = Object.assign({}, this.state.data)

    data[fieldId] = {
      value,
      error,
    }

    this.props.onDataChanged(data)

    this.setState({
      data,
    })
  }

  render() {
    return (
      <Component
        handleSubmit={this.handleSubmit}
        updateFieldData={this.updateFieldData}
        {...this.props}
        {...this.state}
      />
    )
  }
}

const Form = withForm(FormBranch)

export default withRouter(Form)

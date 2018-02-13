import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import FormBranch from './FormBranch'
import isValid from './isValid'

const withForm = Component => class Form extends React.Component {
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

  static getInitialField(field, data) {
    const valueName = data[field.id] && data[field.id].value

    return {
      value: valueName,
      submitValue: valueName,
      error: !isValid(field.type, field.required, field.validators, valueName),
    }
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)

    this.state = {
      data: {},
      loading: false,
    }

    this.fields = {}
    this.timer = undefined

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateFieldData = this.updateFieldData.bind(this)
  }

  componentWillMount() {
    this.generateFields(this.props.form, this.props.data)
    this.generateMissingData(this.props.data)

    this.setState({
      data: this.fields,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.generateFields(nextProps.form, nextProps.data)
    this.generateMissingData(nextProps.data)

    this.setState({
      data: this.fields,
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  generateFields(fieldset, data) {
    fieldset.forEach((field) => {
      if (field.group) {
        this.generateFields(field.data, data)
        return
      }

      this.fields[field.id] = Form.getInitialField(field, data)
    })
  }

  generateMissingData(data) {
    Object.keys(data).forEach((key) => {
      if (this.fields[key]) {
        return
      }

      this.fields[key] = data[key]
    })
  }

  handleSubmit() {
    const {
      data,
      loading,
    } = this.state

    const errors = Object.values(data).map(field => field.error)

    if (errors.indexOf(true) > -1) {
      this.setState({
        error: true,
      })

      return
    }

    if (!loading) {
      this.setState(
        {
          loading: true,
          error: false,
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

  updateFieldData(fieldId, value, submitValue, error) {
    const data = Object.assign({}, this.state.data)

    data[fieldId] = {
      value,
      submitValue,
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

const newForm = withForm(FormBranch)

export default withRouter(newForm)

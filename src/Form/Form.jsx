import React from 'react'
import PropTypes from 'prop-types'

import FormBranch from './FormBranch'
import isValid from './isValid'

const withForm = Component => class Form extends React.Component {
  static propTypes = {
    form: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    onDataChanged: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
    isFixedSubmitButton: PropTypes.bool,
  }

  static defaultProps = {
    onDataChanged: () => {},
    submitText: 'Save',
    isFixedSubmitButton: false,
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
    const { form, data } = this.props
    this.generateFields(form, data)
    this.generateMissingData(data)

    this.setState({
      data: this.fields,
    })
  }

  componentWillReceiveProps({ form, data }) {
    this.generateFields(form, data)
    this.generateMissingData(data)

    this.setState({
      data: this.fields,
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  static getInitialField(field, data) {
    let valueName = data[field.id] && data[field.id].value
    let submitValue = valueName

    if (!valueName && field.value !== undefined) {
      valueName = field.value
    }

    if (typeof field.beforeSubmit === 'function') {
      submitValue = field.beforeSubmit(submitValue)
    }

    return {
      value: valueName,
      submitValue,
      error: !isValid(field.type, field.isRequired, field.validators, submitValue),
    }
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
    const { onSubmit } = this.props

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

    onSubmit(data)
  }

  updateFieldData(fieldId, value, submitValue, error) {
    const { onDataChanged } = this.props
    const { data: stateData } = this.state
    const data = {
      ...stateData,
    }

    data[fieldId] = {
      value,
      submitValue,
      error,
    }

    onDataChanged(data)

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

export default withForm(FormBranch)

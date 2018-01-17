import React from 'react'
import PropTypes from 'prop-types'

import FormFieldBranch from './FormFieldBranch'
import * as Validators from './validators'
import { TYPES } from './constants'

const withFormField = Component => class extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    validators: PropTypes.arrayOf(PropTypes.string),
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    type: 'text',
    validators: [],
    required: false,
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.initialize = this.initialize.bind(this)

    this.state = {
      listItems: [],
      value: '',
      isDirty: false,
    }
  }

  componentDidMount() {
    this.initialize(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps)
  }

  initialize(props) {
    const isList = props.type === 'list'
    const value = !isList ? props.value : ''
    let listItems = []

    if (this.state.isDirty === false && isList) {
      listItems = props.value
    }

    this.setState({
      listItems,
      value,
      isDirty: true,
    })
  }

  isValid(value) {
    const {
      type,
      validators,
      required,
    } = this.props

    if (required) {
      validators.push('required')
    }

    if (type === TYPES.EMAIL) {
      validators.push('email')
    }

    if (validators.length === 0) {
      return true
    }

    const validatorFunctions = validators.map(validator => Validators[validator])
    const validState = validatorFunctions.map((validator) => {
      if (typeof validator === 'function') {
        return validator(value)
      }

      return true
    })

    return validState.indexOf(false) === -1
  }

  handleChange(fieldId) {
    return ((event) => {
      let valueName

      if (event.target) {
        valueName = event.target.value

      // eslint-disable-next-line no-underscore-dangle
      } else if (event._isAMomentObject) {
        valueName = event.valueOf()
      }

      const error = !this.isValid(valueName)

      this.setState({
        value: valueName,
        error,
      })

      this.props.handleChange(fieldId, valueName, error)
    })
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
      />
    )
  }
}

export default withFormField(FormFieldBranch)

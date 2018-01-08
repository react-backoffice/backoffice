import React from 'react'

import FormFieldBranch from './FormFieldBranch'
import * as Validators from './validators'

const withFormField = (Component) => class extends React.Component {
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
    let { validators, required } = this.props

    if (!validators) {
      validators = []
    }

    if (required) {
      validators.push('required')
    }

    if (validators.length === 0) {
      return true
    }

    const validatorFunctions = validators.map((validator) => Validators[validator])
    const validState = validatorFunctions.map((validator) => {
      if (typeof validator === 'function') {
        return validator(value)
      }

      return true
    });

    return validState.indexOf(false) === -1
  }

  handleChange(fieldId) {
    return ((event) => {
      let value

      if (event.target) {
        value = event.target.value
      } else if (event._isAMomentObject) {
        value = event.valueOf()
      }

      const error = !this.isValid(value)

      this.setState({
        value,
        error,
      })

      this.props.handleChange(fieldId, value, error)
    }).bind(this)
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

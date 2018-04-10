import React from 'react'
import PropTypes from 'prop-types'

import { TYPES } from './constants'
import FormFieldBranch from './FormFieldBranch'
import isValid from './isValid'

const withFormField = Component => class FormField extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    validators: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ])),
    isRequired: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    getAdditionalValue: PropTypes.func,
    beforeSubmit: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    validators: [],
    isRequired: false,
    getAdditionalValue: data => data,
    beforeSubmit: null,
  }

  static getCompleteFrom(completeFrom = []) {
    return completeFrom.map((option) => {
      let { title } = option

      if (!option.title) {
        title = option
      }

      return {
        title,
        tooltip: option.tooltip,
      }
    })
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.initialize = this.initialize.bind(this)
    this.handleAddListItem = this.handleAddListItem.bind(this)
    this.handleRemoveListItem = this.handleRemoveListItem.bind(this)
  }

  state = {
    listItems: [],
    value: '',
    isDirty: false,
    completeFrom: [],
  }

  componentWillMount() {
    this.initialize(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps)
  }

  getAdditionalValue(value) {
    if (typeof this.props.getAdditionalValue === 'function') {
      return this.props.getAdditionalValue(value)
    }

    return value
  }

  getList({ value, completeFrom }) {
    let listItems = this.state.listItems.map(item => item.title)

    if (this.state.isDirty === false) {
      if (value && value.constructor === Array) {
        listItems = [
          ...value,
        ]
      } else {
        listItems = []
      }
    }

    const allCompleteFrom = FormField.getCompleteFrom(completeFrom)
    const transformedListItems = this.getAdditionalValue(listItems)

    listItems = transformedListItems.map((selectedValue) => {
      if (allCompleteFrom.length > 0) {
        return allCompleteFrom.filter(option => option.title === selectedValue)[0]
      }

      return {
        title: selectedValue,
      }
    })

    return {
      completeFrom: allCompleteFrom,
      value: '',
      isDirty: true,
      listItems,
    }
  }

  initialize(props) {
    const isList = props.type === 'list'
    let state = {}

    if (isList) {
      state = this.getList(props)
    } else {
      state = {
        value: this.getAdditionalValue(props.value),
      }
    }

    this.setState(state)
  }

  isValid(value) {
    const {
      type,
      isRequired,
      validators,
    } = this.props

    return isValid(type, isRequired, validators, value)
  }

  handleChange(fieldId) {
    return ((event) => {
      let newValue

      if (event.target) {
        newValue = event.target.value

      // eslint-disable-next-line no-underscore-dangle
      } else if (event._isAMomentObject) {
        newValue = event.valueOf()
      }

      let submitValue = newValue

      if (typeof this.props.beforeSubmit === 'function') {
        submitValue = this.props.beforeSubmit(submitValue)
      }

      const error = !this.isValid(submitValue)

      if (this.props.type === TYPES.NUMBER) {
        newValue = parseFloat(newValue, 10)
      }

      this.setState({
        value: newValue,
        error,
      })

      this.props.handleChange(fieldId, newValue, submitValue, error)
    })
  }

  handleAddListItem(option) {
    this.setState({
      listItems: [...this.state.listItems, option],
    })
  }

  handleRemoveListItem(option) {
    const listItems = [...this.state.listItems]
    const flatListItems = listItems.map(item => item.title)
    const index = flatListItems.indexOf(option.title)

    if (index > -1) {
      listItems.splice(index, 1)
    }

    this.setState({
      listItems,
    })
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        onRemoveListItem={this.handleRemoveListItem}
        onAddListItem={this.handleAddListItem}
      />
    )
  }
}

export default withFormField(FormFieldBranch)

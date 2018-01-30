import React from 'react'
import PropTypes from 'prop-types'

import FormFieldBranch from './FormFieldBranch'
import isValid from './isValid'

const withFormField = Component => class FormField extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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

  initialize(props) {
    const isList = props.type === 'list'
    const value = !isList ? props.value : ''
    let { listItems } = this.state
    let { completeFrom } = props

    if (isList) {
      completeFrom = isList ? FormField.getCompleteFrom(completeFrom) : []
    }

    if (!listItems) {
      listItems = []
    }

    if (this.state.isDirty === false && isList && props.value &&
        props.value.constructor === Array
    ) {
      listItems = props.value.map(selectedValue => (
        completeFrom.filter(option => option.title === selectedValue)[0]
      ))
    }

    this.setState({
      listItems,
      value,
      isDirty: true,
      completeFrom,
    })
  }

  isValid(value) {
    const {
      type,
      required,
      validators,
    } = this.props

    return isValid(type, required, validators, value)
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

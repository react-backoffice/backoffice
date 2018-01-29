import React from 'react'
import PropTypes from 'prop-types'

import FormFieldListBranch from './FormFieldListBranch'

const replace = (string, searchValue, replaceValue) => {
  if (!searchValue) {
    return string
  }

  const search = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  return string.replace(new RegExp(search, 'gi'), replaceValue)
}

const withFormFieldList = Component => class extends React.Component {
  static propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.string),
    completeFrom: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func.isRequired,
    onAddListItem: PropTypes.func.isRequired,
    onRemoveListItem: PropTypes.func.isRequired,
  }

  static defaultProps = {
    listItems: [],
    completeFrom: [],
  }

  constructor(props) {
    super(props)


    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  state = {
    availableOptions: [],
    showMenu: false,
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  getAvailableOptions(value) {
    const { completeFrom, listItems } = this.props
    const lowerValue = value.toLowerCase()

    let availableOptions = completeFrom.filter(option => listItems.indexOf(option) === -1)

    availableOptions = availableOptions.filter(option => (
      option.toLowerCase().indexOf(lowerValue) > -1
    ))

    availableOptions = availableOptions.map((option) => {
      const text = replace(option, lowerValue, `<b>${value}</b>`)

      return (
        <span
          dangerouslySetInnerHTML={{ __html: text }}
          text={option}
        />
      )
    })

    return availableOptions
  }

  timer = undefined

  handleChange(id) {
    return (event) => {
      const parentFunction = this.props.handleChange(id)
      const { value } = event.target

      this.setState({
        value,
        availableOptions: this.getAvailableOptions(value),
        showMenu: value.length > 0,
      })

      return parentFunction(event)
    }
  }

  handleClick(option) {
    const newOption = option.props.text

    return () => {
      this.props.onAddListItem(newOption)

      this.setState({
        value: '',
      })
    }
  }

  handleBlur() {
    this.timer = setTimeout(() => {
      this.setState({
        showMenu: false,
      })
    }, 100)
  }

  handleDelete(option) {
    return () => {
      this.props.onRemoveListItem(option)
    }
  }

  handleKeyPress(event) {
    const { value } = this.state
    const { completeFrom } = this.props

    if (event.which === 13 && completeFrom.length === 0) {
      this.props.onAddListItem(value)

      this.setState({
        value: '',
      })
    }
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onClick={this.handleClick}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
        onDelete={this.handleDelete}
      />
    )
  }
}

const FormFieldList = withFormFieldList(FormFieldListBranch)

export default FormFieldList

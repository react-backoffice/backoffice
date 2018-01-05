import React from 'react'

import FormFieldListBranch from './FormFieldListBranch'

const withFormFieldList = (Component) => class extends React.Component {
  constructor(props) {
    super(props)

    this.timer = undefined

    this.state = {
      availableOptions: [],
      listItems: [],
      showMenu: false,
      initialized: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.initialized) {
      this.setState({
        listItems: nextProps.listItems,
        initialized: true,
      })
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  getAvailableOptions(value) {
    const { completeFrom  } = this.props
    const { listItems } = this.state

    let availableOptions = completeFrom.filter((option) => {
      return listItems.indexOf(option) === -1
    })

    availableOptions = availableOptions.filter((option) => {
      return option.substr(0, value.length).toLowerCase() === value
    })

    return availableOptions
  }

  handleChange(id) {
    return (event) => {
      const parentFunction = this.props.handleChange(id)
      const value = event.target.value

      this.setState({
        value,
        availableOptions: this.getAvailableOptions(value),
        showMenu: value.length > 0,
      })

      return parentFunction(event)
    }
  }

  handleClick(option) {
    return (event) => {
      this.setState({
        listItems: [...this.state.listItems, option],
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
    return (event) => {
      const listItems = [...this.state.listItems]
      const index = listItems.indexOf(option)

      if (index > -1) {
        listItems.splice(index, 1)
      }

      this.setState({
        listItems,
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
        onBlur={this.handleBlur}
        onDelete={this.handleDelete}
      />
    )
  }
}

export default withFormFieldList(FormFieldListBranch)

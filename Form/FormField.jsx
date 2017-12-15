import React from 'react'

import FormFieldBranch from './FormFieldBranch'

const withFormField = (Component) => class extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      listItems: [],
      value: '',
      initialized: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.initialized === false && nextProps.value !== '') {
      const isList = nextProps.type === 'list'
      const listItems = isList ? nextProps.value : []
      const value = !isList ? nextProps.value : ''

      this.setState({
        listItems,
        value,
        initialized: true
      })
    }
  }

  handleChange(fieldId) {
    return (event) => {
      const value = event.target.value

      this.setState({
        value,
      })

      this.props.handleChange(fieldId, value)
    }
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

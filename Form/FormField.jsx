import React from 'react'

import FormFieldBranch from './FormFieldBranch'

const withFormField = (Component) => class extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.initialize = this.initialize.bind(this)

    this.state = {
      listItems: [],
      value: '',
      initialized: false
    }
  }

  componentDidMount() {
    this.initialize(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps)
  }

  initialize(props) {
    if (this.state.initialized === false) {
      const isList = props.type === 'list'
      const listItems = isList ? props.value : []
      const value = !isList ? props.value : ''

      this.setState({
        listItems,
        value,
        initialized: true
      })
    }
  }

  handleChange(fieldId) {
    return (event) => {
      let value

      if (event.target) {
        value = event.target.value
      } else if (event._isAMomentObject) {
        value = event.valueOf()
      }

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

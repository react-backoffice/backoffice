import React from 'react'
import PropTypes from 'prop-types'

import ListingSearchBranch from './ListingSearchBranch'

const withListing = Component => class extends React.Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
  }

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  state = {
    open: false,
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    })

    this.props.onFilter(undefined)
  }

  handleFilter(event) {
    const { value } = event.target

    if (this.state.open) {
      this.props.onFilter(value)
    } else {
      this.props.onFilter(undefined)
    }
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onClick={this.handleClick}
        onFilter={this.handleFilter}
      />
    )
  }
}

export default withListing(ListingSearchBranch)

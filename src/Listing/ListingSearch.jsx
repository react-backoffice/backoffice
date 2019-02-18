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
    this.getSearchRef = this.getSearchRef.bind(this)
  }

  state = {
    open: false,
  }

  getSearchRef(node) {
    this.searchRef = node
  }

  handleClick() {
    const { open } = this.state
    const { onFilter } = this.props
    const newOpen = !open

    if (this.searchRef && newOpen) {
      this.searchRef.focus()
    }

    this.setState({
      open: newOpen,
    })

    onFilter(undefined)
  }

  handleFilter(event) {
    const { open } = this.state
    const { onFilter } = this.props
    const { value } = event.target

    if (open) {
      onFilter(value)
    } else {
      onFilter(undefined)
    }
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onClick={this.handleClick}
        onFilter={this.handleFilter}
        getSearchRef={this.getSearchRef}
      />
    )
  }
}

export default withListing(ListingSearchBranch)

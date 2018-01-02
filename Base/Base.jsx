import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles } from 'material-ui/styles'

import withRoot from './withRoot'
import BaseBranch from './BaseBranch'

const withBase = (Component) => class extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.redirectTo = this.redirectTo.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleDrawerOpen() {
    this.setState({
      open: true
    })
  }

  handleDrawerClose() {
    this.setState({
      open: false
    })
  }

  redirectTo(link) {
    this.props.history.push(link)
  }

  onClick() {
    this.redirectTo('/')
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onClick={this.onClick}
        handleDrawerOpen={this.handleDrawerOpen}
        handleDrawerClose={this.handleDrawerClose}
        redirectTo={this.redirectTo}
        rightContent={this.props.rightContent}
      />
    )
  }
}

let Base = withBase(BaseBranch)
Base = withRouter(Base)

Base.propTypes = {
  title: PropTypes.string.isRequired,
  menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
  rightContent: PropTypes.element,
}

export default withRoot(Base)

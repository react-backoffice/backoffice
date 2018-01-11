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
      cookieInfoOpen: this.getCookie(),
    }

    this.handleCookieInfoAccept = this.handleCookieInfoAccept.bind(this)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.redirectTo = this.redirectTo.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  getCookie() {
    const value = '; ' + document.cookie
    const parts = value.split('; cookie_concent=')

    return !(
      parts.length != 2 ?
        undefined :
        parts.pop().split(';').shift()
    )
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

  handleCookieInfoAccept() {
    this.setState({
      cookieInfoOpen: false,
    })
  }

  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onClick={this.onClick}
        handleDrawerOpen={this.handleDrawerOpen}
        handleDrawerClose={this.handleDrawerClose}
        onCookieInfoAccept={this.handleCookieInfoAccept}
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
  fixedHeader: PropTypes.bool,
  hasHeader: PropTypes.bool,
}

Base.defaultProps = {
  fixedHeader: true,
  hasHeader: true,
}

export default withRoot(Base)

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import BaseBranch from './BaseBranch'

import Cookie from '../CookieInfo/Cookie'

const withBase = Component => class extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    menuOpen: PropTypes.bool,
    menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
    rightContent: PropTypes.node,
    isHeaderFixed: PropTypes.bool,
    hasHeader: PropTypes.bool,
    hasCookieInfo: PropTypes.bool,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  static defaultProps = {
    isHeaderFixed: true,
    hasHeader: true,
    hasCookieInfo: false,
    menuOpen: false,
    rightContent: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      cookieInfoOpen: false,
    }

    if (props.hasCookieInfo && Cookie.getCookie() === undefined) {
      Cookie.setCookie(false)
    }

    this.handleCookieInfoAccept = this.handleCookieInfoAccept.bind(this)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.redirectTo = this.redirectTo.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentWillMount() {
    this.setState({
      cookieInfoOpen: this.props.hasCookieInfo && Cookie.getCookie() === false,
      open: this.props.menuOpen,
    })
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      open: nextProp.menuOpen,
    })
  }

  onClick() {
    this.redirectTo('/')
  }

  handleDrawerOpen() {
    this.setState({
      open: true,
    })
  }

  handleDrawerClose() {
    this.setState({
      open: false,
    })
  }

  redirectTo(link) {
    this.props.history.push(link)
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

const WithBase = withBase(BaseBranch)

export default withRouter(WithBase)

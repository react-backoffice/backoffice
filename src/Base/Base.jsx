import React from 'react'
import PropTypes from 'prop-types'

import Cookie from '../CookieInfo/Cookie'
import BaseBranch from './BaseBranch'

const withBase = Component => class extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    menuOpen: PropTypes.bool,
    menuData: PropTypes.arrayOf(PropTypes.object).isRequired,
    rightContent: PropTypes.node,
    isHeaderFixed: PropTypes.bool,
    hasHeader: PropTypes.bool,
    hasCookieInfo: PropTypes.bool,
    history: PropTypes.objectOf(PropTypes.any),
  }

  static defaultProps = {
    isHeaderFixed: true,
    hasHeader: true,
    hasCookieInfo: false,
    menuOpen: false,
    rightContent: null,
    history: undefined,
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

  componentDidMount() {
    const { hasCookieInfo, menuOpen } = this.props

    this.setState({
      cookieInfoOpen: hasCookieInfo && Cookie.getCookie() === false,
      open: menuOpen,
    })
  }

  componentWillReceiveProps({ menuOpen }) {
    this.setState({
      open: menuOpen,
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
    const { history } = this.props

    if (history) {
      history.push(link)
    }
  }

  handleCookieInfoAccept() {
    this.setState({
      cookieInfoOpen: false,
    })
  }

  render() {
    const { rightContent } = this.props

    return (
      <Component
        {...this.props}
        {...this.state}
        onClick={this.onClick}
        handleDrawerOpen={this.handleDrawerOpen}
        handleDrawerClose={this.handleDrawerClose}
        onCookieInfoAccept={this.handleCookieInfoAccept}
        redirectTo={this.redirectTo}
        rightContent={rightContent}
      />
    )
  }
}

const WithBase = withBase(BaseBranch)

export default WithBase

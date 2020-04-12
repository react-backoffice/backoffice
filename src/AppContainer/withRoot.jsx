import React, { Component } from 'react'
import wrapDisplayName from 'recompose/wrapDisplayName'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'

// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
})

let AppWrapper = props => props.children

AppWrapper = withStyles(styles)(AppWrapper)

const withRoot = (BaseComponent, props) => {
  class WithRoot extends Component {
    render() {
      return (
        <MuiThemeProvider theme={props.theme}>
          <AppWrapper>
            <BaseComponent {...this.props} />
          </AppWrapper>
        </MuiThemeProvider>
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot')
  }

  return WithRoot
}

export default withRoot

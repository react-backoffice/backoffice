import React, { Component } from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import wrapDisplayName from 'recompose/wrapDisplayName'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'

import createContext from './createContext'

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

const context = createContext()

const withRoot = (BaseComponent, props) => {
  class WithRoot extends Component {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <MuiThemeProvider theme={props.theme}>
            <AppWrapper>
              <BaseComponent {...this.props} />
            </AppWrapper>
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot')
  }

  return WithRoot
}

export default withRoot

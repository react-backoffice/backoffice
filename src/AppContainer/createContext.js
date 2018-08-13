import {
  create,
  SheetsRegistry,
} from 'jss'
import { jssPreset } from '@material-ui/core/styles'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'

// Configure JSS
const jss = create(jssPreset())
jss.options.createGenerateClassName = createGenerateClassName

export const sheetsManager = new Map()

export default function createContext() {
  return {
    jss,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  }
}

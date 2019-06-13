import {
  create,
  SheetsRegistry,
} from 'jss'
import { jssPreset, createGenerateClassName } from '@material-ui/styles'

// Configure JSS
const jss = create(jssPreset())
jss.options.createGenerateClassName = createGenerateClassName

export default function createContext() {
  return {
    jss,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  }
}

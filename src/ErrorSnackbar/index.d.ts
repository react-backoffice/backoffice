import * as React from "react"
import { StandardProps } from "../../"

export interface IErrorSnackbarProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      ErrorSnackbarClassKey
    > {
  open: boolean
  message: React.ReactElement<any> | string
}

export type ErrorSnackbarClassKey = "root"

declare const ErrorSnackbar: React.ComponentType<IErrorSnackbarProps>

export default ErrorSnackbar

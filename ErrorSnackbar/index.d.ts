import * as React from 'react'
import { StandardProps } from '..'

export interface ErrorSnackbarProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      ErrorSnackbarClassKey
    > {
  action?: React.ReactElement<any>
  message: React.ReactElement<any> | string
}

export type ErrorSnackbarClassKey = 'root'

declare const ErrorSnackbar: React.ComponentType<ErrorSnackbarProps>

export default ErrorSnackbar

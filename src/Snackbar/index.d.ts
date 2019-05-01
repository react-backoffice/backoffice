import * as React from "react"
import { StandardProps } from ".."

export interface ISnackbarProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      SnackbarClassKey
    > {
  isOpen: boolean
  message: React.ReactElement<any> | string
}

export type SnackbarClassKey = "root"

declare const Snackbar: React.ComponentType<ISnackbarProps>

export default Snackbar

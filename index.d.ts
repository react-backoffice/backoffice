import * as React from "react"

/**
 * All standard components exposed by `backoffice` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<
  C & { classes: any },
  "classes" | Removals
  > &
  StyledComponentProps<ClassKey> & {
    className?: string
    style?: Partial<React.CSSProperties>
  }

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>

export interface StyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<ClassNameMap<ClassKey>>
  innerRef?: React.Ref<any>
}

/** @internal */
type Diff<T extends string, U extends string> = ({[P in T]: P } &
  {[P in U]: never } & { [x: string]: never })[T]

/** @internal */
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>

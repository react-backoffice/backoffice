import Isemail from 'isemail'
import isUrl from 'is-url'

/**
 * Check if a field has any value at all
 */
export const required = value => !!(value && value.length > 0)

/**
 * Check if a value is readable for machines (e.g. as identifier)
 */
export const machinereadable = value =>
  (value && value === encodeURIComponent(value)) || !value

/**
 * Check if value is a date
 */
export const date = value =>
  (value && !Number.isNaN(Date.parse(value))) || !value

/**
 * Check if value is email
 */
export const email = value =>
  (value && Isemail.validate(value)) || !value

/**
 * Check if value is url
 */
export const url = value => (value && isUrl(value)) || !value

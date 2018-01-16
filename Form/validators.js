import Isemail from 'isemail'

/**
 * Check if a field has any value at all
 */
export const required = value => value.length > 0

/**
 * Check if a value is readable for machines (e.g. as identifier)
 */
export const machinereadable = value =>
  value === encodeURIComponent(value)

/**
 * Check if value is a date
 */
export const date = value => !Number.isNaN(Date.parse(value))

/**
 * Check if value is email
 */
export const email = value => Isemail.validate(value)

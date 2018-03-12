import * as Validators from './validators'
import { TYPES } from './constants'

export const getValidator = (validator) => {
  if (typeof validator === 'function') {
    return validator
  }

  return Validators[validator]
}

export default (type, isRequired, validators = [], value) => {
  const allValidators = [...validators]

  if (isRequired) {
    allValidators.push('required')
  }

  if (type === TYPES.EMAIL) {
    allValidators.push('email')
  }

  if (type === TYPES.URL) {
    allValidators.push('url')
  }

  if (allValidators.length === 0) {
    return true
  }

  const validatorFunctions = allValidators.map(getValidator)

  const validState = validatorFunctions.map((validator) => {
    if (typeof validator === 'function') {
      return validator(value)
    }

    return true
  })

  return validState.indexOf(false) === -1
}

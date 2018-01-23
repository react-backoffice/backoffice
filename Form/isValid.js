import * as Validators from './validators'
import { TYPES } from './constants'

export default (type, required, validators = [], value) => {
  const allValidators = [...validators]

  if (required) {
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

  const validatorFunctions = allValidators.map(validator => Validators[validator])
  const validState = validatorFunctions.map((validator) => {
    if (typeof validator === 'function') {
      return validator(value)
    }

    return true
  })

  return validState.indexOf(false) === -1
}

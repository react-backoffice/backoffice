import { getValidator } from '../src/Form/isValid'

describe('Form.isValid', () => {
  it('is able to deal with custom validators', () => {
    const validator = getValidator('email')

    expect(validator).toHaveProperty('validator')
    expect(typeof validator.validator).toBe('function')
  })

  it('is able to deal with custom validators', () => {
    const func = jest.fn()
    const validator = getValidator(func)

    validator.validator()

    expect(func).toHaveBeenCalled()
  })
})

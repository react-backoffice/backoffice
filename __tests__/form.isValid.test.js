import isValid, { getValidator } from '../Form/isValid'

describe('Form.isValid', () => {
  it('is able to deal with custom validators', () => {
    const validator = getValidator('email')

    expect(typeof validator).toBe('function')
  })

  it('is able to deal with custom validators', () => {
    const func = jest.fn()
    const validator = getValidator(func)

    validator()

    expect(func).toHaveBeenCalled()
  })
})

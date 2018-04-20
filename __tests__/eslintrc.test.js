import eslintrc from '../.eslintrc'

describe('eslintrc', () => {
  it('exits', () => {
    expect(typeof eslintrc).toBe('object')
  })
})

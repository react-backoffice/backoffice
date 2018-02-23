import replace from '../src/utils/replace'

describe('Utils.replace', () => {
  it('replaces strings', () => {
    const returnValue = replace('foo', 'o', 'u')

    expect(returnValue).toBe('fuu')
  })

  it('does not replace strings when there is no value to replace', () => {
    const returnValue = replace('foo', undefined, 'u')

    expect(returnValue).toBe('foo')
  })

  it('can replace via function', () => {
    const returnValue = replace('foo', 'o', replaceValue => `-${replaceValue}`)

    expect(returnValue).toBe('f-o-o')
  })
})

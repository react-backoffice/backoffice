import {
  required,
  machinereadable,
  date,
  email,
  url,
} from '../Form/validators'

describe('Form.validators', () => {
  it('checks a value for required', () => {
    expect(required('')).toBe(false)
    expect(required()).toBe(false)
    expect(required(' ')).toBe(false)
    expect(required('a')).toBe(true)
    expect(required('foobar')).toBe(true)
    expect(required(['foo'])).toBe(true)
    expect(required([])).toBe(false)
  })

  it('checks a value for machinereadable', () => {
    expect(machinereadable()).toBe(true)
    expect(machinereadable(' - ')).toBe(false)
    expect(machinereadable('Foo Bar')).toBe(false)
    expect(machinereadable('Foo?Bar')).toBe(false)
    expect(machinereadable('Foo/Bar')).toBe(false)
    expect(machinereadable('ä')).toBe(false)
    expect(machinereadable('FooBar')).toBe(true)
    expect(machinereadable('Foo_Bar-baz')).toBe(true)
  })

  it('checks a value for machinereadable', () => {
    expect(date()).toBe(true)
    expect(date('21.01.2010')).toBe(false)
    expect(date('01 Jan 1970 00:00:00 GMT')).toBe(true)
  })

  it('checks a value for email', () => {
    expect(email()).toBe(true)
    expect(email('foo')).toBe(false)
    expect(email('foo@bar')).toBe(true)
    expect(email('foo@bar.')).toBe(false)
    expect(email('foo@bar.de')).toBe(true)
  })

  it('checks a value for url', () => {
    expect(url()).toBe(true)
    expect(url('www.google.de')).toBe(false)
    expect(url('www.google.de/')).toBe(false)
    expect(url('google.de/')).toBe(false)
    expect(url('http://google.de')).toBe(true)
    expect(url('http://www.google.de')).toBe(true)
    expect(url('https://www.google.de')).toBe(true)
    expect(url('http://www.google.de/')).toBe(true)
  })
})

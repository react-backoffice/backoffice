import * as Backoffice from '../'

it('has all components', () => {
  expect(typeof Backoffice.AddButton).toBe('function')
  expect(typeof Backoffice.AppContainer).toBe('function')
  expect(typeof Backoffice.BackButton).toBe('function')
  expect(typeof Backoffice.Base).toBe('function')
  expect(typeof Backoffice.Confirm).toBe('function')
  expect(typeof Backoffice.CookieInfo).toBe('function')
  expect(typeof Backoffice.Drawer).toBe('function')
  expect(typeof Backoffice.ErrorSnackbar).toBe('function')
  expect(typeof Backoffice.Form).toBe('function')
  expect(typeof Backoffice.Header).toBe('function')
  expect(typeof Backoffice.Home).toBe('function')
  expect(typeof Backoffice.Listing).toBe('function')
  expect(typeof Backoffice.Menu).toBe('function')
  expect(typeof Backoffice.NoMatch).toBe('function')
  expect(typeof Backoffice.Tabs).toBe('function')
})

Backoffice is a Framework based on [Material UI](https://material-ui-next.com),
a Material Design React implementation that provides a couple of components you
might want to use in a backoffice app.

![](.presentational/header.png)

Backoffice also uses `react-router-dom`, `@material-ui/icons`, `material-ui-picker` and some more OSS.

[![Build Status](https://travis-ci.org/drublic/backoffice.svg?branch=master)](https://travis-ci.org/drublic/backoffice)
[![codecov](https://codecov.io/gh/drublic/backoffice/branch/master/graph/badge.svg)](https://codecov.io/gh/drublic/backoffice)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdrublic%2Fbackoffice.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdrublic%2Fbackoffice?ref=badge_shield)

## Purpose

The purpose of Backoffice is to provide an easier to use framework to generate applications that are mainly designed for working with data. For example for CRUD-APIs.

If you have a list of data and you want to be able to update and delete entries in the list as well as create new ones (CRUD) Backoffice helps you to build an application in "no time".

## Usage

### Installing

If you use yarn, just run the following command in your project’s root directory.

    yarn add backoffice

Or using npm:

    npm install --save backoffice

### Using components

You need to create your own React application, that takes care of routing (at least for now), handling state and so on.

Within any of your components you can use a given component by importing it to your application:

```javascript
import Menu from 'backoffice/Menu'
```

You can then use the component within your render logic:

```javascript
const MyMenu = ({ menuData, redirectTo }) => (
  <Menu data={menuData} redirectTo={redirectTo} />
)
```

## Examples & Demo

You can find examples in [`examples/`](./examples/).

## Components

### AppContainer

The AppContainer provides the generic styling as well as the possiblity to povided your own theme (based on [Material UI's colors](https://material-ui-next.com/style/color/)).

* `theme: Theme`, theme configuration, theme palette as described [here](https://material-ui-next.com/style/color/)

You could use the AppContainer-Component like this:

```javascript
import React from 'react'
import AppContainer from 'backoffice/AppContainer'

import {
  indigo,
  amber
} from '@material-ui/core/colors'

const theme = {
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
    },
  },
}

const MyApp = () => (
  <AppContainer theme={theme}>
    This is my application
  </AppContainer>
)
```

### Base

A page usually needs some default baseline (header aso). The Base Component provides this functionality.

Children are rendered as content.

* `title: string`, Title that is shon in header
* `menuData: MenuItem[]`, Same as in `Menu`, please see below
* `rightContent?: node`, React element that is rendered on the right side of the header
* `isHeaderFixed?: boolean`, Is header fixed?, default `true`
* `hasHeader?: boolean`, Is header included, default `true`
* `hasCookieInfo?: boolean`, Is there a cookieinfo in the project, default: `false`

```javascript
import { Base } from 'backoffice'

const base = () => (
  <Base title="Foobar" menuData={[]} hasCookieInfo>
    Content
  </Base>
)
```

### AddButton

Button in the bottom right, that let's you link to a new page

* `onClick: function`, handle click on Add Button

### BackButton

A Button to go "back" to a given url

* `url: string`, where to go next

```javascript
import { BackButton } from 'backoffice'

const backButton = () => (
  <BackButton url="/go-back" />
)
```

### Confirm

A dialog box to confirm something with a user

* `isOpen: boolean`, is the confirm dialog open, default `false`
* `title: string`, title, optional
* `description: string`, description text
* `agreeText: string`, Text for agree button, default `Agree`
* `disagreeText: string`, Text for disagree button, default `Disagree`
* `onConfirm: function`, handler when user confirms dialog
* `onClose: function`, handler when user closes dialog
* `hasCloseButton: boolean`, hide close button if `false`, defaults to `true`

```javascript
import { Confirm } from 'backoffice'

const confirm = ({ isOpen, onConfirm }) => (
  <Confirm
    isOpen={isOpen}
    description="Are you sure you want to delete the entry?"
    onConfirm={onConfirm}
  />
)
```

### CookieInfo

Asks the user if they want to obey the fact that you are using cookies. Sets a cookie with the name `cookie_concent` and the value of `true` if the user accepts. Otherwise set to `false`.
If you use CookieInfo please make sure to set the attribute `hasCookieInfo` to `Base`.

Children are used as content.

* `buttonText: string`, text to display on the button
* Internal: `isOpen: boolean`, state of the cookieInfo, handled by `Base`, default `false`
* Internal: `onAccept: function`, when accepted, provided by `Base`

```javascript
import { Base, CookieInfo } from 'backoffice'

const page = (props) => (
  <Base
    hasCookieInfo
    {...props}
  >
    <CookieInfo buttonText="Accept" isOpen={isOpen}>
      This is the cookie info
    </CookieInfo>
  </Base>
)
```

### Dashboard

Dashboard-like overview page

You can find [example data here](./__tests__/data/dashboard.js).

#### Options

* `data: DashboardData`, data that describes the dashboard

#### DashboardData

* `title: string`, Title as headline
* `description?: string`, Description of DashboardGroups that are upcoming
* `groups: DashboardGroup[]`, Groups of content-teasers that should be rendered

#### DashboardGroup

* `id: string`, Name of the upcoming group
* `title: string`, Title as headline of the next group
* `cards: DashboardCard[]`, Data to render teaser elements

#### DashboardCard

* `title: string`, Title of the card
* `description?: string`, A description text
* `icon?: function`, An icon element that you want to display next to the title
* `isDisabled?: function`, Should element be disabled?, default `false`

#### Usage

```javascript
import { Dashboard } from 'backoffice'

import data from './__tests__/data/dashboard.js'

const dashboard = () => (
  <Dashboard data={data} />
)
```

### Drawer

Element that has an (off-canvas) menu

* `data: MenuItem[]`, menu data
* `isOpen?: boolean`, is the drawer open?, default `false`
* `onClose: function`, what happens when drawer is closed
* `redirectTo: function`, what happens when clicking on a link
  * Parameter: `url: string`, as set in MenuItem

```javascript
import { Drawer } from 'backoffice'

import data from './__tests__/data/menu.js'

const drawer = ({ onClose, redirectTo }) => (
  <Drawer
    data={data}
    isOpen
    onClose={onClose}
    redirectTo={redirectTo}
  />
)
```

### Form

Form components.

An example of data can [be found here](./__tests__/data/form.jsx).

* `form: (FormGroup | FormField)[]`, form configuration
* `data: FormDataObject`, data for prefilling form
* `onDataChanged?: function`, handle a change of a field (input, selection, …)
* `onSubmit: function`, handle click on submit data
* `submitText: string`: Submit button text
* `isFixedSubmitButton?: boolean`, is submit button fixed in right bottom corner?, default `false`
* `useFormElement?: boolean`, use a form element or a div, default `true`

#### FormGroup

* `id: string`, identifier of the group
* `group: boolean`, group the following elements into one section
* `title: string`, title of the group
* `integrated: boolean`, is group integrated in parent (true) or wrapped in paper
* `isVisible: boolean`, should group be visible?
* `data: FormField[]`

#### FormField

* `id: string`, identifier of the field (concatenated with `FormGroup.id` if set)
* `type: ENUM(
    'select' |
    'list' |
    'multiline' |
    'text' |
    'date' |
    'time' |
    'datetime' |
    'email' |
    'number' |
    'switch' |
    'password' |
    'url' |
    'content' |
    'empty'
  )`, default: `text`
* `title: string`, label of field
* `width: ENUM('small' | 'mid' | 'full')`, default: `full`
* `value: string | string[]`, default value of a field
* `isRequired: boolean`, is filling this field required, default: false
* `validators: ENUM('date', 'machinereadable')[]`, validate a field’s input value
* `isVisible: boolean`, should element be visible?
* `options: string[]`, options of a field of type `select`
* `format: string`, formation of a field of type `date`, `time` or `datetime`, uses [Moment.js](https://momentjs.com/docs/#/parsing/string-format/)
* `rows: number`, height of multiline text-field
* `completeFrom: (FormFieldCompleteFrom | string)[]`, list for autocompletion
* `renderElement: function`, element that should be rendered of a field of type `list`
* `getAdditionalValue: function`, transform any value before rendering
* `beforeSubmit: function`, allow content to get changed before submitting data
* `isDisabled?: boolean`, true if this field should be disbaled, default: `false`

#### FormFieldCompleteFrom

* `title: string`, display as text
* `tooltip: string`, tooltip text, also used as secondary text in autocomplete

#### FormDataObject

The object holds all values, and errors based on the name of a given form field.

* `value: any`

```javascript
{
  formFieldName: {
    value: "foo"
  }
}
```

#### Usage

```javascript
import { Form } from 'backoffice'

import fieldData from './__tests__/data/formFieldData'
import formData from './__tests__/data/form.jsx'

const form = ({ onSubmit }) => (
  <Form
    data={fieldData}
    form={formData}
    onSubmit={onSubmit}
    submitText="Save the form"
  >
    <p>
      This is a very special form with additional content.
    </p>
  </Form>
)
```

### Header

Header element, used by `Base` component.

* `isOpen?: boolean`, is sidebar opened?, default `false`
* `title: string`, title to show next to menu icon
* `isFixed: boolean`, should the header be fixed when scrolling?
* `isCookieInfoOpen: boolean`, is the cookie info bar visible?
* `onDrawerOpen: function`, called when menu is toggled
* `onClick: function`, click on title
* `children?: Elements`, content which is shown on the right hand side of the header

```javascript
import { Header } from 'backoffice'

const header = ({ onDrawerOpen, onClick }) => (
  <Header
    title="My App"
    onDrawerOpen={onDrawerOpen}
    onClick={onClick}
    isOpen={false}
    isFixed
    isCookieInfoOpen={true}
  >
    Beta
  </Header>
)
```

### Listing

Data-Table to display data.

* `id?: string`, id for list
* `title?: string`, title to show for listing section
* `headers: ListingHeader[]`, use for headers in listing
* `data: any[]`, data to display in table
* `order?: ENUM(asc | desc)`, direction in which to sort values, default `asc`
* `orderBy: string`, field name to use for sorting the table
* `hasLoader?: boolean`, should a loader be displayed in table, default `false`
* `toolbarContent?: ReactElement | null`, content to show in the toolbar (visible if content column is selected)
* `onUpdateSelection: function`, is called if a selection of a line is changed
* `isIntegrated?: bool`, show Listing on Paper or integrated, default: false
* `rowsPerPage: number`, number of rows to show per page, default `10`
* `rowsPerPageOptions: number[]`, possible values for `rowsPerPage` for the user to choose from, default `[10, 25, 50, 100]`
* `onClick: function`, clicking on a column

#### ListingHeader

* `id: string`, name of the header (matches against `data[].id`)
* `label: string`, value to display in row header
* `isPaddingDisabled?: boolean`, should the field be displayed condensed, default `false`
* `isSearchable?: boolean`, is this value searchable?, default `false`
* `isNumeric?: boolean`, is this value like a number?, default `false`
* `transformContent?: function`, transform the content of each `data[]` entry before displaying

#### Usage

```javascript
import { Listing } from 'backoffice'

import listingData from './__tests__/data/listing_data'
import listingHeaders from './__tests__/data/listing_headers'

const listing = ({ onClick, onUpdateSelection }) => {
  <Listing
    title="Christmas Time"
    data={listingData}
    headers={listingHeaders}
    orderBy="username"
    onClick={onClick}
    hasLoader
    onUpdateSelection={onUpdateSelection}
    toolbarContent={(
      <Tooltip title="Delete">
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    )}
  />
)
```

### Menu

A menu that lists entries

* `data: MenuItem[]`, data to render the menu
* `redirectTo: function`, called when clicked on an item

### MenuItem

* `type: ENUM('link' | 'divider')`
* `url: string`, url to link to
* `title: string`, title to display
* `icon?: ReactElement | null`, icon which should be displayed before title
* `isDisabled?: boolean`, if true, item will not be clickable, default `false`

### NoMatch

A content-snippet for 404 pages

* `title: string`, title of the page
* `description: node`, element that is the content

```javascript
import { NoMatch } from 'backoffice'

const noMatch = () => (
  <NoMatch
    title="Title"
    description={(
      <p>Desc</p>
    )}
  />
)
```

### Snackbar

Show an error in the left hand corner

* `isOpen: boolean`, is the snackbar open?
* `message: string`, message to show with snackbar

```javascript
import { Snackbar } from 'backoffice'

const snackbar = () => (
  <Snackbar isOpen message="Message" />
)
```

### Tabs

Tab elements

* `isScrollable?: boolean`, is tab header area scrollable, default `false`
* `data: Tab[]`, all tabs

#### Tab

* `title: string`, title of a tab
* `id: string`, identifier for tab
* `content: node`, elements to show as content

#### Usage

```javascript
import { Tabs } from 'backoffice'

const tabs = () => (
  <Tabs
    data={[{
      title: 'Title',
      content: (
        <p>Content</p>
      ),
    }]}
  />
)
```

## License

This framework is licensed under [MIT](./LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdrublic%2Fbackoffice.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdrublic%2Fbackoffice?ref=badge_large)

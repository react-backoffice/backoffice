![](.presentational/header.png)

Backoffice is a Framework based on [Material UI](https://material-ui-next.com), a Material UI
React implementation that provides a couple of components you might want to use in a backoffice app.

Backoffice also uses `react-router-dom`, `material-ui-icons`, `material-ui-picker` and some more OSS.

[![Build Status](https://travis-ci.org/drublic/backoffice.svg?branch=master)](https://travis-ci.org/drublic/backoffice)
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

### Setting up Webpack

Backoffice needs a transpiler for its ES2016 modules + JSX.

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

## Components

### AppContainer

The AppContainer provides the generic styling as well as the possiblity to povided your own theme (based on [Material UI's colors](https://material-ui-next.com/style/color/)).

* `theme: object`, theme configuration

You could use the AppContainer-Component like this:

```javascript
import React from 'react'
import AppContainer from 'backoffice/AppContainer'

import indigo from 'material-ui/colors/indigo'
import amber from 'material-ui/colors/amber'


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

#### Usage

```html
<Base title="Foobar" menuData={[]} hasCookieInfo>
  Content
</Base>
```

#### Options

Children are rendered as content.

* `title: string`, Title that is shon in header
* `menuData: MenuItem[]`, Same as in `Menu`, please see below
* `rightContent?: node`, React element that is rendered on the right side of the header
* `fixedHeader?: boolean`, Is header fixed?, default `true`
* `hasHeader?: boolean`, Is header included, default `true`
* `hasCookieInfo?: boolean`, Is there a cookieinfo in the project, default: `false`

### Home

Dashboard-like homepage

#### Options

* `title: string`, Title as headline
* `description?: string`, Description of HomeGroups that are upcoming
* `groups: HomeGroup[]`, Groups of content-teasers that should be rendered

#### HomeGroup

* `id: string`, Name of the upcoming group
* `title: string`, Title as headline of the next group
* `cards: HomeCard[]`, Data to render teaser elements

#### HomeCard

* `title: string`, Title of the card
* `description?: string`, A description text
* `icon?: function`, An icon element that you want to display next to the title
* `disabled?: function`, Should element be disabled?, default `false`

### Menu

A menu that lists entries

* `data: MenuItem[]`, data to render the menu
* `redirectTo: function`, called when clicked on an item

### MenuItem

* `type: ENUM('link' | 'divider')`
* `url: string`, url to link to
* `title: string`, title to display
* `icon: ReactElement | null`, icon which should be displayed before title
* `disabled: boolean`, if true, item will not be clickable

### CookieInfo

Asks the user if they want to obey the fact that you are using cookies. Sets a cookie with the name `cookie_concent` and the value of `true` if the user accepts. Otherwise set to `false`.
If you use CookieInfo please make sure to set the attribute `hasCookieInfo` to `Base`.

* `buttonText: string`, text to display on the button
* Internal: `cookieInfoOpen: boolean`, state of the cookieInfo, handled by `Base`, default `false`
* Internal: `onCookieInfoAccept: function`, when accepted, provided by `Base`

### Confirm

A dialog box to confirm something with a user

* `open: boolean`, is the confirm dialog open, default `false`
* `title: string`, title, optional
* `description: string`, description text
* `agreeText: string`, Text for agree button, default `Agree`
* `disagreeText: string`, Text for disagree button, default `Disagree`
* `onConfirm: function`, handler when user confirms dialog
* `onClose: function`, handler when user closes dialog

### Listing

Data-Table

* `toolbarContent: node`, Content that should be shown in the toolbar, if a line is selected
* `onUpdateSelection: function`, is called if a selection of a line is changed

### AddButton

Button in the bottom right, that let's you link to a new page

### NoMatch

A content-snippet for 404 pages

* `title: string`, title of the page
* `description: node`, element that is the content

### Drawer

Element that has an (off-canvas) menu

* `data: object[]`, menu data
* `open: boolean`, is the drawer open?
* `handleDrawerClose: function`, what happens when drawer is closed
* `redirectTo: function`, what happens when clicking on a link

### BackButton

A Button to go "back" to a given url

* `url: string`, where to go next

### Form

Form components

* `form: (FormGroup | FormField)[]`, form configuration

#### FormGroup

* `id: string`, identifier of the group
* `group: boolean`, group the following elements into one section
* `title: string`, title of the group
* `integrated: boolean`, is group integrated in parent (true) or wrapped in paper
* `isVisible: boolean`, should group be visible?
* `data: FormField[]`

#### FormField

* `id: string`, identifier of the field (concatenated with `FormGroup.id` if set)
* `type: ENUM('select' | 'list' | 'multiline' | 'text' | 'date' | 'time' | 'datetime' | 'email' | 'password' | 'url' | 'content' | 'empty')`, default: `text`
* `title: string`, label of field
* `width: ENUM('small' | 'mid' | 'full')`, default: `full`
* `value: string | string[]`, default value of a field
* `required: boolean`, is filling this field required, default: false
* `validators: ENUM('date', 'machinereadable')[]`, validate a field’s input value
* `options: string[]`, options of a field of type `select`
* `format: string`, formation of a field of type `date`, `time` or `datetime`, uses [Moment.js](https://momentjs.com/docs/#/parsing/string-format/)
* `rows: number`, height of multiline text-field
* `completeFrom: (FormFieldCompleteFrom | string)[]`, list for autocompletion
* `renderElement: function`, element that should be rendered of a field of type `list`

#### FormFieldCompleteFrom

* `title: string`, display as text
* `tooltip: string`, tooltip text, also used as secondary text in autocomplete

### ErrorSnackbar

Show an error in the left hand corner

* `open: boolean`, is the snackbar open?
* `message: string`, message to show with snackbar

### Todos

* Rename component Home to Dashboard
* Form types: `checkbox`, `radio`
* Focus search in listing when opening
* Tests
* Performance optimizing

## License

This framework is licensed under [MIT](./LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdrublic%2Fbackoffice.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdrublic%2Fbackoffice?ref=badge_large)

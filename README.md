# Backoffice

Backoffice is a Framework based on [Material UI](https://material-ui-next.com), a Material UI
React implementation that provides a couple of components you might want to use in a backoffice app.

Backoffice also uses `react-router-dom`, `material-ui-icons`, `material-ui-picker` and some more OSS.

## Purpose

The purpose of Backoffice is to provide an easier to use framework to generate applications that are mainly designed for working with data.

If you have a list of data and you want to be able to update and delete entries in the list as well as create new ones (CRUD) Backoffice helps you to build an application in "no time".

## Usage

### Installing

If you use yarn, just run the following command in your project’s root directory.

    yarn add backoffice

### Using components

You need to create your own React application, that takes care of routing (at least for now), handling state and so on.

Within any of your components you can use a given component by importing it to your application:

    import Menu from 'backoffice/Menu'

You can then use the component within your render logic:

    const MyMenu = ({ menuData, redirectTo }) => (
      <Menu data={menuData} redirectTo={redirectTo} />
    )

## Components

### Base

* `fixedHeader: boolean`: Is header fixed?, default `true`
* `hasHeader: boolean`: Is header included, default `true`

### Home

Dashboard-like homepage

### Menu

A menu that lists entries

* `data: object[]`, data to render the menu
* `redirectTo: function`, called when clicked on an item

### CookieInfo

* `buttonText: string`, text to display on the button
* Internal: `cookieInfoOpen: boolean`, state of the cookieInfo, handled by `Base`, default `false`
* Internal: `onCookieInfoAccept: function`, when accepted, provided by `Base`

### Listing

Data-Table

### AddButton

Button in the bottom right, that let's you link to a new page

### NoMatch

A content-snippet for 404 pages

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
* `type: ENUM('select' | 'list' | 'multiline' | 'text' | 'date' | 'time' | 'datetime', 'email')`, default: `text`
* `title: string`, label of field
* `width: ENUM('small' | 'mid' | 'full')`, default: `full`
* `value: string | string[]`, default value of a field
* `required: boolean`, is filling this field required, default: false
* `validators: ENUM('date', 'machinereadable')[]`, validate a field’s input value
* `options: string[]`, options of a field of type `select`
* `format: string`, formation of a field of type `date`, `time` or `datetime`, uses [Moment.js](https://momentjs.com/docs/#/parsing/string-format/)
* `rows: number`, height of multiline text-field
* `completeFrom: string[]`, list for autocompletion
* `renderElement: function`, element that should be rendered of a field of type `list`

### ErrorSnackbar

Show an error in the left hand corner

* `open: boolean`, is the snackbar open?
* `message: string`, message to show with snackbar

### Todos

* Rename component Home to Dashboard
* Form types: `checkbox`, `radio`, `url`, `password`
* Tests
* Performance optimizing

## License

This framework is licensed under [MIT](./LICENSE)

# Backoffice

Framework based on [Material UI](https://material-ui-next.com), a Material UI
React implementation that provided a couple of components you might want to use
in a backoffice app.

Backoffice also uses `react-router-dom`, `material-ui-icons` and some more OSS.

## Components

### Home

Dashboard-like homepage

### Menu

A menu that lists entries

### Listing

Data-Table

### AddButton

Button in the bottom right, that let's you link to a new page

### NoMatch

A content-snippet for 404 pages

### Drawer

Element that has an (off-canvas) menu

* data: object[], menu data
* open: boolean, is the drawer open?
* handleDrawerClose: func, what happens when drawer is closed
* redirectTo: function, what happens when clicking on a link

### BackButton

A Button to go "back" to a given url

* url: string, where to go next

### Form

Form components

type: ENUM(
  select,
  list,
  multiline,
  text,
  date,
  time,
  datetime
)

### ErrorSnackbar

Show an error in the left hand corner

* open: boolean, is the snackbar open?
* message: string, message to show with snackbar

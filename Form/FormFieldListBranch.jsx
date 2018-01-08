import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Chip from 'material-ui/Chip'

import FormFieldInput from './FormFieldInput'

const styles = (theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-flex',
    flexDirection: 'column',
  },
  list: {
    position: 'absolute',
    top: theme.spacing.unit * 9,
    width: '100%',
    height: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: '0.25s',
  },
  listActive: {
    height: 'auto',
    opacity: 1,
  },
  selectedItem: {
    display: 'inline-flex',
    margin: '0.125rem',
  },
})

const FormFieldListBranch = ({
  availableOptions,
  listItems,
  showMenu,
  renderElement,
  classNames: propClassNames,
  onClick,
  onChange,
  onBlur,
  onDelete,
  classes,
  ...rest
}) => {
  const renderListItem = (element, index) => {
    if (renderElement) {
      return renderElement(element, index)
    }

    return (
      <Chip
        key={`form-list-${index}`}
        label={element}
        onDelete={onDelete(element)}
        className={classes.selectedItem}
      />
    )
  }

  return (
    <div className={`${propClassNames.join(' ')} ${classes.root}`}>
      <FormFieldInput
        {...rest}
        handleChange={onChange}
        onBlur={onBlur}
      />

      <Paper className={classNames(classes.list, {
        [classes.listActive]: showMenu && availableOptions.length > 0
      })}>
        <List>
          {availableOptions.slice(0, 10).map((option, index) => (
            <ListItem
              key={`form-field-list-${index}`}
              button
              onClick={onClick(option)}
            >
              <ListItemText primary={option} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <div>
        {listItems ? listItems.map(renderListItem) : null}
      </div>
    </div>
  )
}

FormFieldListBranch.propTypes = {
  availableOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])
  ).isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  showMenu: PropTypes.bool.isRequired,
  renderElement: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormFieldListBranch)

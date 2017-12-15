import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import FormFieldList from './FormFieldList'
import FormFieldInput from './FormFieldInput'

const styles = (theme) => ({
  headline: {
    marginTop: theme.spacing.unit * 3
  },

  field: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  widthSmall: {
    width: `calc(25% - ${theme.spacing.unit * 2}px)`,
  },

  widthMid: {
    width: `calc(50% - ${theme.spacing.unit * 2}px)`,
  },

  widthFull: {
    width: `calc(100% - ${theme.spacing.unit * 2}px)`,
  }
})

const FormFieldBranch = ({ type, width, listItems, classes, ...props }) => {
  const getClasses = () => {
    const classNames = [classes.field]

    if (width === 'small') {
      classNames.push(classes.widthSmall)
    } else if (width === 'mid') {
      classNames.push(classes.widthMid)
    } else {
      classNames.push(classes.widthFull)
    }

    return classNames
  }

  let classNames = getClasses()

  switch (type) {
    case 'select':
      return (
        <FormFieldList
          {...props}
          classNames={classNames}
        />
      )
      break
    case 'list':
      return (
        <div>
          <FormFieldInput
            {...props}
            classNames={classNames}
          />

          {listItems ?
            listItems.map(props.renderElement) :
            null
          }
        </div>
      )
      break
    case 'multiline':
      return (
        <FormFieldInput
          {...props}
          classNames={classNames}
          isMultiline
        />
      )
      break
    default:
      return (
        <FormFieldInput
          {...props}
          classNames={classNames}
        />
      )
      break
  }

  return null
}

FormFieldBranch.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  listItems: PropTypes.array,
  classes: PropTypes.object,
}

FormFieldBranch.defaultProps = {
  type: 'text',
  handleChange: () => { },
}

export default withStyles(styles)(FormFieldBranch)

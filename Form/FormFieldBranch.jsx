import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import { TYPES } from './constants'
import FormFieldInput from './FormFieldInput'
import FormFieldDate from './FormFieldDate'
import FormFieldList from './FormFieldList'

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

const FormFieldBranch = ({ type, width, classes, ...props }) => {
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
    case TYPES.SELECT:
      return (
        <FormFieldInput
          {...props}
          select
          selectOptions={props.selectOptions}
          classNames={classNames}
        />
      )
      break
    case TYPES.LIST:
      return (
        <FormFieldList
          {...props}
          classNames={classNames}
        />
      )
      break
    case TYPES.MULTILINE:
      return (
        <FormFieldInput
          {...props}
          classNames={classNames}
          isMultiline
        />
      )
      break
    case TYPES.DATE:
      return (
        <FormFieldDate
          {...props}
          classNames={classNames}
          type={TYPES.DATE}
        />
      )
      break
    case TYPES.TIME:
      return (
        <FormFieldDate
          {...props}
          classNames={classNames}
          type={TYPES.TIME}
        />
      )
      break
    case TYPES.DATETIME:
      return (
        <FormFieldDate
          {...props}
          classNames={classNames}
          type={TYPES.DATETIME}
        />
      )
      break
    default:
      return (
        <FormFieldInput
          {...props}
          type={type}
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

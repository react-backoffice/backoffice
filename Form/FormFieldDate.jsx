import React from 'react'
import PropTypes from 'prop-types'

import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight'
import EventIcon from 'material-ui-icons/Event'
import DateRangeIcon from 'material-ui-icons/DateRange'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import {
  DateTimePicker,
  DatePicker,
  TimePicker
} from 'material-ui-pickers'

import { TYPES } from './constants'
import FormFieldInput from './FormFieldInput'

const FormFieldDate = ({
  type,
  id,
  title,
  value,
  format,
  required,
  handleChange,
  helperText,
  classNames,
}) => {
  let additionalAttributes = {}
  let Component

  switch (type) {
    case TYPES.TIME:
      Component = TimePicker
      break
      case TYPES.DATE:
      Component = DatePicker
      additionalAttributes = {
        leftArrowIcon: (<KeyboardArrowLeftIcon />),
        rightArrowIcon: (<KeyboardArrowRightIcon />),
      }
      break
    default:
      Component = DateTimePicker
      additionalAttributes = {
        leftArrowIcon: (<KeyboardArrowLeftIcon />),
        rightArrowIcon: (<KeyboardArrowRightIcon />),
        timeIcon: (<AccessTimeIcon />),
        dateRangeIcon: (<DateRangeIcon />),
      }
      break
  }

  return (
    <Component
      id={id}
      label={title}
      keyboard
      clearable
      value={new Date(value)}
      onChange={handleChange(id)}
      format={format}
      required={required}
      keyboardIcon={<EventIcon />}
      className={classNames.join(' ')}
      helperText={helperText}
      {...additionalAttributes}
    />
  )
}

FormFieldDate.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  helperText: PropTypes.string,
  required: PropTypes.bool.isRequired,
  classNames: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

FormFieldDate.defaultProps = {
  id: '',
  title: '',
  value: +new Date(),
  helperText: '',
  required: false,
  classNames: [],
  handleChange: () => {},
}

export default FormFieldDate

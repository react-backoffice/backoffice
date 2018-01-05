import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

import { MenuItem } from 'material-ui/Menu'

const FormFieldInput = ({
  id,
  type,
  title,
  value,
  isMultiline,
  handleChange,
  helperText,
  defaultValue,
  select,
  options,
  required,
  error,
  classNames,
  onFocus,
  onBlur,
  onKeyPress,
}) => (
  <TextField
    id={id}
    type={type}
    label={title}
    value={value}
    multiline={isMultiline}
    onChange={handleChange(id)}
    className={classNames.join(' ')}
    helperText={helperText}
    defaultValue={defaultValue}
    select={select}
    required={required}
    error={error}
    margin="normal"
    fullWidth
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyPress={onKeyPress}
  >
    {options ?
        options.map((option, index) => (
          <MenuItem value={option} key={index}>{option}</MenuItem>
        ))
      : null
    }
  </TextField>
)

FormFieldInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number
  ]).isRequired,
  isMultiline: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  required: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  classNames: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  select: PropTypes.bool,
  options: PropTypes.array,
}

FormFieldInput.defaultProps = {
  id: '',
  title: '',
  value: '',
  isMultiline: false,
  helperText: '',
  classNames: [],
  required: false,
  error: false,
  handleChange: () => {},
}

export default FormFieldInput

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import { InputAdornment } from 'material-ui/Input'


import { MenuItem } from 'material-ui/Menu'

const InputEnd = ({ icon }) => (
  <Fragment>
    {icon ? (
      <InputAdornment position="end">
        {icon}
      </InputAdornment>
    ) : null}
  </Fragment>
)

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
  rows,
  required,
  error,
  iconEnd,
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
    rows={rows}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyPress={onKeyPress}
    InputProps={{
      endAdornment: (<InputEnd icon={iconEnd} />)
    }}
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
  rows: PropTypes.number,
  isMultiline: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  required: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  classNames: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  select: PropTypes.bool,
  options: PropTypes.array,
  iconEnd: PropTypes.element,
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

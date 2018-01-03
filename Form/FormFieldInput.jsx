import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

const FormFieldInput = ({
  id,
  title,
  value,
  isMultiline,
  handleChange,
  helperText,
  classNames
}) => (
  <TextField
    id={id}
    label={title}
    value={value}
    multiline={isMultiline}
    onChange={handleChange(id)}
    className={classNames.join(' ')}
    helperText={helperText}
    margin="normal"
    fullWidth
  />
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
  classNames: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

FormFieldInput.defaultProps = {
  id: '',
  title: '',
  value: '',
  isMultiline: false,
  helperText: '',
  classNames: [],
  handleChange: () => {},
}

export default FormFieldInput

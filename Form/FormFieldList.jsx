import React from 'react'
import PropTypes from 'prop-types'

import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select';

const FormFieldList = ({
  id,
  title,
  value,
  options,
  handleChange,
  helperText,
  classNames,
}) => (
  <FormControl className={classNames.join(' ')}>
    <InputLabel htmlFor={id}>{title}</InputLabel>
    <Select
      value={value}
      onChange={handleChange(id)}
      input={<Input name="age" id={id} />}
    >
      {options ?
        options.map((option, index) => (
          <MenuItem value={option} key={index}>{option}</MenuItem>
        )) : null}
    </Select>
    {helperText ? (
      <FormHelperText>{helperText}</FormHelperText>
    ) : null}
  </FormControl>
)

FormFieldList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
  classNames: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

FormFieldList.defaultProps = {
  id: '',
  title: '',
  value: '',
  helperText: '',
  classNames: [],
  options: [],
  handleChange: () => { },
}

export default FormFieldList

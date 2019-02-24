import React from 'react'
import PropTypes from 'prop-types'

const FormFieldHidden = ({
  id,
  value,
}) => (
  <input
    id={id}
    type="hidden"
    value={value}
    disabled
  />
)

FormFieldHidden.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
}

FormFieldHidden.defaultProps = {
  value: '',
}

export default FormFieldHidden

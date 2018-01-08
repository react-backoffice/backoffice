import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

import FormGroupWrapper from './FormGroupWrapper'
import FormField from './FormField'
import FormSubmitButton from './FormSubmitButton'

const styles = (theme) => ({
  title: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

const FormBranch = ({
  form,
  data,
  loading,
  fixedSubmit,
  updateFieldData,
  handleSubmit,
  onSubmit,
  submitText,
  children,
  classes,
}) => {
  const renderField = (field, index) => {
    let value = data[field.id] && data[field.id].value

    if (!value) {
      value = field.value
    }

    return (
      <FormField
        key={index}
        {...field}
        fieldId={field.id}
        value={value}
        handleChange={updateFieldData}
      />
    )
  }

  const generateFields = (data, group) => {
    return data.map((field, index) => {
      if (field.group) {
        return (
          <FormGroupWrapper
            key={index}
            isVisible={field.isVisible}
            isPaper={!field.integrated}
          >
            {field.title ? (
              <Typography
                type={field.integrated ? 'subheading' : 'title'}
                className={classes.title}
              >
                {field.title}
              </Typography>
            ) : ''}
            {generateFields(field.data, field)}
          </FormGroupWrapper>
        )
      }

      return renderField(field, index)
    })
  }

  const elements = generateFields(form)

  return (
    <form noValidate autoComplete="off">
      {elements}

      {children}

      <FormSubmitButton
        onSubmit={handleSubmit}
        disabled={loading}
        loading={loading}
        fixed={fixedSubmit}
      >
        {submitText}
      </FormSubmitButton>
    </form>
  )
}

FormBranch.propTypes = {
  form: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.object.isRequired,
  fixedSubmit: PropTypes.bool,
  updateFieldData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
}

FormBranch.defaultProps = {
  form: [],
  data: {},
  fixedSubmit: false,
  updateFieldData: () => {},
  handleSubmit: () => {},
  submitText: 'Save',
}

export default withStyles(styles)(FormBranch)

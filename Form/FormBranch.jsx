import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

import FormGroupWrapper from './FormGroupWrapper'
import FormField from './FormField'
import FormSubmitButton from './FormSubmitButton'

const styles = theme => ({
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
  submitText,
  children,
  classes,
}) => {
  const renderField = (field, index) => {
    let valueName = data[field.id] && data[field.id].value

    if (!valueName) {
      valueName = field.value
    }

    return (
      <FormField
        key={index}
        {...field}
        fieldId={field.id}
        value={valueName}
        handleChange={updateFieldData}
      />
    )
  }

  const generateFields = formData => formData.map((field, index) => {
    if (field.group) {
      return (
        <FormGroupWrapper
          key={`group.${field.id}`}
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
  form: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  fixedSubmit: PropTypes.bool,
  updateFieldData: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitText: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

FormBranch.defaultProps = {
  data: {},
  fixedSubmit: false,
  updateFieldData: () => {},
  handleSubmit: () => {},
  submitText: 'Save',
  children: null,
}

export default withStyles(styles)(FormBranch)

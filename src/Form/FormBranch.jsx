import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  withStyles,
} from '@material-ui/core'

import FormGroupWrapper from './FormGroupWrapper'
import FormField from './FormField'
import FormSubmitButton from './FormSubmitButton'

const styles = theme => ({
  title: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  errorMessage: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    color: theme.palette.error.main,
  },
})


const Element = ({ useFormElement, ...props }) => {
  if (useFormElement) {
    return (
      <form {...props} />
    )
  }

  return (
    <div {...props} />
  )
}

Element.propTypes = {
  useFormElement: PropTypes.bool.isRequired,
}

const FormBranch = ({
  form,
  data,
  loading,
  useFormElement,
  error,
  errorMessage,
  isFixedSubmitButton,
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
              variant={field.integrated ? 'subheading' : 'title'}
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
    <Element useFormElement={useFormElement} noValidate autoComplete="off">
      {elements}

      {children}

      {error ? (
        <Typography variant="body1" className={classes.errorMessage}>{errorMessage}</Typography>
      ) : null}

      <FormSubmitButton
        onSubmit={handleSubmit}
        disabled={loading}
        loading={loading}
        fixed={isFixedSubmitButton}
      >
        {submitText}
      </FormSubmitButton>
    </Element>
  )
}

FormBranch.propTypes = {
  form: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  useFormElement: PropTypes.bool,
  isFixedSubmitButton: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  updateFieldData: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitText: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

FormBranch.defaultProps = {
  data: {},
  useFormElement: true,
  isFixedSubmitButton: false,
  error: false,
  errorMessage: 'An error occured. Please fill out all required fields correctly.',
  updateFieldData: () => {},
  handleSubmit: () => {},
  submitText: 'Save',
  children: null,
}

export default withStyles(styles)(FormBranch)

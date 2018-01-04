import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

import { withStyles } from 'material-ui/styles'

import FormField from './FormField'
import FormSubmitButton from './FormSubmitButton'

const styles = (theme) => ({
  group: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  groupTitle: {
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
  const getId = (group, field) => {
    return `${group.id}.${field.id}`
  }

  const renderField = (group, field, index) => {
    let value = data[field.id] || field.value

    return (
      <FormField
        key={index}
        {...field}
        id={getId(group, field)}
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
          <Paper className={classes.group} key={index}>
            {field.title ? (
              <Typography type="title" className={classes.groupTitle}>
                {field.title}
              </Typography>
            ) : ''}
            {generateFields(field.data, field)}
          </Paper>
        )
      }

      return renderField(group, field, index)
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

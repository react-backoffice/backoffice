import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import FormGroupWrapper from "./FormGroupWrapper";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";

const styles = (theme: any) => ({
  title: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  errorMessage: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.error.main,
  },
});

type FormBranchProps = {
  form: object[];
  data?: {
    [key: string]: Record<string, any>;
  };
  loading: boolean;
  useFormElement?: boolean;
  isFixedSubmitButton?: boolean;
  error?: boolean;
  errorMessage?: string;
  updateFieldData?: (...args: any[]) => any;
  handleSubmit?: (...args: any[]) => any;
  submitText?: string;
  classes: {
    [key: string]: string;
  };
};

type ElementProps = {
  useFormElement?: boolean;
  noValidate: boolean;
  autoComplete: string;
};

const Element: React.SFC<ElementProps> = ({ useFormElement, ...props }) => {
  if (useFormElement) {
    return <form {...props} />;
  }

  return <div {...props} />;
};

const FormBranch: React.SFC<FormBranchProps> = ({
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
  if (!data) {
    return null;
  }

  const renderField = (field: any, index: number) => {
    let valueName = data[field.id] && data[field.id].value;
    if (!valueName) {
      valueName = field.value;
    }
    return (
      <FormField
        key={index}
        {...field}
        fieldId={field.id}
        value={valueName}
        handleChange={updateFieldData}
      />
    );
  };

  const generateFields = (formData: any) =>
    formData.map((field: any, index: number) => {
      if (field.group) {
        return (
          <FormGroupWrapper
            key={`group.${field.id}`}
            isVisible={field.isVisible}
            isPaper={!field.integrated}
          >
            {field.title ? (
              <Typography
                variant={field.integrated ? "h6" : "h5"}
                className={classes.title}
              >
                {field.title}
              </Typography>
            ) : null}

            {generateFields(field.data)}
          </FormGroupWrapper>
        );
      }
      return renderField(field, index);
    });

  const elements = generateFields(form);

  return (
    <Element useFormElement={useFormElement} noValidate autoComplete="off">
      {elements}

      {children}

      {error && (
        <Typography variant="body2" className={classes.errorMessage}>
          {errorMessage}
        </Typography>
      )}

      <FormSubmitButton
        onSubmit={handleSubmit as any}
        disabled={loading}
        loading={loading}
        fixed={isFixedSubmitButton}
      >
        {submitText}
      </FormSubmitButton>
    </Element>
  );
};

FormBranch.defaultProps = {
  data: {},
  useFormElement: true,
  isFixedSubmitButton: false,
  error: false,
  errorMessage:
    "An error occured. Please fill out all required fields correctly.",
  updateFieldData: () => {},
  handleSubmit: () => {},
  submitText: "Save",
};

export default withStyles(styles)(FormBranch);

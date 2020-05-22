import React, { FunctionComponent, useCallback } from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import FormGroupWrapper from "./FormGroupWrapper";
import FormFieldBranch from "./FormField";
import FormSubmitButton from "./FormSubmitButton";
import FormState from "./FormState";
import { FormField } from ".";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },

  errorMessage: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));

type ElementProps = {
  useFormElement?: boolean;
  noValidate: boolean;
  autoComplete: string;
};

const Element: FunctionComponent<ElementProps> = ({
  useFormElement,
  ...props
}) => {
  if (useFormElement) {
    return <form {...props} />;
  }

  return <div {...props} />;
};

type Props = {
  form: FormField[];
  data?: {
    [key: string]: Record<string, any>;
  };
  useFormElement?: boolean;
  isFixedSubmitButton?: boolean;
  errorMessage?: string;
  onSubmit: (...args: any[]) => any;
  submitText?: string;
  isLoading?: boolean;
  showErrors?: boolean;
};

const Form: FunctionComponent<Props> = ({
  form,
  onSubmit,
  children,
  useFormElement = true,
  isFixedSubmitButton = false,
  errorMessage = "An error occured. Please fill out all required fields correctly.",
  submitText = "Save",
  isLoading,
  showErrors,
}) => {
  const classes = useStyles();

  const generateFields = useCallback(
    (formData: FormField[]) =>
      formData.map((field: any, index: number) => {
        if (field.group) {
          return (
            <FormGroupWrapper
              key={`group.${field.id}`}
              isVisible={field.isVisible}
              isPaper={!field.integrated}
            >
              {field.title && (
                <Typography
                  variant={field.integrated ? "h6" : "h5"}
                  className={classes.title}
                  gutterBottom
                >
                  {field.title}
                </Typography>
              )}

              {generateFields(field.data)}
            </FormGroupWrapper>
          );
        }

        return (
          <FormState
            Component={FormFieldBranch}
            key={index}
            showErrors={showErrors}
            {...field}
          />
        );
      }),
    [showErrors, classes.title],
  );

  const elements = generateFields(form);

  return (
    <Element useFormElement={useFormElement} noValidate autoComplete="off">
      {elements}

      {children}

      {showErrors && (
        <Typography variant="body2" className={classes.errorMessage}>
          {errorMessage}
        </Typography>
      )}

      <FormSubmitButton
        onSubmit={onSubmit}
        disabled={isLoading}
        loading={isLoading}
        fixed={isFixedSubmitButton}
      >
        {submitText}
      </FormSubmitButton>
    </Element>
  );
};

export default Form;

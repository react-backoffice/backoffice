import React, { FunctionComponent, useReducer, useState } from "react";
import FormBranch from "./Form";
import { Validator } from "./utils/isValid";
import FormContext from "./hooks/FormContext";
import reducer from "./hooks/reducer";

export type FormFieldGroup = {
  id: string;
  group: true;
  data: FormField[];
  integrated?: boolean;
  isVisible?: boolean;
};

export type FormFieldField = {
  id: string;
  type: string;
  title?: string;
  value?: any;
  validators?: Validator[];
  width?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  options?: string[];
  rows?: number;
  iconEnd?: any;
  content?: any;
  beforeSubmit?: (value: FormFieldField["value"]) => any;
  helperText?: string;
  format?: string;
};

export type FormField = FormFieldGroup | FormFieldField;

type FormProps = {
  form: FormField[];
  data: {
    [key: string]: {
      value: any;
    };
  };
  onDataChanged?: (...args: any[]) => any;
  onSubmit: (...args: any[]) => any;
  submitText?: string;
  isLoading?: boolean;
  isFixedSubmitButton?: boolean;
};

const Form: FunctionComponent<FormProps> = ({
  form,
  data,
  onSubmit: onSubmitProps,
  ...props
}) => {
  const [showErrors, setShowErrors] = useState(false);
  const [state, dispatch] = useReducer(reducer, data);

  const onSubmit = () => {
    const validation =
      state && Object.values(state).map((field: any) => field.isValid);

    if (validation?.includes(false)) {
      setShowErrors(true);

      return;
    }

    onSubmitProps(state);
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <FormBranch
        onSubmit={onSubmit}
        form={form}
        showErrors={showErrors}
        {...props}
      />
    </FormContext.Provider>
  );
};

export default Form;

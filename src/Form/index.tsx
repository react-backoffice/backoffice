import React, {
  FunctionComponent,
  useReducer,
  useState,
  useCallback,
} from "react";
import FormBranch from "./Form";
import { Validator } from "./utils/isValid";
import FormContext from "./FormContext";
import reducer, { enrichInitialData, State } from "./utils/reducer";
import isObject from "./utils/isObject";

const findValue = (object: Record<string, any>, searchValue: any) => {
  let value;

  Object.keys(object).some((k) => {
    if (object[k] === searchValue) {
      value = object[k];

      return true;
    }

    if (object[k] && isObject(object[k])) {
      value = findValue(object[k], searchValue);

      return value !== undefined;
    }
  });

  return value;
};

const getMappedData = (state: State, attribute = "value") => {
  const response: Record<string, any> = {};

  state &&
    Object.entries(state).forEach(([key, value]) => {
      if (!isObject(value)) {
        return;
      }

      if (Object.keys(value).includes(attribute)) {
        response[key] = value[attribute];

        return;
      }

      response[key] = getMappedData(value, attribute);
    });

  return response;
};

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
  onBeforeSubmit?: (value: FormFieldField["value"]) => any;
  helperText?: string;
  format?: string;
};

export type FormField = FormFieldGroup | FormFieldField;

type FormProps = {
  form: FormField[];
  data: Record<string, any>;
  onDataChanged?: (...args: any[]) => any;
  onSubmit: (...args: any[]) => any;
  errorMessage?: string;
  submitText?: string;
  isLoading?: boolean;
  isFixedSubmitButton?: boolean;
};

const fieldIsField = (
  field: FormFieldGroup | FormFieldField | undefined,
): field is FormFieldField => {
  return !!field && !(field as any).group;
};

const fieldIsGroup = (
  field: FormFieldGroup | FormFieldField | undefined,
): field is FormFieldGroup => {
  return !!field && (field as any).group;
};

const findFields = (fields: FormField[], key: string): FormFieldField[] => {
  const matchingFields = fields.flatMap((field) => {
    if (fieldIsGroup(field)) {
      return findFields(field.data, key);
    }

    if (field.id === key) {
      return [field];
    }

    return [];
  });

  return matchingFields;
};

const Form: FunctionComponent<FormProps> = ({
  form,
  data,
  onSubmit: onSubmitProp,
  onDataChanged,
  ...props
}) => {
  const [showErrors, setShowErrors] = useState(false);
  const [state, dispatch] = useReducer(
    reducer(onDataChanged),
    enrichInitialData(data),
  );

  const onSubmit = useCallback(() => {
    const currentValidState = getMappedData(state, "isValid");
    const hasInvalid = findValue(currentValidState, false) === false;

    if (hasInvalid) {
      setShowErrors(true);

      return;
    }

    const mappedResponse = getMappedData(state);
    const response = { ...mappedResponse };

    Object.entries(mappedResponse).map(([key, value]) => {
      const matchingField = findFields(form, key)?.[0];

      if (fieldIsField(matchingField) && matchingField?.onBeforeSubmit) {
        response[key] = matchingField.onBeforeSubmit(value);

        return;
      }

      response[key] = value;
    });
    onSubmitProp(response);
  }, [form, state, onSubmitProp]);

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

import React, {
  FunctionComponent,
  useContext,
  useCallback,
  useEffect,
} from "react";
import isValid, { Validator } from "./utils/isValid";
import { getFieldById } from "./utils/reducer";
import FormContext from "./FormContext";
import { TYPES } from "./constants";

type Props = {
  type: string;
  id: string;
  isRequired?: boolean;
  validators?: Validator[];
  Component: FunctionComponent<any>;
  showErrors?: boolean;
  helperText?: string;
  isDisabled?: boolean;
};

const FormState: FunctionComponent<Props> = ({
  Component,
  showErrors,
  ...props
}) => {
  const { type, id, isRequired, validators, helperText, isDisabled } = props;
  const { dispatch, state } = useContext(FormContext);
  const field = getFieldById(id.split("."), state);

  const changeField = useCallback(
    (event: any) => {
      let newValue;

      if (event?.target) {
        newValue = event.target.value;
      } else if (event instanceof Date) {
        newValue = event.getTime();
      }

      if (type === TYPES.NUMBER) {
        newValue = parseFloat(newValue);
      }

      const isValidWithMessages = isValid({
        type,
        isRequired,
        validators,
        value: newValue,
        isDisabled,
      });

      dispatch({
        type: "UPDATE_FIELD",
        payload: {
          id,
          data: {
            ...field,
            value: newValue,
            ...isValidWithMessages,
          },
        },
      });
    },
    // eslint-disable-next-line
    [field, dispatch],
  );

  useEffect(
    () =>
      changeField({
        target: {
          value: field?.value,
        },
      }),
    // eslint-disable-next-line
    [],
  );

  return (
    <Component
      {...props}
      onChange={changeField}
      value={field?.value ?? ""}
      error={showErrors && !field?.isValid}
      helperText={showErrors && !field?.isValid ? field?.messages : helperText}
    />
  );
};

export default FormState;

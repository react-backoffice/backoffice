import React, {
  FunctionComponent,
  useContext,
  useCallback,
  useEffect,
} from "react";
import isValid, { Validator } from "./utils/isValid";
import FormContext from "./hooks/FormContext";
import { TYPES } from "./constants";

type Props = {
  type: string;
  id: string;
  isRequired?: boolean;
  validators?: Validator[];
  Component: FunctionComponent<any>;
  showErrors?: boolean;
};

type FieldData = {
  type: string;
  id: string;
  isRequired?: boolean;
  validators?: Validator[];
};

const FormState: FunctionComponent<Props> = ({
  Component,
  showErrors,
  ...props
}) => {
  const { type, id, isRequired, validators } = props;
  const { dispatch, state } = useContext(FormContext);

  const changeField = useCallback(
    (event: any) => {
      let newValue;

      if (event.target) {
        newValue = event.target.value;
        // eslint-disable-next-line no-underscore-dangle
      } else if (event._isAMomentObject) {
        newValue = event.valueOf();
      }

      if (type === TYPES.NUMBER) {
        newValue = parseFloat(newValue);
      }

      const isValidWithMessages = isValid(
        type,
        isRequired,
        validators,
        newValue,
      );

      dispatch({
        type: "UPDATE_FIELD",
        payload: {
          id,
          data: {
            ...state?.[id],
            value: newValue,
            ...isValidWithMessages,
          },
        },
      });
    },
    // eslint-disable-next-line
    [state, dispatch],
  );

  useEffect(
    () =>
      changeField({
        target: {
          value: state?.[id]?.value,
        },
      }),
    // eslint-disable-next-line
    [],
  );

  return (
    <Component
      {...props}
      onChange={changeField}
      value={state?.[id]?.value ?? ""}
      error={showErrors && !state?.[id]?.isValid}
    />
  );
};

export default FormState;

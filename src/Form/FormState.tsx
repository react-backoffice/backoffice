import React, {
  FunctionComponent,
  useContext,
  useCallback,
  useEffect,
} from "react";
import isValid, { Validator } from "./utils/isValid";
import FormContext from "./FormContext";
import { TYPES } from "./constants";

type Props = {
  type: string;
  id: string;
  isRequired?: boolean;
  validators?: Validator[];
  Component: FunctionComponent<any>;
  showErrors?: boolean;
};

const getFieldById = (
  ids: string[],
  data?: Record<string, any>,
): Record<string, any> => {
  if (ids[1]) {
    return getFieldById(ids.slice(1), data?.[ids[0]]);
  }

  return data?.[ids[0]];
};

const FormState: FunctionComponent<Props> = ({
  Component,
  showErrors,
  ...props
}) => {
  const { type, id, isRequired, validators } = props;
  const { dispatch, state } = useContext(FormContext);
  const splittedId = id.split(".");
  const field = getFieldById(splittedId, state);

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
    />
  );
};

export default FormState;

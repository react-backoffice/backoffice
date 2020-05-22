import * as Validators from "./validators";
import { TYPES } from "../constants";

export type Validator =
  | string
  | ((...args: any[]) => any)
  | {
      validator?: string | ((...args: any[]) => any) | undefined;
      message?: string | undefined;
    };

export const getValidator = (validator: Validator): any => {
  if (typeof validator === "function") {
    return {
      validator,
    };
  }

  if (typeof validator === "string") {
    return {
      validator: Validators[validator],
    };
  }

  return validator;
};

/**
 * Returns an object
 */
export default (
  type: any,
  isRequired?: boolean,
  validators: Validator[] = [],
  value?: any,
) => {
  const allValidators = [...validators];
  const messages: Validator[] = [];

  if (isRequired) {
    allValidators.push("required");
  }

  if (type === TYPES.EMAIL) {
    allValidators.push("email");
  }

  if (type === TYPES.URL) {
    allValidators.push("url");
  }

  if (allValidators.length === 0) {
    return {
      valid: true,
    };
  }

  const validatorFunctions = allValidators.map(getValidator);

  const validState = validatorFunctions.map((validator) => {
    if (validator.message) {
      messages.push(validator.message);
    }

    return validator.validator(value);
  });

  const isValid = validState.indexOf(false) === -1;

  return {
    isValid,
    messages: !isValid ? messages : [],
  };
};

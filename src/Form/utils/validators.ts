import Isemail from "isemail";
import isUrl from "is-url";

/**
 * Check if a field has any value at all
 */
export const required = (value: any) => {
  let checkValue = value;

  if (typeof value === "string") {
    checkValue = value.trim();

    return !!(checkValue && checkValue.length > 0);
  }

  if (typeof value === "number") {
    return !Number.isNaN(value);
  }

  return checkValue !== undefined;
};

/**
 * Check if a value is readable for machines (e.g. as identifier)
 */
export const machinereadable = (value: any) =>
  (value && value === encodeURIComponent(value)) || !value;

/**
 * Check if value is a date
 */
export const date = (value: any) =>
  (value && !Number.isNaN(Date.parse(value))) || !value;

/**
 * Check if value is email
 */
export const email = (value: any) =>
  (value && Isemail.validate(value)) || !value;

/**
 * Check if value is url
 */
export const url = (value: any) => (value && isUrl(value)) || !value;

import React, { Fragment } from "react";
import { TextField, InputAdornment, MenuItem } from "@material-ui/core";

type InputEndProps = {
  icon?: JSX.Element;
};

const InputEnd: React.SFC<InputEndProps> = ({ icon }) => (
  <Fragment>
    {icon && <InputAdornment position="end">{icon}</InputAdornment>}
  </Fragment>
);

InputEnd.defaultProps = {
  icon: undefined,
};

type FormFieldInputProps = {
  id: string;
  type?: string;
  title?: string;
  value?: string | any[] | number;
  defaultValue?: string | any[] | number;
  rows?: number;
  isMultiline?: boolean;
  helperText?: string;
  isRequired?: boolean;
  error?: boolean;
  className?: string;
  handleChange?: (...args: any[]) => any;
  select?: boolean;
  options?: string[];
  isDisabled?: boolean;
  iconEnd?: JSX.Element;
  onFocus?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onKeyPress?: (...args: any[]) => any;
};

const FormFieldInput: React.SFC<FormFieldInputProps> = ({
  id,
  type,
  title,
  value,
  isMultiline,
  handleChange,
  helperText,
  defaultValue,
  select,
  options,
  rows,
  isRequired,
  error,
  iconEnd,
  isDisabled,
  className,
  onFocus,
  onBlur,
  onKeyPress,
}) => (
  <TextField
    id={id}
    type={type}
    label={title}
    value={value}
    multiline={isMultiline}
    onChange={handleChange && handleChange(id)}
    helperText={helperText}
    defaultValue={defaultValue}
    select={select}
    required={isRequired}
    error={error}
    margin="normal"
    fullWidth
    rows={rows}
    disabled={isDisabled}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyPress={onKeyPress}
    InputProps={{
      endAdornment: <InputEnd icon={iconEnd} />,
    }}
    className={className}
  >
    {options
      ? options.map((option) => (
          <MenuItem value={option} key={option.toLowerCase().replace(/ /, "")}>
            {option}
          </MenuItem>
        ))
      : null}
  </TextField>
);

FormFieldInput.defaultProps = {
  type: "text",
  value: "",
  isMultiline: false,
  helperText: "",
  className: "",
  isRequired: false,
  error: false,
  rows: 1,
  select: false,
  options: [],
  isDisabled: false,
  handleChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onKeyPress: () => {},
};

export default FormFieldInput;

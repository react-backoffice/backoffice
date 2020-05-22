import React, { FunctionComponent } from "react";
import { TextField, InputAdornment, MenuItem } from "@material-ui/core";
import { TYPES } from "../constants";

type InputEndProps = {
  icon?: JSX.Element;
};

const InputEnd: FunctionComponent<InputEndProps> = ({ icon }) => {
  return icon ? <InputAdornment position="end">{icon}</InputAdornment> : null;
};

type Props = {
  id: string;
  type?: string;
  title?: string;
  defaultValue?: string | any[] | number;
  rows?: number;
  isMultiline?: boolean;
  helperText?: string;
  isRequired?: boolean;
  error?: boolean;
  className?: string;
  select?: boolean;
  options?: string[];
  isDisabled?: boolean;
  iconEnd?: JSX.Element;
  onFocus?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onKeyPress?: (...args: any[]) => any;
  onChange: (event: any) => any;
  value?: any;
};

const Input: FunctionComponent<Props> = ({
  id,
  type = TYPES.TEXT,
  title,
  isMultiline = false,
  helperText,
  defaultValue,
  select = false,
  options = [],
  rows = 1,
  isRequired = false,
  error = false,
  iconEnd,
  isDisabled = false,
  className,
  onFocus,
  onBlur,
  onKeyPress,
  onChange,
  value,
}) => {
  return (
    <TextField
      id={id.replace(/[\[,\]]/g, "-")}
      type={type}
      label={title}
      value={value}
      multiline={isMultiline}
      onChange={onChange}
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
      {options &&
        options.map((option) => (
          <MenuItem value={option} key={option.toLowerCase().replace(/ /, "")}>
            {option}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default Input;
